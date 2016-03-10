import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../../../js/components/Header.react';

describe('Header', () => {
  it('should show the default dashboard name if no updated setting', () => {
    const wrapper = shallow(<Header title="" />);
    expect(wrapper.find('.header__title').text()).to.equal('Build Dashboard');
  });

  it('should show the updated dashboard name from the settings', () => {
    const wrapper = shallow(<Header title="My dashboard" />);
    expect(wrapper.find('.header__title').text()).to.equal('My dashboard');
  });
});
