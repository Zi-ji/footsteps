import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TickFillSVG from '../assets/TickFillSVG';
import TickSVG from '../assets/TickSVG';
import LockSVG from '../assets/LockSVG';

export const PhysicsOne = ({navigation}) => {
  const [unlock, setUnlock] = React.useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.coursebox}>
        <View style={{
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          paddingTop: 20,
          paddingBottom: 20,
          marginLeft: 26,
          marginRight: 29,
        }}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 18,}}>Level 1:{' '}</Text>
            <Text style={{color: '#ffffff', fontWeight: '500', fontSize: 18,}}>Motion</Text>
          </View>
          <TickFillSVG />
        </View>
        <View style={styles.actual}>
          <Option title="Circular Motion" onPress={() => navigation.navigate('Circular')} />
          <Option title="Revision" onPress={() => navigation.navigate('FlashCard')} />
          <Option title="Quiz" />
        </View>
      </View>
      
      <View style={styles.coursebox}>
        <View style={{
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          paddingTop: 20,
          paddingBottom: 20,
          marginLeft: 26,
          marginRight: 29,
        }}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 18,}}>Level 5:{' '}</Text>
            <Text style={{color: '#ffffff', fontWeight: '500', fontSize: 18,}}>Final Quiz</Text>
          </View>
          {unlock && <TickFillSVG />}
        </View>
        <View style={styles.actual}>
          <Option title="Attempt Now" nottried={!unlock} onPress={() => {
            setUnlock(true);
            navigation.navigate('Quiz');
          }} />
        </View>
      </View>
      
      {!unlock && <View style={{...styles.coursebox, ...styles.disabled}}>
        <View style={{
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          paddingTop: 20,
          paddingBottom: 20,
          marginLeft: 26,
          marginRight: 29,
        }}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 18,}}>Locked:{' '}</Text>
            <Text style={{color: '#ffffff', fontWeight: '500', fontSize: 18,}}>Mentorship</Text>
          </View>
          <LockSVG />
        </View>
        <View style={styles.actual}>
          <View style={{
            backgroundColor: '#ffffff',
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignSelf: 'stretch',
            paddingTop: 13,
            paddingBottom: 13,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 28,
            marginBottom: 13,
          }}>
            <Text style={{color: '#969696', fontWeight: '500', fontSize: 16,}}>You will get access to mentorship once you have passed the final quiz.</Text>
          </View>
        </View>
      </View>}
      
      {unlock && <View style={styles.coursebox}>
        <View style={{
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          paddingTop: 20,
          paddingBottom: 20,
          marginLeft: 26,
          marginRight: 29,
        }}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 18,}}>Mentor</Text>
          </View>
          <TickFillSVG />
        </View>
        <View style={styles.actual}>
          <Option title="Message Mentor" onPress={() => navigation.navigate('MentorChat')} />
        </View>
      </View>}
      
      <StatusBar style="light" />
    </ScrollView>
  );
}

const Option = ({onPress, title, nottried}) => (
<Pressable
  onPress={onPress}
>
  <View style={{
    backgroundColor: '#ffffff',
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 28,
    marginBottom: 13,
  }}>
    <Text style={{color: '#000000', fontWeight: '500', fontSize: 16,}}>{title}</Text>
    {nottried ? <></> : <TickSVG />}
  </View>
</Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  coursebox: {
    backgroundColor: '#48A9A6',
    borderRadius: 28,
    alignSelf: 'stretch',
    marginLeft: 27,
    marginRight: 27,
    marginBottom: 20,
  },
  disabled: {
    backgroundColor: '#B4B4B4',
  },
  actual: {
    backgroundColor: '#EFEFEF',
    borderRadius: 28,
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 12,
  }
});

export default PhysicsOne;