import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextCounter from './TextCounter';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextCounter limit={50} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 5,
    paddingLeft: 15,
    paddingRight: 15
  },
});
