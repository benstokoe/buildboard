import React from 'react';
import Settings from './Settings.react';

const SettingsPod = ({ projects, settings, onSettingsClick, onVisibilityClick }) => (
  <div>
    { settings.visible ?
      <div className="settings settings--visible col-xs-12 col-sm-6">
        <i className="close-icon" onClick={ onVisibilityClick }></i>
        <Settings projects={ projects } settings={ settings } handleUpdateSettings={ onSettingsClick } />
      </div>
    :
      <div className="settings">
        <i className="settings-cog" onClick={ onVisibilityClick }></i>
      </div>
    }
  </div>
);

export default SettingsPod;
