import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './mainstack.navigator';
// import {Image, View} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../screens/main/profile.screen';
import Tickets from '../screens/main/tickets.screen';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        // showLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#FFFFFF',
          borderRadius: 35,
          height: 50,
          paddingTop: 5,
          paddingBottom: 5,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        options={{headerShown: false}}
        component={MainStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        screenOptions={{headerShown: false}}
        component={Profile}
        options={{
          // tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tickets"
        screenOptions={{headerShown: false}}
        component={Tickets}
        options={{
          // tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
