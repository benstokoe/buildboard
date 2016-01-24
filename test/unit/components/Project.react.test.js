import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Project from '../../../js/components/Project.react';

describe('Project', () => {
  let wrapper;
  const project = {
    author: 'Jim Bob',
    branch: 'master',
    buildLength: '01:05',
    lastRun: 'a day ago',
    reponame: 'Build Dashboard',
    status: 'success',
  };
  let settings = {
    showInfo: true,
    projectNameMapping: { }
  };

  it('should render the right information about the project', () => {
    wrapper = shallow(<Project project={ project } settings={ settings } />);
    expect(wrapper.find('.project__reponame').text()).to.equal('Build Dashboard');
    expect(wrapper.find('.project__last-run').text()).to.equal('a day ago');
    expect(wrapper.find('.project__build-length').text()).to.equal('01:05');
    expect(wrapper.find('.project__author').text()).to.equal('Jim Bob');
  });

  it('should have the outcome of the build in the classname', () => {
    wrapper = shallow(<Project project={ project } settings={ settings } />);
    expect(wrapper.get(0).props.className).to.include('success');
  });

  it('should show the right reponame if project is in projectNameMapping', () => {
    settings.projectNameMapping = { 'Build Dashboard': 'Ultra Cool Dashboard' };

    wrapper = shallow(<Project project={ project } settings={ settings } />);
    expect(wrapper.find('.project__reponame').text()).to.equal('Ultra Cool Dashboard');
  });

  it('should show project info if setting', () => {
    wrapper = shallow(<Project project={ project } settings={ settings } />);
    expect(wrapper.find('.project__info')).to.have.length(1);
  });

  it('should hide project info if setting', () => {
    settings.showInfo = false;

    wrapper = shallow(<Project project={ project } settings={ settings } />);
    expect(wrapper.find('.project__info')).to.have.length(0);
  });
});
