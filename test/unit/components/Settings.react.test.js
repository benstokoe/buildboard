import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Settings from '../../../js/components/Settings.react';
import Input from '../../../js/components/Input.react';

describe('Settings', () => {
  describe('Dashboard name', () => {
    it('has in Input with a keyup callback', () => {
      const settings = { dashboardName: 'Build Dashboard' };
      const handleUpdateSettings = () => {};
      const wrapper = shallow(<Settings settings={ settings } handleUpdateSettings={ handleUpdateSettings } />);
      expect(wrapper.find(Input).prop('onKeyUp').length).to.equal(1);
    });
  });
});
