import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';

import ContinueButton from '../components/ContinueButton';
import AboutSVG from '../assets/aboutSVG';

export const StartTwo = ({ navigation }) => {

  const [country, setCountry] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <View style={styles.titleText}>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>We need to know a bit more about you.</Text>
        </View>
        <AboutSVG />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Your country</Text>
        <TextInput style={styles.input} onChangeText={text => setCountry(text)} />
        <Text style={styles.label}>Your age</Text>
        <Text style={styles.label}>Your current level of education</Text>
      </View>
      <ContinueButton
        onPress={() => navigation.navigate('Res')}
        text="Continue"
        style={{alignSelf: 'center'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40
  },
  titleText: {
    width: 180
  },
  label: {
    fontSize: 18,
    fontWeight: '600'
  },
  inputGroup: {
    alignSelf: 'stretch',
    marginLeft: 40,
    marginRight: 40
  },
  input: {
    height: 70,
    width: 320,
    borderRadius: 100,
    backgroundColor: '#EFEFEF',
  }
});

export default StartTwo;