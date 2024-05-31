import React, { ReactText } from 'react';
import { GrafanaTheme, dateTimeFormat } from '@grafana/data';

import { Button, Icon, IconName, LinkButton, stylesFactory, useStyles, useTheme } from '@grafana/ui';
import { ActiveUserStats, LicenseToken, VALID } from './state/api';
import { isExpired } from '../utils/index';
import { numberOfActiveUsersReached, willExpireSoon, willExpireInDays } from './index';
import { css } from '@emotion/css';

type LicenseStatus = '' | 'warning' | 'error';

interface LicenseInfoProps {
  token: LicenseToken;
  stats: ActiveUserStats | null;
  onRenewClick(): void;
  isRenewing: boolean;
}

export const LicenseInfo: React.FC<LicenseInfoProps> = ({ token, stats, onRenewClick, isRenewing }) => {
  const styles = useStyles(getStyles);

  const licenseFieldContent = getLicenseFieldContent();
  const includedAdminEditorsStatus = getUserStatStatus(
    token.included_admins,
    stats?.active_admins_and_editors,
    token.usage_billing
  );
  const includedViewersStatus = getUserStatStatus(token.included_viewers, stats?.active_viewers, token.usage_billing);

  return (
    <>
      <table className="filter-table form-inline">
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>License ID</td>
            <td style={{ width: '70%' }}>
              {token.lid}
              <LinkButton
                variant="secondary"
                size="sm"
                icon="external-link-alt"
                className={styles.buttonLink}
                href={`${token.iss}/licenses/${token.lid}`}
                aria-label="View details about your license in Grafana Cloud"
                target="_blank"
                rel="noopener noreferrer"
              >
                View details
              </LinkButton>
            </td>
          </tr>
          <tr>
            <td>Licensed URL</td>
            <td>
              <a href={token.sub} target="_blank" rel="noopener noreferrer">
                {token.sub}
              </a>
            </td>
          </tr>
          <tr>
            <td>Company</td>
            <td>{token.company}</td>
          </tr>
          <tr>
            <td>Products</td>
            <td>{token.prod}</td>
          </tr>
          <tr>
            <td>Included editors and admins</td>
            <FieldContent
              status={includedAdminEditorsStatus}
              fieldMsg={getUserStatMessage(token.included_admins, stats?.active_admins_and_editors)}
              showLinkButton={includedAdminEditorsStatus === 'error'}
              warningMsg="limit exceeded"
            />
          </tr>
          <tr>
            <td>Included viewers</td>
            <FieldContent
              status={includedViewersStatus}
              fieldMsg={getUserStatMessage(token.included_viewers, stats?.active_viewers)}
              showLinkButton={includedViewersStatus === 'error'}
              warningMsg="limit exceeded"
            />
          </tr>
          <tr>
            <td>License issued</td>
            <td>{dateTimeFormat(token.nbf * 1000)}</td>
          </tr>
          <tr>
            <td>License expires</td>
            <FieldContent
              status={licenseFieldContent.status}
              fieldMsg={dateTimeFormat(token.lexp * 1000)}
              warningMsg={licenseFieldContent.message}
            />
          </tr>
          <tr>
            <td>Usage billing</td>
            <td>{token.usage_billing ? 'On' : 'Off'}</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subheader}>Token details</h2>
      <table className="filter-table form-inline">
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Token ID</td>
            {token.status === VALID ? (
              <td style={{ width: '70%' }}>
                {token.jti}
                {isRenewing ? (
                  <span> (Renewing...)</span>
                ) : (
                  <Button
                    variant="secondary"
                    size="sm"
                    icon="sync"
                    className={styles.buttonLink}
                    onClick={onRenewClick}
                  >
                    Renew token
                  </Button>
                )}
              </td>
            ) : (
              <FieldContent
                status="error"
                fieldMsg={token.jti}
                warningMsg="your license has expired"
                showLinkButton={false}
              />
            )}
          </tr>
          <tr>
            <td>Token issued</td>
            <td>{dateTimeFormat(token.iat * 1000)}</td>
          </tr>
          <tr>
            <td>Token expires</td>
            <td>{dateTimeFormat(token.exp * 1000)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const getUserStatStatus = (includedUsers: number, activeUsers?: number, usageBilling?: boolean): LicenseStatus => {
  if (numberOfActiveUsersReached(includedUsers, activeUsers)) {
    if (usageBilling) {
      return 'warning';
    } else {
      return 'error';
    }
  }
  return '';
};

const getUserStatMessage = (includedUsers: number, activeUsers?: number): string => {
  return (activeUsers ? `Using ${activeUsers} of ` : '') + (includedUsers > 0 ? includedUsers : 'unlimited');
};

const getLicenseFieldContent = (): { status: LicenseStatus; message: string } => {
  if (isExpired()) {
    return {
      status: 'error',
      message: 'your license has expired',
    };
  }

  if (willExpireSoon()) {
    return {
      status: 'warning',
      message: `your license expires in ${willExpireInDays()} day(s)`,
    };
  }

  return {
    status: '',
    message: '',
  };
};

const getStyles = stylesFactory((theme: GrafanaTheme) => {
  return {
    warningIcon: css`
      margin-right: ${theme.spacing.xs};
    `,
    buttonLink: css`
      margin-left: ${theme.spacing.sm};
      vertical-align: baseline;
    `,
    subheader: css`
      margin-top: ${theme.spacing.lg};
      font-size: ${theme.typography.heading.h2};
    `,
  };
});

interface FieldContentProps {
  status: LicenseStatus;
  fieldMsg: ReactText;
  warningMsg?: ReactText;
  showLinkButton?: boolean;
}

const FieldContent: React.FC<FieldContentProps> = ({ status, fieldMsg, warningMsg = '', showLinkButton = true }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  if (status) {
    const { fieldStyle, iconName } = getFieldContentProperties(status, theme);
    return (
      <td className={fieldStyle}>
        <Icon className={styles.warningIcon} name={iconName} />
        {fieldMsg}
        {warningMsg && ` (${warningMsg})`}
        {showLinkButton && (
          <LinkButton
            icon="external-link-alt"
            variant="primary"
            size="sm"
            href="https://grafana.com/docs/grafana/latest/enterprise/license-restrictions/#update-license-restrictions"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonLink}
          >
            Upgrade license
          </LinkButton>
        )}
      </td>
    );
  }

  return <td>{fieldMsg}</td>;
};

const getFieldContentProperties = (status: string, theme: GrafanaTheme) => {
  switch (status) {
    case 'warning':
      return {
        fieldStyle: css`
          color: ${theme.palette.orange};
        `,
        iconName: 'info-circle' as IconName,
      };

    case 'error':
    default:
      return {
        fieldStyle: css`
          color: ${theme.palette.red};
        `,
        iconName: 'exclamation-triangle' as IconName,
      };
  }
};
