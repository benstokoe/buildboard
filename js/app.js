import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App.react';

require('../css/app.sass');

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('dashboard')
);
