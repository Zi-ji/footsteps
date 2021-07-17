import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome.js';
import Introduction from './pages/Introduction.js';
import Result from './pages/Result.js';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown : false}}
          name="Home"
          component={Welcome}
          />
        <Stack.Screen
          options={{headerShown : false}}
          name="Intro"
          component={Introduction}
          />
          {/* <Stack.Screen
            options={{ headerShown: false }}
            name="Res"
            component={Result}
          /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;