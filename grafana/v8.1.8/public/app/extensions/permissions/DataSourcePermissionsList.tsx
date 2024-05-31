import React, { PureComponent } from 'react';
import { LegacyForms, Icon } from '@grafana/ui';
import { dataSourceAclLevels, DataSourcePermissionLevel } from 'app/types/acl';
import { DataSourcePermission } from '../types';
const { Select } = LegacyForms;

export interface Props {
  items: DataSourcePermission[];
  onRemoveItem: (item: DataSourcePermission) => void;
}

export class DataSourcePermissionsList extends PureComponent<Props> {
  renderAvatar(item: DataSourcePermission) {
    if (item.teamId) {
      return <img className="filter-table__avatar" src={item.teamAvatarUrl} alt={`Avatar for team ${item.teamId}`} />;
    } else if (item.userId) {
      return <img className="filter-table__avatar" src={item.userAvatarUrl} alt={`Avatar for user ${item.userId}`} />;
    }

    return <Icon size="xl" name="eye" />;
  }

  renderDescription(item: DataSourcePermission) {
    if (item.userId) {
      return [
        <span key="name">{item.userLogin} </span>,
        <span key="description" className="filter-table__weak-italic">
          (User)
        </span>,
      ];
    }
    if (item.teamId) {
      return [
        <span key="name">{item.team} </span>,
        <span key="description" className="filter-table__weak-italic">
          (Team)
        </span>,
      ];
    }
    return <span className="filter-table__weak-italic">(Role)</span>;
  }

  render() {
    const { items } = this.props;
    const permissionLevels = [...dataSourceAclLevels];
    permissionLevels.push({ value: DataSourcePermissionLevel.Admin, label: 'Admin', description: '' });

    return (
      <table className="filter-table gf-form-group">
        <tbody>
          <tr className="gf-form-disabled">
            <td style={{ width: '1%' }}>
              <Icon size="xl" name="shield" />
            </td>
            <td style={{ width: '90%' }}>
              Admin
              <span className="filter-table__weak-italic"> (Role)</span>
            </td>
            <td />
            <td className="query-keyword">Can</td>
            <td>
              <div className="gf-form">
                <Select
                  options={permissionLevels}
                  onChange={() => {}}
                  value={permissionLevels.find((item) => item.value === DataSourcePermissionLevel.Admin)}
                  isDisabled={true}
                />
              </div>
            </td>
            <td>
              <button className="btn btn-inverse btn-small">
                <Icon name="lock" size="sm" />
              </button>
            </td>
          </tr>
          {items.map((item, index) => {
            return (
              <tr key={`${item.id}-${index}`}>
                <td style={{ width: '1%' }}>{this.renderAvatar(item)}</td>
                <td style={{ width: '90%' }}>{this.renderDescription(item)}</td>
                <td />
                <td className="query-keyword">Can</td>
                <td>
                  <div className="gf-form">
                    <Select
                      options={permissionLevels}
                      onChange={() => {}}
                      value={permissionLevels.find((item) => item.value === DataSourcePermissionLevel.Query)}
                      isDisabled={true}
                    />
                  </div>
                </td>
                <td>
                  <button className="btn btn-danger btn-small" onClick={() => this.props.onRemoveItem(item)}>
                    <Icon name="times" size="sm" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
