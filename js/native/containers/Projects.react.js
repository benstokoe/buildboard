import React, { Component, View, Text, ListView, StyleSheet, PropTypes} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { getProjects } from '../../actions/circleActions';
import { setCurrentProject } from '../../actions/projectActions';

import Setup from '../components/Setup.react';
import Project from '../components/ProjectItem.react';

class Projects extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const { settings, dispatch } = props;
    dispatch(getProjects(settings.circleToken));

    this.setCurrentProject = this.setCurrentProject.bind(this);
  }

  setCurrentProject(project) {
    const { dispatch } = this.props;
    dispatch(setCurrentProject(project));
    Actions.project();
  }

  render() {
    const { projects } = this.props;
    if (Object.keys(projects).length) {
      const dataSource = this.dataSource.cloneWithRows(projects.items);
      return (
        <View style={ styles.container }>
          <ListView
            dataSource={dataSource}
            renderRow={project => <Project onPress={ this.setCurrentProject } project={ project } />}
          />
        </View>
      );
    }

    return <Text>Loading...</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
  }
})

export default connect(state => {
  return {
    projects: state.projects,
    settings: state.settings
  };
})(Projects);
