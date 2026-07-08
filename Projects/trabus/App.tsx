import {NativeBaseProvider, extendTheme} from 'native-base';
import React from 'react';

import MainRouter from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

const newColorTheme = {
  primary: {
    500: '#02385A',
    300: '#F23D4C',
  },
  secondary: {
    500: '#734F39',
  },
  error: {
    500: '#F23839',
  },
  gray: {
    500: "#7D7D7D",
    300: "#E1E1E1"
  }
};
const theme = extendTheme({colors: newColorTheme});

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <MainRouter />
    </NativeBaseProvider>
  );
}

export default App;
