import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export const ContinueButton = ({ text, style }) => {
  return (
    <Pressable style={{...styles.button, ...style}}>
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
    backgroundColor: '#E76F51',
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18
  }
});

export default ContinueButton;