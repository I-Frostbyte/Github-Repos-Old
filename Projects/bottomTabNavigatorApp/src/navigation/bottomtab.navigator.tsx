import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './mainstack.navigator';
import {Profile, Settings} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name == 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#228b22',
          tabBarInactiveTintColor: '#d3d3d3',
          headerShown: false,
          tabBarStyle: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }
        })}>
        <Tab.Screen name="Home" component={MainStack} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
  );
};

export default BottomTab;
