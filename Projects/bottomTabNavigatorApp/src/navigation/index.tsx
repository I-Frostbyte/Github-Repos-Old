import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authstack.navigator';
import BottomTab from './bottomtab.navigator';

const Stack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
