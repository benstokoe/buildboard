import { reducer } from 'redux-storage';
import { combineReducers } from 'redux';
import projects from './projects';
import settings from './settings';

const rootReducer = reducer(combineReducers({
  projects,
  settings
}));

export default rootReducer;
