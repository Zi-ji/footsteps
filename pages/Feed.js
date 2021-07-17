import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        <View style={{...styles.subjectFeed, ...styles.mathBlue}}>
          <View style={styles.headingText}>

            <Text style={{ 
              fontSize: 18, 
              fontWeight: 'bold', 
              marginLeft: 27,
              marginBottom: 27,
              color: 'white'
            }}>
              Mathematics
            </Text>
            <Text style={{ 
              fontSize: 18, 
              fontWeight: 'bold', 
              marginLeft: 27,
              marginBottom: 27,
              color: 'white'
            }}>
              Today
            </Text>
          </View>
          <View>
            <Text style={{ 
              fontSize: 18, 
              fontWeight: 'bold', 
              marginLeft: 27,
              marginBottom: 27,
              color: 'white'
            }}>
              Hi
            </Text>
            <View>

            </View>
          </View>
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
  subjectFeed: {
    display: 'flex',
    borderRadius: 28,
    marginLeft: 27,
    marginRight: 27,
    height: 488,
    padding: 24,
    
  },
  headingText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  mathBlue: {
    backgroundColor: '#4357AD',
  }
});

export default Feed;