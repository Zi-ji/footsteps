import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import ContinueButton from '../components/ContinueButton';
import AboutSVG from '../assets/aboutSVG';

export const StartTwo = ({ navigation }) => {

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.title}>
            <View style={styles.titleText}>
              <Text style={{ fontSize: 24, fontWeight: "600" }}>We need to know a bit more about you.</Text>
            </View>
            <AboutSVG />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your country</Text>
            <TextInput style={styles.input}/>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your age</Text>
            <TextInput style={styles.ageInput}/>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your current level of education</Text>
            <TextInput style={styles.input}/>
          </View>
          <ContinueButton
            onPress={() => navigation.navigate('ResultOne')}
            text="Continue"
            style={{alignSelf: 'center', position: 'static', bottom: -40}}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 150,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 45
  },
  titleText: {
    width: 180
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  inputGroup: {
    alignSelf: 'stretch',
    marginLeft: 45,
    marginRight: 45,
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    height: 70,
    width: 320,
    borderRadius: 100,
    backgroundColor: '#EFEFEF',
    fontSize: 20,
    paddingLeft: 25,
    fontWeight: '500'
  },
  ageInput: {
    height: 70,
    width: 320,
    borderRadius: 100,
    backgroundColor: '#EFEFEF',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  }
});

export default StartTwo;