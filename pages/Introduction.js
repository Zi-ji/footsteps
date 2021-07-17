import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import ThinkingSVG from '../assets/ThinkingSVG';
import BookSVG from '../assets/BookSVG';

export const Introduction = () => {
return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <PagerView style={styles.viewPager} initialPage={0} showPageIndicator>
        <View style={styles.page} key="1">
          <ThinkingSVG />
          <View style={{...styles.texts, ...styles.boldTexts}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Not sure what you want to study in the future?</Text>
          </View>
          <View style={styles.texts}>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>
              {'Footsteps is an innovative learning method that promotes learning by intuition and first principles through a mentorship environment.'}
            </Text>
          </View>
        </View>
        <View style={styles.page} key="2">
          <BookSVG />
          <View style={{...styles.texts, ...styles.boldTexts}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>What you'll be learning?</Text>
          </View>
          <View style={styles.texts}>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>
              {'You’ll be learning the different areas and skills that relate to your chosen professions.'}
            </Text>
          </View>
        </View>
        <View style={styles.page} key="3">
          <BookSVG />
          <View style={{...styles.texts, ...styles.boldTexts}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>How you’ll be learning</Text>
          </View>
          <View style={styles.texts}>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>
              {`Each syllabus is designed by an industry professional.

They will contain modules that build upon first principles and encourages an experimental approach to learning.`}
            </Text>
          </View>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 0.8,
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