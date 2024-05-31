import { DataFrame, dataFrameToJSON, DataSourceInstanceSettings, MutableDataFrame, PluginType } from '@grafana/data';
import { Observable, of } from 'rxjs';
import { createFetchResponse } from 'test/helpers/createFetchResponse';
import { TempoDatasource } from './datasource';
import { FetchResponse, setBackendSrv, BackendDataSourceResponse } from '@grafana/runtime';

describe('Tempo data source', () => {
  it('parses json fields from backend', async () => {
    setupBackendSrv(
      new MutableDataFrame({
        fields: [
          { name: 'traceID', values: ['04450900759028499335'] },
          { name: 'spanID', values: ['4322526419282105830'] },
          { name: 'parentSpanID', values: [''] },
          { name: 'operationName', values: ['store.validateQueryTimeRange'] },
          { name: 'startTime', values: [1619712655875.4539] },
          { name: 'duration', values: [14.984] },
          { name: 'serviceTags', values: ['{"key":"servicetag1","value":"service"}'] },
          { name: 'logs', values: ['{"timestamp":12345,"fields":[{"key":"count","value":1}]}'] },
          { name: 'tags', values: ['{"key":"tag1","value":"val1"}'] },
          { name: 'serviceName', values: ['service'] },
        ],
      })
    );
    const ds = new TempoDatasource(defaultSettings);
    const response = await ds.query({ targets: [{ refId: 'refid1' }] } as any).toPromise();

    expect(
      (response.data[0] as DataFrame).fields.map((f) => ({
        name: f.name,
        values: f.values.toArray(),
      }))
    ).toMatchObject([
      { name: 'traceID', values: ['04450900759028499335'] },
      { name: 'spanID', values: ['4322526419282105830'] },
      { name: 'parentSpanID', values: [''] },
      { name: 'operationName', values: ['store.validateQueryTimeRange'] },
      { name: 'startTime', values: [1619712655875.4539] },
      { name: 'duration', values: [14.984] },
      { name: 'serviceTags', values: [{ key: 'servicetag1', value: 'service' }] },
      { name: 'logs', values: [{ timestamp: 12345, fields: [{ key: 'count', value: 1 }] }] },
      { name: 'tags', values: [{ key: 'tag1', value: 'val1' }] },
      { name: 'serviceName', values: ['service'] },
    ]);

    expect(
      (response.data[1] as DataFrame).fields.map((f) => ({
        name: f.name,
        values: f.values.toArray(),
      }))
    ).toMatchObject([
      { name: 'id', values: ['4322526419282105830'] },
      { name: 'title', values: ['service'] },
      { name: 'subTitle', values: ['store.validateQueryTimeRange'] },
      { name: 'mainStat', values: ['14.98ms (100%)'] },
      { name: 'secondaryStat', values: ['14.98ms (100%)'] },
      { name: 'color', values: [1.000007560204647] },
    ]);

    expect(
      (response.data[2] as DataFrame).fields.map((f) => ({
        name: f.name,
        values: f.values.toArray(),
      }))
    ).toMatchObject([
      { name: 'id', values: [] },
      { name: 'target', values: [] },
      { name: 'source', values: [] },
    ]);
  });
});

function setupBackendSrv(frame: DataFrame) {
  setBackendSrv({
    fetch(): Observable<FetchResponse<BackendDataSourceResponse>> {
      return of(
        createFetchResponse({
          results: {
            refid1: {
              frames: [dataFrameToJSON(frame)],
            },
          },
        })
      );
    },
  } as any);
}

const defaultSettings: DataSourceInstanceSettings = {
  id: 0,
  uid: '0',
  type: 'tracing',
  name: 'jaeger',
  meta: {
    id: 'jaeger',
    name: 'jaeger',
    type: PluginType.datasource,
    info: {} as any,
    module: '',
    baseUrl: '',
  },
  jsonData: {},
};
