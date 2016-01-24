import { filterProjects } from '../dataTransformers/projects';

export default function projects(state = {}, action) {
  switch (action.type) {
  case 'GET_PROJECTS_LOADING':
    return state;
  case 'GET_PROJECTS_SUCCESS':
    const filteredProjects = filterProjects(action.payload);
    return Object.assign({}, state, { items: filteredProjects });
  case 'GET_PROJECTS_ERROR':
    return state;
  default:
    return state;
  }
}
