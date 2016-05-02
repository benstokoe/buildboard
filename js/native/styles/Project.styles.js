import React, { StyleSheet } from 'react-native';

const getBackgroundColour = (status) => {
  switch (status) {
  case 'failed':
    return '#c0392b';
  case 'success':
  case 'fixed':
    return '#27ae60';
  case 'running':
  case 'scheduled':
    return '#f39c12';
  case 'queued':
    return '#9b59b6';
  default:
    return '#34495e';
  }
}

export const projectStyles = (status) => {
  return {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getBackgroundColour(status),
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 20,
    paddingBottom: 20,
  }
}

export const styles = StyleSheet.create({
  reponame: { 
    color: '#fff',
    fontSize: 20,
  }
});

