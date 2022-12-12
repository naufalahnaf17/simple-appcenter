import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import codePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

function App() {
  function checkForUpdate() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'red'}}>Halo</Text>
      <Pressable
        onPress={() => checkForUpdate()}
        style={{height: 40, width: 100, backgroundColor: 'red'}}>
        <Text>Check For Update</Text>
      </Pressable>
    </View>
  );
}

export default codePush(codePushOptions)(App);
