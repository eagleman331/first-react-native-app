import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem/index';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
        name={'Model X'}
        tagline={"From FIRST"}
        taglineCTA = {"Touchless Deliver"}
        image = {require("./assets/images/ModelX.jpeg")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
