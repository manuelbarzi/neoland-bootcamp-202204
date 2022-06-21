import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'
import Activity from './src/components/Activity';
//import GeolocationExample from './src/components/GeolocationExample';

export default function App() {
  return (
    <View style={styles.container}>

     <Activity/>
     {/* <GeolocationExample/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});