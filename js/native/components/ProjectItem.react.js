import React, { View, Text, TouchableHighlight } from 'react-native';
import { projectStyles, styles } from '../styles/Project.styles';

const Project = ({ project, onPress }) => (
  <TouchableHighlight onPress={ () => { onPress(project) } }>
    <View style={ projectStyles(project.master.status) }>
      <Text style={ styles.reponame }>{ project.reponame }</Text>
    </View>
  </TouchableHighlight>
);

export default Project;

