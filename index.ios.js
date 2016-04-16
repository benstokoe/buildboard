import React, { AppRegistry } from 'react-native';
import App from './js/native/containers/Root.react';

const buildboardnative = () => (
  <App />
);

AppRegistry.registerComponent('buildboardnative', () => buildboardnative);
