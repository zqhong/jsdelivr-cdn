import React, { FormEvent, PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { GrafanaTheme, NavModel } from '@grafana/data';

import { Alert, LinkButton, stylesFactory, Themeable, withTheme } from '@grafana/ui';
import { StoreState } from 'app/types';
import { getNavModel } from 'app/core/selectors/navModel';
import {
  getLicenseToken,
  postLicenseToken,
  renewLicenseToken,
  refreshLicenseStats,
  ActiveUserStats,
  LicenseToken,
  VALID,
  EXPIRED,
} from './state/api';
import Page from 'app/core/components/Page/Page';
import { UpgradeInfo } from 'app/features/admin/UpgradePage';
import { LicenseChrome } from 'app/features/admin/LicenseChrome';
import { initLicenseWarnings } from './index';
import { LicenseTokenUpload } from './LicenseTokenUpload';
import { LicenseInfo } from './LicenseInfo';
import { config } from 'app/core/config';
import { css } from '@emotion/css';
import { locationService } from '@grafana/runtime';
import { GrafanaRouteComponentProps } from 'app/core/navigation/types';

interface QueryParams {
  tokenUpdated?: boolean;
  tokenRenewed?: boolean;
}

interface OwnProps extends GrafanaRouteComponentProps<{}, QueryParams> {
  navModel: NavModel;
  getLicenseToken: typeof getLicenseToken;
  postLicenseToken: typeof postLicenseToken;
  renewLicenseToken: typeof renewLicenseToken;
  refreshLicenseStats: typeof refreshLicenseStats;
}

export type Props = OwnProps & Themeable;

interface State {
  token: LicenseToken | null;
  stats: ActiveUserStats | null;
  isLoading: boolean;
  isUploading: boolean;
  isRenewing: boolean;
}

class LicensePageUnthemed extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      token: null,
      stats: null,
      isLoading: true,
      isUploading: false,
      isRenewing: false,
    };
  }

  async componentDidMount() {
    const token = await this.props.getLicenseToken().catch((err) => null);
    const stats = await this.props.refreshLicenseStats().catch((err) => null);
    this.setState({ token, stats, isLoading: false });
  }

  async componentWillUnmount() {
    initLicenseWarnings();
  }

  onFileUpload = (event: FormEvent<HTMLInputElement>) => {
    const file = event.currentTarget?.files?.[0];

    if (file) {
      locationService.partial({ tokenUpdated: null, tokenRenewed: null });
      const reader = new FileReader();
      const readerOnLoad = () => {
        return async (e: any) => {
          this.setState({ isUploading: true });
          try {
            await this.props.postLicenseToken(e.target.result);
            locationService.partial({ tokenUpdated: true });
            setTimeout(() => {
              // reload from server to pick up the new token
              location.reload();
            }, 1000);
          } catch (error) {
            this.setState({ isUploading: false });
            throw error;
          }
        };
      };
      reader.onload = readerOnLoad();
      reader.readAsText(file);
    }
  };

  onRenewClick = async () => {
    locationService.partial({ tokenUpdated: null, tokenRenewed: null });

    this.setState({ isRenewing: true });

    try {
      await this.props.renewLicenseToken();
      locationService.partial({ tokenRenewed: true });
      setTimeout(() => {
        // reload from server to pick up the new token
        location.reload();
      }, 1000);
    } catch (error) {
      this.setState({ isRenewing: false });
      throw error;
    }
  };

  render() {
    const { navModel, theme } = this.props;
    const { tokenUpdated, tokenRenewed } = this.props.queryParams;
    const { token, stats, isLoading, isUploading, isRenewing } = this.state;
    const styles = getStyles(theme);

    let rootPath = window.location.origin + config.appSubUrl;
    if (rootPath.endsWith('/')) {
      rootPath.slice(0, -1);
    }
    const reportUrl = `${rootPath}/api/licensing/reports/custom-permissions`;

    let editionNotice = 'You are running Grafana Enterprise without a license. The enterprise features are disabled.';
    if (token && ![VALID, EXPIRED].includes(token.status)) {
      editionNotice = 'There is a problem with your Enterprise license token. The enterprise features are disabled.';
    }

    return (
      <Page navModel={navModel}>
        <Page.Contents isLoading={isLoading}>
          {token && [VALID, EXPIRED].includes(token.status) ? (
            <LicenseChrome header={'Enterprise license details'} subheader={token.company}>
              {tokenUpdated && (
                <Alert
                  title="License token uploaded. Restart Grafana for the changes to take effect."
                  severity="success"
                  onRemove={() => locationService.partial({ tokenUpdated: null })}
                />
              )}
              {tokenRenewed && (
                <Alert
                  title="License token renewed."
                  severity="success"
                  onRemove={() => locationService.partial({ tokenRenewed: null })}
                />
              )}
              <LicenseInfo token={token} stats={stats} onRenewClick={this.onRenewClick} isRenewing={isRenewing} />
              <div>
                <LicenseTokenUpload title="Update license" onFileUpload={this.onFileUpload} isUploading={isUploading} />
              </div>
              <div>
                <h2 className={styles.title}>Dashboard permissions report</h2>
                <p className={styles.infoText}>
                  If a viewer has edit or admin permissions to a dashboard or folder, that viewer is counted as an
                  editor. This report (in CSV format) helps you find such viewers by listing custom permissions for
                  dashboards and folders.
                </p>
                <LinkButton
                  variant="secondary"
                  href={reportUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Download dashboard permissions report"
                >
                  Download report
                </LinkButton>
              </div>
            </LicenseChrome>
          ) : (
            <>
              <UpgradeInfo editionNotice={editionNotice} />
              <div className={styles.uploadWrapper}>
                <LicenseTokenUpload
                  title="Have a license?"
                  onFileUpload={this.onFileUpload}
                  isUploading={isUploading}
                />
              </div>
            </>
          )}
        </Page.Contents>
      </Page>
    );
  }
}

export const LicensePage = withTheme(LicensePageUnthemed);

const getStyles = stylesFactory((theme: GrafanaTheme) => {
  return {
    title: css`
      margin-top: 20px;
    `,
    infoText: css`
      font-size: ${theme.typography.size.sm};
    `,
    uploadWrapper: css`
      margin-left: 79px;
    `,
  };
});

const mapStateToProps = (state: StoreState) => ({
  navModel: getNavModel(state.navIndex, 'licensing'),
  getLicenseToken,
  postLicenseToken,
  renewLicenseToken,
  refreshLicenseStats,
});

export default hot(module)(connect(mapStateToProps)(LicensePage));
