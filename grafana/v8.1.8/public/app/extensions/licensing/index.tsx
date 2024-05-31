import React, { useState } from 'react';
import store from 'app/core/store';
import { config } from 'app/core/config';
import { contextSrv } from 'app/core/services/context_srv';
import { dateTime } from '@grafana/data';
import { IsInvalid, HasExpired, ExpiresSoon, TokenExpiresSoon, MaxUsersReached } from './LicenseWarning';
import { OrgRole } from 'app/types';
import { refreshLicenseStats, ActiveUserStats } from './state/api';
import { isExpired, isInvalid } from '../utils';
import { addBodyRenderHook } from 'app/AppWrapper';

const DISMISS_WARNING_FOR_DAYS = 5;
/* The auto dismiss cannot be too low as it will also trigger the snooze */
const WARNING_CLOSE_TIMEOUT_SEC = 3600;
const LICENSE_WARNING_DISMISS_UNTIL_KEY = 'grafana.licence.warning.dismissUntil';

interface LicensingSettings {
  activeAdminsAndEditors?: number;
  activeViewers?: number;
  includedAdmins?: number;
  includedViewers?: number;
  slug?: string;
  licenseExpiry?: number;
  licenseExpiryWarnDays?: number;
  tokenExpiry?: number;
  tokenExpiryWarnDays?: number;
  usageBilling?: boolean;
}

export function initLicenseWarnings() {
  addBodyRenderHook(LicenseWarning);
}

export function LicenseWarning() {
  const [isClosed, setIsClosed] = useState(false);
  const [settings, updateSettings] = useState((config as any).licensing as LicensingSettings);

  const dismissUntil = store.get(LICENSE_WARNING_DISMISS_UNTIL_KEY);
  const hasDismissed = dismissUntil && dismissUntil > dateTime().valueOf();
  const isAdmin = contextSrv.hasRole(OrgRole.Admin);
  const showExpireSoon = isAdmin && willExpireSoon() && !hasDismissed;
  const showTokenExpireSoon = isAdmin && tokenWillExpireSoon() && !hasDismissed;
  const maxAdminsReached = numberOfActiveUsersReached(settings.includedAdmins, settings.activeAdminsAndEditors);
  const maxViewersReached = numberOfActiveUsersReached(settings.includedViewers, settings.activeViewers);
  const usageBillingDisabled = isUsageBillingDisabled();
  const isAdminOrServerAdmin = isAdmin || contextSrv.isGrafanaAdmin;
  const showMaxUsersReached = usageBillingDisabled && (maxAdminsReached || maxViewersReached) && isAdminOrServerAdmin;

  if (isRenderingPanel() || isLicenseAdminPage()) {
    return null;
  }

  const onCloseWarning = () => {
    const dismissTill = dateTime().add(DISMISS_WARNING_FOR_DAYS, 'd').valueOf();
    store.set(LICENSE_WARNING_DISMISS_UNTIL_KEY, dismissTill);
    setIsClosed(true);
  };

  const onRefreshWarning = async () => {
    const activeUserStats: ActiveUserStats | null = await refreshLicenseStats().catch((err) => null);

    if (activeUserStats) {
      const update = {
        ...settings,
        activeAdminsAndEditors: activeUserStats.active_admins_and_editors,
        activeViewers: activeUserStats.active_viewers,
      };

      // update on config object as well
      (config as any).licensing = update;

      updateSettings(update);
    }
  };

  if (isClosed) {
    return null;
  }

  if (isInvalid()) {
    return <IsInvalid isGrafanaAdmin={contextSrv.isGrafanaAdmin} />;
  } else if (isExpired()) {
    return <HasExpired isGrafanaAdmin={contextSrv.isGrafanaAdmin} />;
  } else if (showMaxUsersReached) {
    return (
      <MaxUsersReached
        activeUsers={maxAdminsReached ? settings.activeAdminsAndEditors! : settings.activeViewers!}
        maxUsers={maxAdminsReached ? settings.includedAdmins! : settings.includedViewers!}
        type={maxAdminsReached ? 'admins / editors' : 'viewers'}
        slug={settings.slug}
        onRefreshWarning={isAdmin ? onRefreshWarning : undefined}
      />
    );
  } else if (showExpireSoon) {
    const expiresIn = willExpireInDays();

    // auto hide expire warning in case it's a TV monitor with admin permissions
    setTimeout(onCloseWarning, 1000 * WARNING_CLOSE_TIMEOUT_SEC);

    return <ExpiresSoon days={expiresIn} onCloseWarning={onCloseWarning} isGrafanaAdmin={contextSrv.isGrafanaAdmin} />;
  } else if (showTokenExpireSoon) {
    const expiresIn = tokenWillExpireInDays();

    // auto hide expire warning in case it's a TV monitor with admin permissions
    setTimeout(onCloseWarning, 1000 * WARNING_CLOSE_TIMEOUT_SEC);

    return (
      <TokenExpiresSoon days={expiresIn} onCloseWarning={onCloseWarning} isGrafanaAdmin={contextSrv.isGrafanaAdmin} />
    );
  }

  return null;
}

export function willExpireSoon(): boolean {
  const { licenseExpiry, licenseExpiryWarnDays = 30 } = (config as any).licensing;
  return licenseExpiry > 0 && dateTime(licenseExpiry * 1000) < dateTime().add(licenseExpiryWarnDays, 'd');
}

export function willExpireInDays(): number {
  const { licenseExpiry } = (config as any).licensing;
  return Math.ceil((licenseExpiry - dateTime().unix()) / 3600 / 24);
}

function tokenWillExpireSoon(): boolean {
  const { tokenExpiry, tokenExpiryWarnDays = 3 } = (config as any).licensing;
  return tokenExpiry > 0 && dateTime(tokenExpiry * 1000) < dateTime().add(tokenExpiryWarnDays, 'd');
}

function tokenWillExpireInDays(): number {
  const { tokenExpiry } = (config as any).licensing;
  return Math.ceil((tokenExpiry - dateTime().unix()) / 3600 / 24);
}

export function numberOfActiveUsersReached(includedUsers?: number, activeUsers?: number): boolean {
  if (includedUsers === undefined || activeUsers === undefined) {
    return false;
  }
  return includedUsers !== -1 && activeUsers > includedUsers;
}

function isUsageBillingDisabled(): boolean {
  const settings = (config as any).licensing as LicensingSettings;
  return !settings.usageBilling;
}

function isSoloPanel(): boolean {
  const soloPanelPattern = /\/d-solo\//;
  const path = window.location.pathname;
  return soloPanelPattern.test(path);
}

function isRenderingPanel(): boolean {
  return isSoloPanel();
}

function isLicenseAdminPage(): boolean {
  const pattern = /\/admin\/licensing$/;
  const path = window.location.pathname;
  return pattern.test(path);
}
