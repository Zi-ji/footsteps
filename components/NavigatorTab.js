import React from 'react';
import { Stylesheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import Subjects from '../pages/Subjects';
import Settings from '../pages/Settings';
import FeedSVG from '../assets/FeedSVG';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  
  return (
    <Tab.Navigator
      initialRouteName="Subjects"
      sceneContainerStyle={{ backgroundColor: '#fff' }}
      tabBarOptions={{
        style: {
          position: 'absolute',
          bottom: 30, 
          left: 20,
          right: 20,
          elavation: 0,
          backgroundColor: '#F6F6F6',
          borderRadius: 36,
          height: 90,
          color: '#E76F51',
        },
        activeTintColor: '#E76F51',
        activeBackgroundColor: '#FEFEFE',
      }}
      screenOptions={{gestureEnabled: false}}
    >
      <Tab.Screen name="Feed" component={Feed} 
        options={{
          tabBarIcon: ({focused}) => {
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              top: 10,
            }}>
              <FeedSVG />
            </View>
          },
        }}
      />
      <Tab.Screen name="Subjects" component={Subjects} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

// const style = Stylesheet.create({
//     shadow: {
//     }
// });

export default Tabs;