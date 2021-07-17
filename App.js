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

const Stack = createStackNavigator();

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
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
            name="TabNav"
            component={Tab}
            screenOptions={{gestureEnabled: false}}
          />
          <Stack.Screen
            name="PhysicsOne"
            component={PhysicsOne}
            options={{headerShown : true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;