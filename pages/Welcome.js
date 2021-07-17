import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ContinueButton from '../components/ContinueButton';

export const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 36, fontWeight: '500' }}>Hey there, welcome to{' '}
          <Text style={{ color: "#E76F51", fontWeight: 'bold' }}>
            Footsteps
          </Text>
        </Text>
      </View>
      <ContinueButton onPress={() => navigation.navigate('Intro')} text="Continue" />
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
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

export default Welcome;