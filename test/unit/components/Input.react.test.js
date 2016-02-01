import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Input from '../../../js/components/Input.react';

describe('Input', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Input
        classes="dashboard-name"
        id="dashboardName"
        label="Dashboard Name"
        defaultValue="Build Dashboard"
        placeholder="Dashboard Name"
    />);

    // doesn't work with a contains for some reason
    expect(wrapper.find('.form-group').html()).to.equal(
      `<div class="form-group"><label for="dashboardName">Dashboard Name</label><input type="text" data-settings-value="dashboardName" class="form-control settings-input dashboard-name" id="dashboardName" placeholder="Dashboard Name" value="Build Dashboard"/></div>`
    );
  });

  it('should accept event listeners', () => {
    const wrapper = shallow(
      <Input
        id="dashboardName"
        label="Dashboard Name"
        defaultValue="Build Dashboard"
        placeholder="Dashboard Name"
        onKeyDown={ () => {} }
      />
    );

    expect(wrapper.find('input').props().onKeyDown).to.not.be.undefined;
  });

  it('should call the event listener when it happens', () => {
    const onKeyDown = sinon.spy();
    const wrapper = shallow(
      <Input
        id="dashboardName"
        label="Dashboard Name"
        defaultValue="Build Dashboard"
        placeholder="Dashboard Name"
        onKeyDown={ onKeyDown }
      />
    );

    wrapper.find('input').simulate('keyDown', { which: 'hello' });

    expect(onKeyDown.calledOnce).to.equal(true);
  });
});
