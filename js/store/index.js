import { createMiddleware, createLoader } from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import filter from 'redux-storage-decorator-filter';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from '../reducers';

let engine = createEngine('circledashboard');
engine = filter(engine, ['settings'], ['projects']);
const createStoreWithMiddleware = applyMiddleware(
  createMiddleware(engine),
  thunkMiddleware,
  promiseMiddleware({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] })
)(createStore);

const store = createStoreWithMiddleware(reducers);
const load = createLoader(engine);
load(store);

export default store;
