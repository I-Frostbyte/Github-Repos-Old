import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Product, Purchase, Transfer} from '../screens';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <Stack.Screen
        name="Product"
        options={{headerShown: false}}
        component={Product}
      />
      <Stack.Screen
        name="Purchase"
        options={{headerShown: false}}
        component={Purchase}
      />
      <Stack.Screen name="Transfer" options={{headerShown: false}} component={Transfer} />
    </Stack.Navigator>
  );
};

export default MainStack;
