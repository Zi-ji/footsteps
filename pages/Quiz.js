import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import QuizSVG from '../assets/QuizSVG'

export const Quiz = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <QuizSVG />
    </View>
  );
};

export default Quiz;