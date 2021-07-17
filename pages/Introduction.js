import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import ThinkingSVG from '../assets/ThinkingSVG';
import BookSVG from '../assets/BookSVG';

export const Introduction = () => {
return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <ThinkingSVG />
          <View style={{...styles.texts, ...styles.boldTexts}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Not sure about what you can study in the future?</Text>
          </View>
          <View style={styles.texts}>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>
              {'Footsteps is an innovative learning method that promotes learning by intuition and first principles through a mentorship environment.'}
            </Text>
          </View>
        </View>
        <View style={styles.page} key="2">
          <BookSVG />
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  texts: {
    width: 300
  },
  boldTexts: {
    marginTop: 50,
    marginBottom: 50
  },
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export default Introduction;