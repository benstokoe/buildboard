import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

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
    expect(wrapper.find('.settings__cog').length).to.equal(1);

    settings.visible = true;
    wrapper.setProps(settings);
    expect(wrapper.find(Settings).length).to.equal(1);
  });

  it('should open the settings pod when the cog is clicked on', () => {
    const settings = {
      visible: false
    };
    const onSettingsClick = () => {};
    const handleVisibilityClick = sinon.spy();

    const wrapper = shallow(
      <SettingsPod
        settings={ settings }
        onSettingsClick={ onSettingsClick }
        onVisibilityClick={ handleVisibilityClick }
      />);

    wrapper.find('.settings__cog').simulate('click');
    expect(handleVisibilityClick.calledOnce).to.equal(true);
  });

  it('should close the settings when the x is clicked on', () => {
    const settings = {
      visible: true
    };
    const onSettingsClick = () => {};
    const handleVisibilityClick = sinon.spy();

    const wrapper = shallow(
      <SettingsPod
        settings={ settings }
        onSettingsClick={ onSettingsClick }
        onVisibilityClick={ handleVisibilityClick }
      />);

    wrapper.find('.settings__close-icon').simulate('click');
    expect(handleVisibilityClick.calledOnce).to.equal(true);
  });
});
