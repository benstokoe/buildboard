import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Setup from '../../../components/Setup.react';

describe('Setup', () => {
  it('should show an input to enter the circle token', () => {
    const wrapper = shallow(<Setup />);

    expect(wrapper.find('.setup__circle-token').text()).to.equal('Enter your circle token:');
    expect(wrapper.find('.setup__circle-token-input').length).to.equal(1);
  });

  it('should call onTokenEnter when token is submitted', () => {
    const onTokenEnter = sinon.spy();
    const wrapper = shallow(<Setup onTokenEnter={ onTokenEnter } />)
    wrapper.find('.setup__circle-token-input').simulate('keypress', { key: 'Enter', target: { value: 'mycircletoken' } });

    expect(onTokenEnter.calledWith('mycircletoken')).to.equal(true);
  });
});
