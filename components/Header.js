import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackSVG from '../assets/BackSVG';

export const ContinueButton = ({title, sub}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.left}>
        <Pressable style={{marginRight: 42}}
          onPress={() => navigation.goBack()}
        >
          <BackSVG />
        </Pressable>
        <Text>{title}</Text>
      </View>
      <View style={styles.right}>
        {sub}
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#48A9A6',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 21,
    marginRight: 21,
    height: 125,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
  },
  right: {
    display: 'flex',
  }
});

export default ContinueButton;