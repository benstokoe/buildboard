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

  getProjectInfo() {
    const { project, settings } = this.props;

    if (settings.showInfo) {
      return (
        <div className="project__info">
          <p className="project__last-run col-lg-2 col-xs-4">{ project.lastRun }</p>
          <p className="project__build-length col-lg-2 col-xs-4">{ project.buildLength }</p>
          <p className="project__author col-lg-2 col-xs-4">{ project.author }</p>
        </div>
      );
    }

    return null;
  }

  render() {
    const { project, settings } = this.props;

    const projectClasses = classnames(
      'row project', project.status,
      { branch: project.branch !== 'master' }
    );

    const reponameClasses = classnames(
      'project__reponame col-md-12',
      {
        'col-lg-6': settings.showInfo,
        'col-lg-12': !settings.showInfo
      }
    );

    return (
      <div className={ projectClasses }>
        <div className={ reponameClasses }>
          <h2>{ this.getReponame() }</h2>
        </div>
        { this.getProjectInfo() }
      </div>
    );
  }
}

export default Project;
