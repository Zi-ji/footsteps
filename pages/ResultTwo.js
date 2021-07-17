import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';

import ThinkingSVG from '../assets/ThinkingSVG';
import BookSVG from '../assets/BookSVG';
import BlockSVG from '../assets/BlockSVG';
import PointSVG from '../assets/PointSVG';

import ContinueButton from '../components/ContinueButton';

export const ResultTwo = ({ navigation }) => {
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 24, fontWeight: '500' }}>
          Your chosen professions will involve the following skill sets.{"\n"}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: '500' }}>
          We will help you develop these skills.
        </Text>
      </View>
      <PagerView style={styles.viewPager} initialPage={0} showPageIndicator>
        <View style={styles.page} key="1">
          <View style={styles.spacer} />
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}>Critical Analysis</Text>
          <BlockSVG />
          <Text style={{
            fontSize: 18,
            color: '#FFFFFF',
            maxWidth: 250,
            fontWeight: '600',
            textAlign: 'center',
          }}>
            {'The ability to logically breakdown a certain component into smaller building blocks of prior knowledge.'}
          </Text>
        </View>
        <View style={styles.page} key="2">
        <View style={styles.spacer} />
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}>Scientific Reasoning</Text>
          <PointSVG />
          <Text style={{
            fontSize: 18,
            color: '#FFFFFF',
            maxWidth: 250,
            fontWeight: '600',
            textAlign: 'center',
          }}>
            {'The ability to explain a sequence from basic axioms to the final proposition.'}
          </Text>
        </View>
        </PagerView>
        <ContinueButton onPress={() => navigation.navigate('Subjects')} text="Let's begin!" />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    top: {
      marginTop: 60,
      marginLeft: 45,
      marginRight: 45,
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: 300,
    },
    mid: {
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    viewPager: {
      display: 'flex',
      flex: 0.65,
      alignSelf: 'stretch',
      marginTop: 50,
      marginLeft: 45,
      marginRight: 45,
      backgroundColor: '#48A9A6',
      borderRadius: 36,
    },
    spacer: {
      marginTop: 10,
    },
    page: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
      marginBottom: 50,
    },
});
export default ResultTwo;