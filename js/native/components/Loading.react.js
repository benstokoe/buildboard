import React, { View, ActivityIndicatorIOS } from 'react-native';
import styles from '../styles/Projects.styles';
import LoadingBar from '../dependant/Loading.react';

const Loading = () => (
  <View style={ styles.container }>
    <LoadingBar />
  </View>
);

export default Loading;
