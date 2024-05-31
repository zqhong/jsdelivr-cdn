import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataSourcePermissions, Props } from './DataSourcePermissions';
import { NavModel } from '@grafana/data';
import { DataSourcePermission } from '../types';

jest.mock('app/features/plugins/datasource_srv', () => {
  return {
    getDatasourceSrv: () => {
      return {};
    },
  };
});

jest.mock('@grafana/runtime', () => ({
  getBackendSrv: () => {
    return {
      get: () => {
        return Promise.resolve([]);
      },
    };
  },
}));

jest.mock('app/core/config', () => {
  return {
    buildInfo: {},
    licenseInfo: {},
    getConfig: () => {},
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

const setup = (propOverrides?: object) => {
  const props: Props = {
    permissions: [] as DataSourcePermission[],
    enabled: true,
    isDefault: false,
    pageId: 1,
    navModel: { node: {}, main: {} } as NavModel,
    addDataSourcePermission: jest.fn(),
    enableDataSourcePermissions: jest.fn(),
    disableDataSourcePermissions: jest.fn(),
    loadDataSourcePermissions: jest.fn(),
    loadDataSource: jest.fn(),
    removeDataSourcePermission: jest.fn(),
  };

  Object.assign(props, propOverrides);

  render(<DataSourcePermissions {...props} />);
};

describe('Render', () => {
  it('should render component', () => {
    setup({ enabled: false });

    expect(screen.getByText('Enable')).toBeInTheDocument();
  });

  it('should render permissions enabled', () => {
    setup({
      dataSourcePermission: {
        enabled: true,
        datasourceId: 1,
        permissions: [] as DataSourcePermission[],
      },
    });

    expect(screen.getByRole('button', { name: /add permission/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /disable permissions/i })).toBeInTheDocument();
  });
});
