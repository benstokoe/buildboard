import React from 'react';

const SpecificProjects = ({ projects, settings: { specificProjects }, handleUpdateSettings }) => (
  <div className="settings__specific-projects form-group">
    <label>Show specific projects</label>
    { projects.map((project) => {
      const reponame = project.reponame;
      const checked = specificProjects.indexOf(reponame) > -1 || specificProjects.length === 0;

      project = project.master;

      return (
        <div key={ project.reponame } className="specific-projects__project checkbox">
          <label>
            <input
              type="checkbox"
              className={ `specific-projects__project--${ reponame.replace(' ', '-').toLowerCase() } `}
              data-reponame={ reponame }
              defaultChecked={ checked }
              onChange={ (e) => {
                handleUpdateSettings('UPDATE_SPECIFIC_PROJECTS', {
                  project: e.target.dataset.reponame,
                  show: e.target.checked
                }); }
              }
            />
            { project.reponame }
          </label>
        </div>
      );
    })}
  </div>
);

export default SpecificProjects;
