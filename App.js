import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome.js';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator s>
        <Stack.Screen options={{headerShown : false}} name="Home" component={Welcome}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
