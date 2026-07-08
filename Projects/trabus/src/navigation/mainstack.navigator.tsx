import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, Agency, Payment, TicketDownload} from '../screens';
import ChooseSeat from '../screens/chooseSeat/ChooseSeat';


const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Agency"
        options={{headerShown: false}}
        component={Agency}
      />
      
      <Stack.Screen 
        options={{headerShown: false}}
        name="ChooseSeat"
        component={ChooseSeat} 
      />

      <Stack.Screen
        name="Payment"
        options={{headerShown: false}}
        component={Payment}
      />
      <Stack.Screen
        name="TicketDownload"
        options={{headerShown: false}}
        component={TicketDownload}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
