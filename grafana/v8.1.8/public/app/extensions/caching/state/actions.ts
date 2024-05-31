import { ThunkResult } from 'app/types';
import { getBackendSrv } from 'app/core/services/backend_srv';
import { DataSourceCacheDTO } from '../../types';

export enum ActionTypes {
  LoadDataSourceCache = 'LOAD_DATA_SOURCE_CACHE',
}

export interface LoadDataSourceCacheAction {
  type: ActionTypes.LoadDataSourceCache;
  payload: DataSourceCacheDTO;
}

const dataSourceCacheLoaded = (dataSourceCache: DataSourceCacheDTO): LoadDataSourceCacheAction => ({
  type: ActionTypes.LoadDataSourceCache,
  payload: dataSourceCache,
});

export type Action = LoadDataSourceCacheAction;

export function enableDataSourceCache(id: number): ThunkResult<void> {
  return async (dispatch) => {
    const response = await getBackendSrv().post(`/api/datasources/${id}/cache/enable`, {});
    dispatch(dataSourceCacheLoaded(response));
  };
}

export function disableDataSourceCache(id: number): ThunkResult<void> {
  return async (dispatch) => {
    const response = await getBackendSrv().post(`/api/datasources/${id}/cache/disable`, {});
    dispatch(dataSourceCacheLoaded(response));
  };
}

export function updateDataSourceCache(id: number, config: DataSourceCacheDTO): ThunkResult<void> {
  return async (dispatch) => {
    const response = await getBackendSrv().post(`/api/datasources/${id}/cache`, config);
    dispatch(dataSourceCacheLoaded(response));
  };
}

export function loadDataSourceCache(id: number): ThunkResult<void> {
  return async (dispatch) => {
    const response = await getBackendSrv().get(`/api/datasources/${id}/cache`);
    dispatch(dataSourceCacheLoaded(response));
  };
}
