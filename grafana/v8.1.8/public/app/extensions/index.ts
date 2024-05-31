import LicensePage from './licensing/LicensePage';
import ReportsList from './reports/ReportsListPage';
import ReportsSettings from './reports/ReportsSettingsPage';
import ReportPage from './reports/ReportPage';
import CSVExportPage from './reports/CSVExportPage';
import reportsReducers from './reports/state/reducers';
import { initReporting } from './reports';
import DataSourcePermissions from './permissions/DataSourcePermissions';
import dataSourcePermissionReducers from './permissions/state/reducers';
import DataSourceCache from './caching/DataSourceCache';
import dataSourceCacheReducers from './caching/state/reducers';
import { addRootReducer } from 'app/store/configureStore';
import { initWhitelabeling } from './whitelabeling';
import { config } from 'app/core/config';
import { initLicenseWarnings } from './licensing';
import { initMetaAnalytics } from './meta-analytics';
import { isExpired } from './utils';
import DataSourceInsights from './meta-analytics/DataSourceInsights/DataSourceInsights';
import metaAnalyticsReducers from './meta-analytics/state/reducers';
import { extraRoutes } from 'app/routes/routes';
import { DashboardRoutes } from 'app/types';

function initEnterprise() {
  addRootReducer({
    ...dataSourcePermissionReducers,
    ...dataSourceCacheReducers,
    ...reportsReducers,
    ...metaAnalyticsReducers,
  });

  initWhitelabeling();
  initLicenseWarnings();
  initReporting();
  initMetaAnalytics();

  extraRoutes.push(
    ...[
      {
        path: '/datasources/edit/:id/permissions',
        component: DataSourcePermissions,
      },
      {
        path: '/datasources/edit/:id/cache',
        component: DataSourceCache,
      },
      {
        path: '/reports',
        component: ReportsList,
      },
      {
        path: '/reports/edit/:id',
        component: ReportPage,
      },
      {
        path: '/reports/settings',
        component: ReportsSettings,
      },
      {
        path: '/datasources/edit/:id/insights',
        component: DataSourceInsights as any,
      },
      {
        path: '/d-csv/:uid',
        pageClass: 'dashboard-solo',
        routeName: DashboardRoutes.Normal,
        component: CSVExportPage,
      },
    ]
  );

  if (!isExpired()) {
    extraRoutes.push({
      path: '/reports/new',
      component: ReportPage as any,
    });
  }
}

// initUnlicensed initialized features which are defined in Enterprise but
// should be available when running without a license.
function initUnlicensed() {
  extraRoutes.push({
    path: '/admin/licensing',
    roles: () => ['Admin'],
    component: LicensePage,
  });
}

export function init() {
  initUnlicensed();
  if (config.licenseInfo.hasLicense) {
    initEnterprise();
  }
}
