import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input.react';
import SpecificProjects from './SpecificProjects.react';

const Settings = ({ projects, settings, handleUpdateSettings }) => (
  <div className="settings-pod">
    <h2>Settings</h2>

    <div className="settings-pod__settings">
      <div className="settings-pod__circle-token">
        <Input
          id="circleToken"
          label="Circle Token"
          defaultValue={ settings.circleToken }
          placeholder="Circle Token"
        />

        <a
          href="#"
          className="btn btn-primary settings-pod__circle-token-update-button"
          onClick={ () => {
            handleUpdateSettings('UPDATE_CIRCLE_TOKEN', document.querySelector('.settings-pod__circle-token input').value);
          }}
        >Update Circle Token</a>
      </div>

      <div className="settings-pod__dashboard-name">
        <Input
          id="dashboardName"
          label="Dashboard Name"
          defaultValue={ settings.dashboardName }
          placeholder="Dashboard Name"
          onKeyUp={ (e) => { handleUpdateSettings('UPDATE_DASHBOARD_NAME', e.target.value); }}
        />
      </div>

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
