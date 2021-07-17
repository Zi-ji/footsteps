import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import FlashCardSVG from '../assets/FlashCardSVG'

export const FlashCard = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <FlashCardSVG />
      {/* We ran out of time here. Sorry! */}
    </View>
  );
};

export default FlashCard;