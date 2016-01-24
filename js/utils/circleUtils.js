import fetch from 'isomorphic-fetch';

const CIRCLE_URL = 'https://circleci.com/api/v1';

const getProjectDetails = (token, username, reponame, build) => {
  return new Promise((resolve, reject) => {
    fetch(`${ CIRCLE_URL }/project/${ username }/${ reponame }/${ build }?circle-token=${ token }`, {
      headers: { Accept: 'application/json' }
    })
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error));
  });
};

const recieveProjects = (projects, token) => {
  return new Promise((resolve, reject) => {
    const projectsData = [];
    const projectPromises = [];

    projects.forEach((project) => {
      Object.keys(project.branches).forEach((branch) => {
        const { username, reponame } = project;
        const sortFunction = (a, b) => {
          return (
            new Date(a.added_at).getTime() > new Date(b.added_at).getTime() ? -1 : 1
          );
        };
        const last_running_build = project.branches[branch].running_builds.sort(sortFunction)[0];
        const last_recent_build = project.branches[branch].recent_builds.sort(sortFunction)[0];
        const build = last_running_build ? last_running_build.build_num : last_recent_build.build_num;

        projectPromises.push(getProjectDetails(token, username, reponame, build)
          .then((projectDetail) => {
            let runningBuilds;
            if (projectDetail.branches) {
              runningBuilds = projectDetail.branches[branch].running_builds.length;
            }
            const projectDataToInsert = projectDetail;
            projectDataToInsert.running_builds = runningBuilds;

            projectsData.push(projectDataToInsert);
          })
          .catch(error => reject(error))
        );
      });
    });

    Promise.all(projectPromises).then(() => {
      const sortedProjectsData = projectsData.sort((a, b) => {
        if (a.reponame < b.reponame) return -1;
        if (a.reponame > b.reponame) return 1;
        return 0;
      });

      resolve(sortedProjectsData);
    });
  });
};

export const getMungedProjects = (token) => {
  return fetch(`${ CIRCLE_URL }/projects?circle-token=${ token }`, {
    headers: { Accept: 'application/json' }
  })
  .then(response => response.json())
  .then(projects => recieveProjects(projects, token));
};
