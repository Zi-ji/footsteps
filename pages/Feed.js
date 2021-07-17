import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedPost from '../assets/FeedPostSVG';

export const Feed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.texts, ...styles.boldTexts, ...styles.centerText}}>
        <Text style={{ 
          fontSize: 36, 
          fontWeight: 'bold', 
          marginLeft: 27,
          marginBottom: 27,
        }}>
          Feed
        </Text>
        <View style={styles.post}>
          <FeedPost />
        </View> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
  headingText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  message:{
    backgroundColor: '#D3DBFF',
    borderRadius: 28,
    height: 107,
    marginTop: 13,
  },
  post: {
    justifyContent: 'center',
  
  }
});

export default Feed;