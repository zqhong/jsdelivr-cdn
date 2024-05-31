import { getBackendSrv } from 'app/core/services/backend_srv';

export interface LicenseToken {
  status: number;
  jti: string;
  iss: string;
  sub: string;
  iat: number;
  exp: number;
  nbf: number;
  lexp: number;
  lid: number;
  max_users: number;
  included_admins: number;
  included_viewers: number;
  prod: string[];
  company: string;
  usage_billing?: boolean;
}

export interface ActiveUserStats {
  active_admins_and_editors: number;
  active_viewers: number;
}

// these mirror the definition in types.go
export const NOTLOADED = 0;
export const VALID = 1;
export const LOADED = 2;
export const INVALID = 3;
export const NOTFOUND = 4;
export const EXPIRED = 5;
export const INVALID_SUBJECT = 6;

export const getLicenseToken = async (): Promise<LicenseToken> => {
  return await getBackendSrv().get('/api/licensing/token');
};

export const postLicenseToken = async (token: string): Promise<LicenseToken> => {
  return await getBackendSrv().post('/api/licensing/token', { token: token });
};

export const renewLicenseToken = async (): Promise<LicenseToken> => {
  return await getBackendSrv().post('/api/licensing/token/renew', {});
};

export const refreshLicenseStats = async (): Promise<ActiveUserStats> => {
  return await getBackendSrv().get('/api/licensing/refresh-stats');
};
