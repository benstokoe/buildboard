import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ProjectList from '../../../js/components/ProjectList.react';
import Project from '../../../js/components/Project.react';

describe('Project List', () => {
  const projects = [{
    reponame: 'Build Dashboard',
    branches: [],
    master: {
      author_name: 'Jim Bob',
      branch: 'master',
      build_time_millis: 65818,
      previous_successful_build: null,
      start_time: '2015-08-04T20:38:58.682Z',
      status: 'Success',
      stop_time: '2015-08-04T20:40:04.500Z'
    }
  }, {
    reponame: 'Secret stuff',
    branches: [{
      author: 'Dave Smith',
      branch: 'something-something',
      buildLength: '02:05',
      lastRun: 'a day ago',
      status: 'success'
    }],
    master: {
      author_name: 'Dave Smith',
      branch: 'master',
      build_time_millis: 45308,
      previous_successful_build: null,
      start_time: '2015-08-05T20:38:58.682Z',
      status: 'Fail',
      stop_time: '2015-08-05T20:40:04.500Z'
    }
  }];

  const settings = {
    showBranches: false,
    specificProjects: []
  };

  it('should render projects', () => {
    const project = new Array(projects[0]);
    const wrapper = shallow(<ProjectList projects={ project } settings={ settings } />);

    expect(wrapper.find(Project)).to.have.length(1);
  });

  it('should render two projects', () => {
    const wrapper = shallow(<ProjectList projects={ projects } settings={ settings } />);

    expect(wrapper.find(Project)).to.have.length(2);
  });

  it('should be able to show a selection of projects', () => {
    settings.specificProjects = [ 'Build Dashboard' ];
    const wrapper = shallow(<ProjectList projects={ projects } settings={ settings } />);

    expect(wrapper.find(Project)).to.have.length(1);
  });

  it('should render the project branches if enabled', () => {
    settings.specificProjects = [];
    settings.showBranches = true;
    const wrapper = shallow(<ProjectList projects={ projects } settings={ settings } />);

    expect(wrapper.find(Project)).to.have.length(3);
  });
});
