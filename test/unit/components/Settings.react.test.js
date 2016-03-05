import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Settings from '../../../js/components/Settings.react';
import Input from '../../../js/components/Input.react';
import SpecificProjects from '../../../js/components/SpecificProjects.react';

describe('Settings', () => {
  describe('Circle Token', () => {
    it('has an Input with the default value', () => {
      const settings = { circleToken: 'mycircletoken' };
      const handleUpdateSettings = () => {};
      const wrapper = shallow(<Settings projects={{}} settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);
      expect(wrapper.find('.settings-pod__circle-token').prop('children')[0].props.defaultValue).to.equal('mycircletoken');
    });

    // TODO: Mock out document.queryselector 
    it.skip('should update the circle token on update button click', () => {
      const settings = { circleToken: 'mycircletoken' };
      const handleUpdateSettings = sinon.spy();
      const wrapper = shallow(<Settings projects={{}} settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);

      wrapper.find('.settings-pod__circle-token-update-button').simulate('click', { target: { value: 'mycircletoken' }});

      expect(handleUpdateSettings.calledWith('UPDATE_CIRCLE_TOKEN', 'mycircletoken')).to.equal(true);
    });
  });

  describe('Dashboard Name', () => {
    it('has an Input with the default value and a keyup callback', () => {
      const settings = { dashboardName: 'Build Dashboard' };
      const handleUpdateSettings = () => {};
      const wrapper = shallow(<Settings projects={{}} settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);
      expect(wrapper.find('.settings-pod__dashboard-name').props().children.props.defaultValue).to.equal('Build Dashboard');
      expect(wrapper.find('.settings-pod__dashboard-name').props().children.props.onKeyUp.length).to.equal(1);
    });
  });

  describe('Project Info', () => {
    it('should render a checkbox with the default checked from settings', () => {
      const settings = { showInfo: true };
      const handleUpdateSettings = () => {};
      const wrapper = shallow(<Settings projects={{}} settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);
      expect(wrapper.find('.settings-pod__show-info-checkbox').prop('defaultChecked')).to.equal(true);

      settings.showInfo = false;
      wrapper.setProps(settings);
      expect(wrapper.find('.settings-pod__show-info-checkbox').prop('defaultChecked')).to.equal(false);
    });
  });

  describe('Show Branches', () => {
    it('should render a checkbox with the default checked from settings', () => {
      const settings = { showBranches: true };
      const handleUpdateSettings = () => {};
      const wrapper = shallow(<Settings projects={{}} settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);
      expect(wrapper.find('.settings-pod__show-branches-checkbox').prop ('defaultChecked')).to.equal(true);

      settings.showBranches = false;
      wrapper.setProps(settings);
      expect(wrapper.find('.settings-pod__show-branches-checkbox').prop('defaultChecked')).to.equal(false);
    });
  });

  describe('Show Specific Projects', () => {
    it('should render the SpecificProjects component', () => {
      const settings = { specificProjects: [ 'First project', 'Second project' ] };
      const handleUpdateSettings = () => {};
      const wrapper = shallow(<Settings projects={{}} settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);
      expect(wrapper.find(SpecificProjects).length).to.equal(1);
    });
  });

  describe('Change Author Type', () => {
    it('should render a radio group', () => {
      const settings = { authorType: 'initials' };
      const handleUpdateSettings = () => {};
      const wrapper = shallow(<Settings projects={{}} settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);

      expect(wrapper.find('.settings-pod__author-type-radio').length).to.equal(2);
    });

    it('should highlight the option form settings', () => {
      const settings = { authorType: 'initials' };
      const handleUpdateSettings = () => {};
      const wrapper = shallow(<Settings projects={{}} settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);

      expect(wrapper.find('.settings-pod__author-type-radio--initials').prop('checked')).to.equal(true);
      expect(wrapper.find('.settings-pod__author-type-radio--author').prop('checked')).to.equal(false);

      settings.authorType = 'author';
      wrapper.setProps(settings);
      expect(wrapper.find('.settings-pod__author-type-radio--initials').prop('checked')).to.equal(false);
      expect(wrapper.find('.settings-pod__author-type-radio--author').prop('checked')).to.equal(true);
    });

    it('should call update settings on radio change', () => {
      const settings = { authorType: 'initials' };
      const handleUpdateSettings = sinon.spy();
      const wrapper = shallow(<Settings projects={{}} settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);

      wrapper.find('.settings-pod__author-type-radio--author').simulate('change');
      expect(handleUpdateSettings.calledWith('CHANGE_AUTHOR_TYPE', 'author')).to.equal(true);

      wrapper.find('.settings-pod__author-type-radio--initials').simulate('change');
      expect(handleUpdateSettings.calledWith('CHANGE_AUTHOR_TYPE', 'initials')).to.equal(true);
    });
  });
});
