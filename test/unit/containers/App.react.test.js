import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { App } from '../../../js/containers/App.react';
import ProjectList from '../../../js/components/ProjectList.react';
import SettingsPod from '../../../js/components/SettingsPod.react';
import Header from '../../../js/components/Header.react';

describe('App', () => {
  const projects = {
    items: [{
      reponame: 'Build Dashboard',
      branches: [],
      master: {}
    }]
  };
  const settings = {
    dashboardName: 'My dashboard'
  };
  const dispatch = () => {};

  it('should be loading if no projects', () => {
    const wrapper = shallow(<App projects={{}} settings={ settings } dispatch={ dispatch }/>);

    expect(wrapper.find('.build-dashboard').text()).to.equal('Loading projects');
  });

  it('should render projects and settings if there are projects', () => {
    const wrapper = shallow(<App projects={ projects } settings={ settings } dispatch={ dispatch }/>);

    expect(wrapper.find(ProjectList).length).to.equal(1);
    expect(wrapper.find(SettingsPod).length).to.equal(1);
  });

  it('should have a header', () => {
    const wrapper = shallow(<App projects={ projects } settings={ settings } dispatch={ dispatch }/>);

    expect(wrapper.find(Header).length).to.equal(1);
  });
});
