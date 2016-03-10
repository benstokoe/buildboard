import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Project extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
  };

  getReponame() {
    const { project, settings } = this.props;
    const { projectNameMapping } = settings;
    if (project.branch === 'master' && Object.keys(projectNameMapping).indexOf(project.reponame) > -1) {
      return projectNameMapping[project.reponame];
    }

    if (project.branch !== 'master') {
      return project.branch;
    }

    return project.reponame;
  }

  getAuthor() {
    const { project, settings } = this.props;

    if (settings.authorType === 'author') {
      return project.author;
    }

    return project.authorInitials;
  }

  getProjectInfo() {
    const { project, settings } = this.props;

    if (settings.showInfo) {
      return (
        <div className="project__info col-xs-12 col-md-6">
          <p className="project__last-run col-xs-4">{ project.lastRun }</p>
          <p className="project__build-length col-xs-4">{ project.buildLength }</p>
          <p className="project__author col-xs-4">{ this.getAuthor() }</p>
        </div>
      );
    }

    return null;
  }

  render() {
    const { project, settings } = this.props;

    const projectClasses = classnames(
      'row project',
      { branch: project.branch !== 'master' }
    );

    const reponameClasses = classnames(
      `project__reponame project__reponame--${ project.status }`,
      {
        'col-lg-12': !settings.showInfo,
        'col-md-6': settings.showInfo
      }
    );

    return (
      <div className={ projectClasses }>
        <div className={ reponameClasses }>
          <h2 className="project__reponame-title">{ this.getReponame() }</h2>
        </div>
        { this.getProjectInfo() }
      </div>
    );
  }
}

export default Project;
