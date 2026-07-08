import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Register, About, Splash} from '../screens';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        options={{headerShown: false}}
        component={Splash}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false}}
        component={Register}
      />
      <Stack.Screen
        name="About"
        options={{headerShown: false}}
        component={About}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
