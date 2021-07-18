import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ContinueButton from '../components/ContinueButton';
import CareerOption from '../components/CareerOption';

import Career from '../assets/CareerSVG';
import Physicist from '../assets/PhysicistSVG';
import Engineer from '../assets/EngineerSVG';
import Chemist from '../assets/ChemistSVG';
import Programmer from '../assets/ProgrammerSVG';

export const StartOne = ({ navigation }) => {
  const [selection, setSelection] = React.useState({});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 24, fontWeight: '500', maxWidth: 180 }}>
          To start,{"\n"}
          choose at least{"\n"}
          <Text style={{ color: "#fa6a46", fontWeight: 'bold' }}>
            2 professions
          </Text>
          {"\n"}of interest.{"\n"}
        </Text>
        <Career />
      </View>
      <View style={styles.mid}>
        <CareerOption
          Icon={Physicist}
          text="Physicist"
          stateFunc={setSelection}
          state={selection}
          colour="#44cfca"
        />
        <View style={{width: 12}}/>
        <CareerOption
          Icon={Engineer}
          text="Engineer"
          stateFunc={setSelection}
          state={selection}
          colour="#e9c46a"
        />
      </View>
      <View style={styles.mid}>
        <CareerOption
          Icon={Chemist}
          text="Chemist"
          stateFunc={setSelection}
          state={selection}
          colour="#642ca9"
        />
        <View style={{width: 12}}/>
        <CareerOption
          Icon={Programmer}
          text="Programmer"
          stateFunc={setSelection}
          state={selection}
          colour="#0D324D"
        />
      </View>
      <ContinueButton onPress={() => navigation.navigate('StartTwo')} text="Continue" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  top: {
    marginTop: 80,
    marginLeft: 45,
    marginRight: 45,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mid: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});

export default StartOne;