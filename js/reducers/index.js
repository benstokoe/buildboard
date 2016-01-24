import { combineReducers } from 'redux';
import projects from './projects';
import settings from './settings';

const rootReducer = combineReducers({
  projects,
  settings
});

export default rootReducer;
