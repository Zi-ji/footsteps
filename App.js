import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Welcome from './pages/Welcome.js';
import Introduction from './pages/Introduction.js';
import ResultTwo from './pages/ResultTwo.js';
import StartOne from './pages/StartOne.js';
import Subjects from './pages/Subjects.js';
import Tab from './components/NavigatorTab';
import StartTwo from './pages/StartTwo.js';
import ResultOne from './pages/ResultOne';
import PhysicsOne from './pages/PhysicsOne.js';
import Header from './components/Header';
import { View, Text, TouchableOpacity } from 'react-native';
import Quiz from './pages/Quiz.js';
import Circular from './pages/Circular.js';
import FlashCard from './pages/FlashCard.js';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          headerMode="screen"
          screenOptions={{
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: '#fff' },
            headerShown : false
          }}
        >
          <Stack.Screen
            name="Home"
            component={Welcome}
          />
          <Stack.Screen
            name="Intro"
            component={Introduction}
          />
          <Stack.Screen
            name="StartOne"
            component={StartOne}
          />
          <Stack.Screen
            name="StartTwo"
            component={StartTwo}
          />
          <Stack.Screen
            name="ResultOne"
            component={ResultOne}
          />
          <Stack.Screen
            name="ResultTwo"
            component={ResultTwo}
          />
          <Stack.Screen
            name="Subjects"
            component={Tab}
            screenOptions={{gestureEnabled: false}}
          />
          <Stack.Screen
            name="PhysicsOne"
            component={PhysicsOne}
            options={{
              title: 'Physics',
              headerShown: true,
              headerStyle: {
                height: 150,
                borderBottomLeftRadius: 28,
                borderBottomRightRadius: 28,
                backgroundColor: '#48A9A6',
              },
              headerTitleStyle: {
                color: '#ffffff',
                fontSize: 24,
              },
              headerLeftContainerStyle: {
                paddingTop: 20,
                paddingLeft: 20,
              },
              headerRightContainerStyle: {
                paddingTop: 20,
                paddingRight: 20,
              },
              headerTitleContainerStyle: {
                paddingTop: 20,
              },
              headerTintColor: '#ffffff',
              headerTitleAlign: 'left',
              headerBackTitleVisible: false,
              headerRight: () => (
                <TouchableOpacity style={{flexDirection: 'row',}}>
                  <Text style={{color: '#ffffff', fontWeight: '600', fontSize: 16,}}>Level 2</Text>
                  <Text style={{color: '#a3d4d2', fontSize: 16,}}>/10</Text>
                </TouchableOpacity>
            ),
            }}
          />
          <Stack.Screen
            name="Circular"
            component={Circular}
            options={{headerShown : true}}
          />
          <Stack.Screen
            name="FlashCard"
            component={FlashCard}
            options={{headerShown : true}}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{headerShown : true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;