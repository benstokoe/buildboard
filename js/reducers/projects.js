import { filterProjects } from '../dataTransformers/projects';

export default function projects(state = {}, action) {
  switch (action.type) {
  case 'GET_PROJECTS_LOADING':
    return state;
  case 'GET_PROJECTS_SUCCESS':
    console.log('success!');
    const filteredProjects = filterProjects(action.payload);
    return Object.assign({}, state, { items: filteredProjects });
  case 'GET_PROJECTS_ERROR':
    return state;
  case 'SET_CURRENT_PROJECT':
    const { project } = action.payload;
    return Object.assign({}, state, { current: project });
  default:
    return state;
  }
}
