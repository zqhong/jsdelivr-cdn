import { StoreState } from 'app/types';
import { DataSourcePermissionState } from './permissions';
import { DataSourceCacheState } from './caching';
import { ReportsState } from './reports';
import { MetaAnalyticsState } from './metaanalytics';

export interface EnterpriseStoreState extends StoreState {
  dataSourcePermission: DataSourcePermissionState;
  dataSourceCache: DataSourceCacheState;
  reports: ReportsState;
  metaAnalytics: MetaAnalyticsState;
}
