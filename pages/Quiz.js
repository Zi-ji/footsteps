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
      {/* We ran out of time here. Sorry! */}
    </View>
  );
};

export default Quiz;