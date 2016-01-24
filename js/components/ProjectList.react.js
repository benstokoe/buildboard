import React, { Component, PropTypes } from 'react';
import Project from './Project.react';

class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    settings: PropTypes.object.isRequired
  };

  getProjects(projects) {
    const { settings } = this.props;
    let projectItems = [];

    projects.map((project) => {
      projectItems.push(
        <Project key={ project.master.reponame } project={ project.master } settings={ settings } />
      );

      if (settings.showBranches && project.branches.length) {
        project.branches.forEach((branch) => {
          projectItems.push(
            <Project key={ `${ branch.reponame }-${ branch.branch }` } project={ branch } settings={ settings } />
          );
        });
      }
    });

    return projectItems;
  }

  render() {
    let { projects } = this.props;
    const { settings } = this.props;

    if (settings && settings.specificProjects.length > 0) {
      projects = projects.filter((project) => {
        return settings.specificProjects.indexOf(project.reponame) === -1;
      });
    }

    return (
      <div className="project-list">
        { this.getProjects(projects) }
      </div>
    );
  }
}

export default ProjectList;
