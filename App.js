import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {play} from 'react-native-sounds';

const App = () => {
  return (
    <View style={styles.container}>
      <Button onPress={() => play('click')} title="Play sound" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
