export const updateSettings = (type, value) => {
  return {
    type,
    value
  };
};

export const toggleSettings = () => {
  return {
    type: 'TOGGLE_SETTINGS'
  };
};
