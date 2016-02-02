import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SpecificProjects from '../../../js/components/SpecificProjects.react';

describe('SpecificProjects Pod', () => {
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
  const settings = { specificProjects: [ 'Build Dashboard' ] };

  it('should show the projects', () => {
    const handleUpdateSettings = () => {};
    const wrapper = shallow(
      <SpecificProjects
        projects={ projects }
        settings={ settings }
        handleUpdateSettings={ handleUpdateSettings }
      />);

    expect(wrapper.find('.specific-projects__project').length).to.equal(2);
    expect(wrapper.find('.specific-projects__project--build-dashboard').prop('defaultChecked')).to.equal(true);
    expect(wrapper.find('.specific-projects__project--secret-stuff').prop('defaultChecked')).to.equal(false);
  });
});
