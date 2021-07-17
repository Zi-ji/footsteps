import React from 'react';
import clsx from 'clsx';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export const CareerOption = ({state, stateFunc, text, Icon, colour}) => {
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    button: {
      height: 137,
      width: 137,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 36,
      backgroundColor: colour,
    },
    text: {
      marginTop: 10,
      fontWeight: '500',
      fontSize: 18,
    },
    disabled: {
      height: 137,
      width: 137,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 36,
      backgroundColor: '#EFEFEF',
    },
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={state && state[text] ? styles.button : styles.disabled}
        onPress={() => stateFunc(prev => {
          let copy = {...prev};
          if (copy[text] === undefined) {
            copy[text] = true;
          } else {
            copy[text] = !prev[text];
          };
          return copy;
        })}
      >
        <Icon fill={state && state[text] ? '#FFF' : '#969696'} />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

}

export default CareerOption;