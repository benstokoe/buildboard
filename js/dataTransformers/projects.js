import moment from 'moment';

const filterProject = (project) => {
  let filteredProject = {};

  const status = 'queued';
  let lastRun;
  if (project.stop_time) {
    lastRun = moment(project.stop_time).startOf().fromNow();
  } else if (status === 'queued') {
    lastRun = 'Queued';
  } else {
    lastRun = 'Running Now';
  }

  let buildLength;
  if (status !== 'running') {
    buildLength = moment.duration(project.build_time_millis);
    buildLength = ('0' + buildLength.minutes()).slice(-2) + ':' + ('0' + buildLength.seconds()).slice(-2);
  } else {
    const startTime = new Date(project.start_time);
    const now = new Date();
    const diff = moment.duration(now - startTime);

    buildLength = ('0' + diff.minutes()).slice(-2) + ':' + ('0' + diff.seconds()).slice(-2);

    if (project.previous_successful_build) {
      let previousBuildLength = moment.duration(project.previous_successful_build.build_time_millis);
      previousBuildLength = ('0' + previousBuildLength.minutes()).slice(-2) + ':' + ('0' + previousBuildLength.seconds()).slice(-2);

      buildLength += '/' + previousBuildLength;
    }
  }

  let initials = project.author_name;
  if (project.subject) {
    initials = project.subject.split(':');
    initials = initials.length === 1 ? project.author_name : initials[0];
  }
  initials = initials === null ? project.username : initials;

  filteredProject.author = project.author_name;
  filteredProject.authorInitials = initials;
  filteredProject.branch = project.branch;
  filteredProject.buildLength = buildLength;
  filteredProject.lastRun = lastRun;
  filteredProject.reponame = project.reponame;
  filteredProject.status = status;

  return filteredProject;
};

export const filterProjects = (projects) => {
  let reducedProjects = [];
  let filteredProjects = [];

  const masterRepos = projects.filter(project => {
    return project.branch === 'master';
  });

  masterRepos.forEach((repo) => {
    const repos = projects.filter(project => {
      return project.reponame === repo.reponame && project.branch !== 'master';
    }).sort((a, b) => { return a.branch > b.branch; });

    const reducedProject = {
      reponame: repo.reponame,
      master: repo,
      branches: repos
    };

    reducedProjects.push(reducedProject);
  });

  reducedProjects.forEach((project) => {
    let filteredProject = {
      reponame: project.reponame,
      branches: []
    };

    filteredProject.master = filterProject(project.master);

    if (project.branches.length > 0) {
      project.branches.forEach((branch) => {
        filteredProject.branches.push(filterProject(branch));
      });
    }

    filteredProjects.push(filteredProject);
  });

  return filteredProjects;
};
