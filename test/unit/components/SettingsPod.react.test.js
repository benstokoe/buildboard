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
    const handleUpdateSettings = () => {};
    const handleCogClick = () => {};

    const wrapper = shallow(
      <SettingsPod
        settings={ settings }
        handleUpdateSettings={ handleUpdateSettings }
        onCogClick={ handleCogClick }
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
    const handleUpdateSettings = () => {};
    const handleCogClick = () => {
      cogClicked = true;
    };

    const wrapper = shallow(
      <SettingsPod
        settings={ settings }
        handleUpdateSettings={ handleUpdateSettings }
        onCogClick={ handleCogClick }
      />);

    wrapper.find('.settings-cog').simulate('click');
    expect(cogClicked).to.equal(true);
  });
});
