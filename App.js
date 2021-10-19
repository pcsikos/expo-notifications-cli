/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from "expo-notifications";

Notifications.getDevicePushTokenAsync()
.then((pushToken) => {
  console.log("pushtoken", pushToken);
})
.catch((err) => console.warn("getDevicePushTokenAsync", err));


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: "#000"}}>Open up App.js to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


