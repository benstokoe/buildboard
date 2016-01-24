import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] })
)(createStore);

const store = createStoreWithMiddleware(reducers);
export default store;
