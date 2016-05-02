import React, { Component, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { project } = this.props;
    return (
      <View>
        <Text>{ project.reponame }</Text>
      </View>
    );
  }
}

export default connect(state => {
  return {
    project: state.projects.current
  };
})(Project);
