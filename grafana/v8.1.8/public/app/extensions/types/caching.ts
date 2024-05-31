export interface DataSourceCacheState {
  datasourceId: number;
  ttlMs: number;
  // All datasources, if "enabled = true" in the caching section, have caching enabled by default
  enabled: boolean;
  cacheResourcesEnabled: boolean;
  useDefaultTTL: boolean;
  defaultTTLMs: number;
}

export interface DataSourceCacheDTO extends DataSourceCacheState {}
