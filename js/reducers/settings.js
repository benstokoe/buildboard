const getCircleToken = () => {
  //return '5347095e7f5227c236ba0ee1fd993c4752127479';
  const search = window.location.search.match(/circleToken/);
  
  if (search !== null) {
    return window.location.search.match(/circleToken=(.+)/)[1].split('&')[0];
  } 
  return '';
};

export default function settings(state = {
  visible: false,
  circleToken: getCircleToken(),
  dashboardName: 'Build Dashboard',
  specificProjects: [],
  projectNameMapping: {},
  showInfo: true,
  showBranches: false,
  authorType: 'initials'
}, action) {
  switch (action.type) {
  case 'TOGGLE_SETTINGS':
    return Object.assign({}, state, { visible: !state.visible });
  case 'UPDATE_CIRCLE_TOKEN':
    return Object.assign({}, state, { circleToken: action.value });
  case 'UPDATE_DASHBOARD_NAME':
    return Object.assign({}, state, { dashboardName: action.value });
  case 'UPDATE_SPECIFIC_PROJECTS':
    const { project, show } = action.value;

    const alreadyFiltered = state.specificProjects.indexOf(project);
    if (alreadyFiltered > -1 && show) {
      const specificProjects = [
        ...state.specificProjects.slice(0, alreadyFiltered),
        ...state.specificProjects.slice(alreadyFiltered + 1)
      ];
      return Object.assign({}, state, { specificProjects });
    }

    const specificProjects = [...state.specificProjects, project];
    return Object.assign({}, state, { specificProjects });
  case 'UPDATE_PROJECT_NAME_MAPPING':
    const { reponame, newName } = action.value;

    if (state.projectNameMapping.hasOwnProperty(reponame) && newName.trim() === '') {
      let projectNameMapping = Object.assign({}, state.projectNameMapping);
      delete projectNameMapping[reponame];
      return Object.assign({}, state, { projectNameMapping });
    }

    const newProjectNameMapping = {};
    newProjectNameMapping[reponame] = newName.trim();
    const projectNameMapping = Object.assign({}, state.projectNameMapping, newProjectNameMapping);
    return Object.assign({}, state, { projectNameMapping });
  case 'TOGGLE_PROJECT_INFO':
    return Object.assign({}, state, { showInfo: !state.showInfo });
  case 'TOGGLE_PROJECT_BRANCHES':
    return Object.assign({}, state, { showBranches: !state.showBranches });
  case 'CHANGE_AUTHOR_TYPE':
    return Object.assign({}, state, { authorType: action.value });
  default:
    return state;
  }
}
