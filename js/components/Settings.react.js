import React from 'react';
import Input from './Input.react';

const Settings = ({ settings, handleUpdateSettings }) => (
  <div className="settings-pod">
    <Input
      classes="settings-pod__dashboard-name"
      id="dashboardName"
      label="Dashboard Name"
      defaultValue={ settings.dashboardName }
      placeholder="Dashboard Name"
      onKeyUp={ (e) => { handleUpdateSettings('UPDATE_DASHBOARD_NAME', e.target.value); }}
    />
  </div>
);

export default Settings;
