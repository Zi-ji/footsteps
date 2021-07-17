import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ContinueButton from '../components/ContinueButton';

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <View />
      <View style={styles.title}>
        <Text style={{ fontSize: 36, fontWeight: '500' }}>Hey there, welcome to{' '}
          <Text style={{ color: "#E76F51", fontWeight: 'bold' }}>
            Footsteps
          </Text>
        </Text>
      </View>
      <ContinueButton style={{}} text="Continue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  top: {
    marginBottom: 'auto'
  },
  title: {
    maxWidth: 200,
    marginLeft: 60,
    alignSelf: 'flex-start',
  }
});

export default Welcome;