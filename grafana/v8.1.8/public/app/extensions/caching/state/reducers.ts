import { Action, ActionTypes } from './actions';
import { DataSourceCacheState } from '../../types';

const initialState: DataSourceCacheState = {
  enabled: false,
  datasourceId: 0,
  ttlMs: 0,
  defaultTTLMs: 0,
  cacheResourcesEnabled: false,
  useDefaultTTL: true,
};

export const dataSourceCacheReducer = (state = initialState, action: Action): DataSourceCacheState => {
  switch (action.type) {
    case ActionTypes.LoadDataSourceCache:
      return {
        ...action.payload,
      };
  }

  return state;
};

export default {
  dataSourceCache: dataSourceCacheReducer,
};
