import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GiftedChat } from 'react-native-gifted-chat'

import MentorPic from '../assets/MentorPic';
import TickSVG from '../assets/TickSVG';
import AlbertSVG from '../assets/AlbertSVG';
import Albert from '../assets/Albert.png';
import Info from '../assets/Level.png';

export const MentorChat = ({navigation}) => {
  const [messages, setMessages] = React.useState([]);
  
  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hey, what do you want to talk about today?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Albert',
          avatar: Albert,
        },
      },
      {
        _id: 2,
        text: 'Albert joined the chat',
        createdAt: new Date(),
        system: true,
        // Any additional custom parameters are passed through
      },
      {
        _id: 3,
        createdAt: new Date(),
        // Any additional custom parameters are passed through
      },
    ])
  }, []);
    
  const onSend = React.useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
  );
}

const Option = ({onPress, title, nottried}) => (
<Pressable
  onPress={onPress}
>
  <View style={{
    backgroundColor: '#ffffff',
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 28,
    marginBottom: 13,
  }}>
    <Text style={{color: '#000000', fontWeight: '500', fontSize: 16,}}>{title}</Text>
    {nottried ? <></> : <TickSVG />}
  </View>
</Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
  },
  coursebox: {
    backgroundColor: '#48A9A6',
    borderRadius: 28,
    alignSelf: 'stretch',
    marginLeft: 27,
    marginRight: 27,
    marginBottom: 20,
  },
  disabled: {
    backgroundColor: '#B4B4B4',
  },
  actual: {
    backgroundColor: '#EFEFEF',
    borderRadius: 28,
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 12,
  }
});

export default MentorChat;