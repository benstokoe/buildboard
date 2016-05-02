import React, { Component, PropTypes  } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from '../../store';

import Projects from './Projects.react';
import Project from './Project.react';

const RouterWithRedux = connect()(Router);

const Root = () => (
  <Provider store={ store }>
    <RouterWithRedux>
      <Scene key="root" hideNavBar={ true }>
        <Scene key="projects" component={ Projects } title="Projects"/>
        <Scene key="project" component={ Project } title="Project"/>
      </Scene>
    </RouterWithRedux>
  </Provider>
);

export default Root;
