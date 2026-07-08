import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Splash, Login, Register, Verification} from '../screens';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Splash"
        options={{headerShown: false}}
        component={Splash}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false}}
        component={Register}
      />
      <Stack.Screen
        name="Verification"
        options={{headerShown: false}}
        component={Verification}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
