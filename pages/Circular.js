import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import CircularSVG from '../assets/CircularMotionSVG'

export const Circular = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <CircularSVG />
    </View>
  );
};

export default Circular;