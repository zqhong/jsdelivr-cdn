import React, { PureComponent, SyntheticEvent } from 'react';
import { UserPicker } from 'app/core/components/Select/UserPicker';
import { TeamPicker } from 'app/core/components/Select/TeamPicker';
import { LegacyForms, Icon } from '@grafana/ui';
import { SelectableValue } from '@grafana/data';
import { dataSourceAclLevels, AclTarget, DataSourcePermissionLevel } from 'app/types/acl';
import { Team } from 'app/types';
const { Select } = LegacyForms;

export interface Props {
  onAddPermission: (state: State) => void;
  onCancel: () => void;
}

export interface State {
  userId: number;
  teamId: number;
  type: AclTarget;
  permission: DataSourcePermissionLevel;
}

export class AddDataSourcePermissions extends PureComponent<Props, State> {
  cleanState(): State {
    return {
      userId: 0,
      teamId: 0,
      type: AclTarget.Team,
      permission: DataSourcePermissionLevel.Query,
    };
  }

  state: State = this.cleanState();

  isValid() {
    switch (this.state.type) {
      case AclTarget.Team:
        return this.state.teamId > 0;
      case AclTarget.User:
        return this.state.userId > 0;
    }
    return true;
  }

  onTeamSelected = (team: SelectableValue<Team>) => {
    const value = team?.value;
    this.setState({ teamId: value ? value.id : 0 });
  };

  onUserSelected = (user: SelectableValue<number>) => {
    this.setState({ userId: user ? user.id : 0 });
  };

  onPermissionChanged = (permission: SelectableValue<DataSourcePermissionLevel>) => {
    this.setState({ permission: permission.value! });
  };

  onTypeChanged = (event: SyntheticEvent<HTMLSelectElement>) => {
    const type = event.currentTarget.value as AclTarget;
    this.setState({ type: type, userId: 0, teamId: 0 });
  };

  onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    await this.props.onAddPermission(this.state);
    this.setState(this.cleanState());
  };

  render() {
    const { onCancel } = this.props;
    const { type } = this.state;

    const pickerClassName = 'width-20';
    const aclTargets = [
      { value: AclTarget.Team, text: 'Team' },
      { value: AclTarget.User, text: 'User' },
    ];

    return (
      <div className="gf-form-inline cta-form" aria-label="Permissions slider">
        <button className="cta-form__close btn btn-transparent" onClick={onCancel}>
          <Icon name="times" />
        </button>
        <form name="addPermission" onSubmit={this.onSubmit}>
          <h5>Add Permission For</h5>
          <div className="gf-form-inline">
            <div className="gf-form">
              <select className="gf-form-input gf-size-auto" value={type} onChange={this.onTypeChanged}>
                {aclTargets.map((option, idx) => {
                  return (
                    <option key={idx} value={option.value}>
                      {option.text}
                    </option>
                  );
                })}
              </select>
            </div>
            {type === AclTarget.User && (
              <div className="gf-form">
                <UserPicker onSelected={this.onUserSelected} className={pickerClassName} />
              </div>
            )}

            {type === AclTarget.Team && (
              <div className="gf-form">
                <TeamPicker onSelected={this.onTeamSelected} className={pickerClassName} />
              </div>
            )}
            <div className="gf-form">
              <Select isSearchable={false} options={dataSourceAclLevels} onChange={this.onPermissionChanged} />
            </div>
            <div className="gf-form">
              <button data-save-permission className="btn btn-success" type="submit" disabled={!this.isValid()}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
