import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ContinueButton from '../components/ContinueButton';

export const StartOne = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 36, fontWeight: '500' }}>
          To start,{' '}
          choose at least{' '}
          2 professions{' '}
          of interest.{' '}
        <Text style={{ color: "#E76F51", fontWeight: 'bold' }}>
          Footsteps
        </Text>
        </Text>
      </View>
      <ContinueButton navigation={navigation} text="Continue" />
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
    marginLeft: 45,
    alignSelf: 'flex-start',
  }
});

export default StartOne;