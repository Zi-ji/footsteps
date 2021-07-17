import React from 'react';
import {Stylesheet, Text, View, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../pages/Feed';
import Subjects from '../pages/Subjects';
import Settings from '../pages/Settings';
// import Dashboard from '../pages/Dashboard';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25, 
                    left:20,
                    right: 20,
                    elavation: 0,
                    background: '#ffffff',
                    borderRadius: 36,
                    height: 90,
                }
            }}
        
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Subjects" component={Subjects} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    shadow: {
    }
});

export default Tabs;