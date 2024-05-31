import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddDataSourcePermissions, Props } from './AddDataSourcePermissions';
import { AclTarget } from '../../types/acl';

jest.mock('@grafana/runtime', () => ({
  getBackendSrv: () => {
    return {
      get: () => {
        return Promise.resolve([]);
      },
    };
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

const setup = () => {
  const props: Props = {
    onAddPermission: jest.fn(),
    onCancel: jest.fn(),
  };

  render(<AddDataSourcePermissions {...props} />);
};

describe('Render', () => {
  it('should render component', () => {
    setup();

    expect(screen.getByText(/add permission for/i)).toBeInTheDocument();
  });

  it('should render user picker', () => {
    setup();

    fireEvent.change(screen.getByRole('combobox'), { target: { value: AclTarget.User } });
    expect(screen.getByTestId('userPicker')).toBeInTheDocument();
  });
});
