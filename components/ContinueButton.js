import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export const ContinueButton = ({onPress, text, style}) => {

  return (
    <Pressable
      style={{...styles.button, ...style}}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );

}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 320,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#E76F51',
    position: 'absolute',
    bottom: 80,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18
  }
});

export default ContinueButton;