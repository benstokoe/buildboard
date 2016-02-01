import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SettingsPod from '../../../js/components/SettingsPod.react';
import Settings from '../../../js/components/Settings.react';

describe('Settings Pod', () => {
  it('should show and hide the settings based on settings', () => {
    const settings = {
      visible: false
    };
    const onSettingsClick = () => {};
    const handleVisibilityClick = () => {};

    const wrapper = shallow(
      <SettingsPod
        settings={ settings }
        onSettingsClick={ onSettingsClick }
        onVisibilityClick={ handleVisibilityClick }
      />);
    expect(wrapper.find(Settings).length).to.equal(0);
    expect(wrapper.find('.settings-cog').length).to.equal(1);

    settings.visible = true;
    wrapper.setProps(settings);
    expect(wrapper.find(Settings).length).to.equal(1);
  });

  it('should open the settings pod when the cog is clicked on', () => {
    const settings = {
      visible: false
    };
    let cogClicked = false;
    const onSettingsClick = () => {};
    const handleVisibilityClick = () => {
      cogClicked = true;
    };

    const wrapper = shallow(
      <SettingsPod
        settings={ settings }
        onSettingsClick={ onSettingsClick }
        onVisibilityClick={ handleVisibilityClick }
      />);

    wrapper.find('.settings-cog').simulate('click');
    expect(cogClicked).to.equal(true);
  });

  it('should close the settings when the x is clicked on', () => {
    const settings = {
      visible: true
    };
    let xClicked = false;
    const onSettingsClick = () => {};
    const handleVisibilityClick = () => {
      xClicked = true;
    };

    const wrapper = shallow(
      <SettingsPod
        settings={ settings }
        onSettingsClick={ onSettingsClick }
        onVisibilityClick={ handleVisibilityClick }
      />);

    wrapper.find('.close-icon').simulate('click');
    expect(xClicked).to.equal(true);
  });
});
