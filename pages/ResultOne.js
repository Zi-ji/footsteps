import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';

import ContinueButton from '../components/ContinueButton';
import MathsSVG from '../assets/MathsSVG';
import PhysicsSVG from '../assets/PhysicsSVG';
import ProgrammingSVG from '../assets/ProgrammingSVG';

export const ResultOne = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <View style={styles.titleText}>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>These are the subjects relevant to your chosen profession.</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.group}>
          <MathsSVG />
          <Text style={styles.subject}>Mathematics</Text>
        </View>
        <View style={styles.group}>
          <PhysicsSVG />
          <Text style={styles.subject}>Physics</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{...styles.group}}>
          <ProgrammingSVG />
          <Text style={styles.subject}>{'Programming\nConcepts'}</Text>
        </View>
      </View>
      <ContinueButton
        onPress={() => navigation.navigate('Res')}
        text="Got it"
        style={{alignSelf: 'center'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 80,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 80,
    width: 250
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginBottom: 30
  },
  subject: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    fontWeight: '600'
  },
  group: {
    marginLeft: 20,
    marginRight: 20
  }
});

export default ResultOne;