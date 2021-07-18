import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export const ContinueButton = ({navigation, text, style }) => {

  return (
    <Pressable
      style={{...styles.button, ...style}}
      onPress={() => navigation.navigate('Intro')}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );

}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#fa6a46',
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18
  }
});

export default ContinueButton;