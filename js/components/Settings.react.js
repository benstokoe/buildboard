import React from 'react';
import Input from './Input.react';
import SpecificProjects from './SpecificProjects.react';

const Settings = ({ projects, settings, handleUpdateSettings }) => (
  <div className="settings-pod col-xs-12 col-sm-6">
    <h2>Settings</h2>

    <div className="settings-pod__form">
      <Input
        classes="settings-pod__dashboard-name"
        id="dashboardName"
        label="Dashboard Name"
        defaultValue={ settings.dashboardName }
        placeholder="Dashboard Name"
        onKeyUp={ (e) => { handleUpdateSettings('UPDATE_DASHBOARD_NAME', e.target.value); }}
      />

      <div className="settings-pod__show-info checkbox">
        <label>
          <input
            className="settings-pod__show-info-checkbox"
            defaultChecked={ settings.showInfo }
            type="checkbox"
            onChange={ (e) => { handleUpdateSettings('TOGGLE_PROJECT_INFO', e.target.checked); } }/>
          Show project info
        </label>
      </div>

      <div className="settings-pod__show-branches checkbox">
        <label>
          <input
            className="settings-pod__show-branches-checkbox"
            defaultChecked={ settings.showBranches }
            type="checkbox"
            onChange={ (e) => { handleUpdateSettings('TOGGLE_PROJECT_BRANCHES', e.target.checked); } }/>
          Show branches
        </label>
      </div>

      <SpecificProjects projects={ projects } settings={ settings } handleUpdateSettings={ handleUpdateSettings } />
    </div>
  </div>
);

export default Settings;
