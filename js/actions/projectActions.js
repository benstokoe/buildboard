export const setCurrentProject = (project) => {
  return {
    type: 'SET_CURRENT_PROJECT',
    payload: {
      project
    }
  };
};
