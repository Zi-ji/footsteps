import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput } from 'react-native';

import ContinueButton from '../components/ContinueButton';
import AboutSVG from '../assets/aboutSVG';

export const ResultOne = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <View style={styles.titleText}>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>These are the subjects relevant to your chosen profession.</Text>
        </View>
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
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 80,
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
    width: 250
  }
});

export default ResultOne;