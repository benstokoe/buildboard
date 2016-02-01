import React from 'react';
import Settings from './Settings.react';

const SettingsPod = ({ projects, settings, onSettingsClick, onCogClick }) => (
  <div>
    { settings.visible ?
      <Settings projects={ projects } settings={ settings } handleUpdateSettings={ onSettingsClick } />
    :
      <div className="settings">
        <i className="settings-cog" onClick={ onCogClick }></i>
      </div>
    }
  </div>
);

export default SettingsPod;
