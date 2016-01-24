import { getMungedProjects } from '../utils/circleUtils';

export const getProjects = (token) => {
  return {
    type: 'GET_PROJECTS',
    payload: {
      promise: getMungedProjects(token)
    }
  };
};
