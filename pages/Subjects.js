import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MathSVG from '../assets/MathSVG';
import PhysicsSVG from '../assets/PhysicsSVG';
import ProgrammingSVG from '../assets/ProgrammingSVG';

import { SafeAreaView } from 'react-native-safe-area-context';

export const Subjects = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ ...styles.texts, ...styles.boldTexts, ...styles.centerText}}>
        <Text style={{ 
          fontSize: 36, 
          fontWeight: 'bold', 
          marginTop: 80,
          marginLeft: 27,
          marginBottom: 27,
        }}>
          Subjects
        </Text>
        <View style={{...styles.subjectCard, ...styles.mathBlue}}>
          <View style={{ ...styles.leftColumn}}>
            <MathSVG />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              Mathematics
            </Text>
          </View>
          <View style={{ ...styles.rightColumn}}>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
              <Text style={{ fontSize: 12, color: 'white' }}>
                Next lesson:&nbsp;
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>
                Algebra
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>
                Level 5
              </Text>
              <Text style={{ fontSize: 12, color: 'white' }}>
                /10
              </Text>
            </View>
          </View>
        </View>
        <View style={{...styles.subjectCard, ...styles.physicsGreen}}>
          <View style={{ ...styles.leftColumn}}>
            <PhysicsSVG />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              Physics
            </Text>
          </View>
          <View style={{ ...styles.rightColumn}}>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
              <Text style={{ fontSize: 12, color: 'white' }}>
                Next lesson:&nbsp;
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>
                Motion
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>
                Level 2
              </Text>
              <Text style={{ fontSize: 12, color: 'white' }}>
                /10
              </Text>
            </View>
          </View>
        </View>
        <View style={{...styles.subjectCard, ...styles.programmingGreen}}>
          <View style={{ ...styles.leftColumn}}>
            <ProgrammingSVG />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              Programming {"\n"}Concepts
            </Text>
          </View>
          <View style={{ ...styles.rightColumn}}>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
              <Text style={{ fontSize: 12, color: 'white' }}>
                Next lesson:&nbsp;
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>
                Loops
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>
                Level 4
              </Text>
              <Text style={{ fontSize: 12, color: 'white' }}>
                /10
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  subjectCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginLeft: 27,
    marginRight: 27,
    marginBottom: 18,
    borderRadius: 28,
    padding: 25,
    height: 146,
  },  
  mathBlue: {
    backgroundColor: '#4357AD',
  },
  physicsGreen: {
    backgroundColor: '#48A9A6',
  },
  programmingGreen: {
    backgroundColor: '#0D324D',
  },
  leftColumn: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  rightColumn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },  
  whiteText: {
    color: 'white',
  }
});

export default Subjects;