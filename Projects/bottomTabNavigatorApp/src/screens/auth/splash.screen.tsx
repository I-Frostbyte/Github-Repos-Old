import React from 'react';
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Box, Button, Divider, Pressable, Text, View} from 'native-base';
import {CustomButton} from '../../components';
import {ButtonType} from '../../components/Button. component';

const Splash = ({navigation}: any) => {
  return (
    <TouchableWithoutFeedback>
      <View flex="1">
        <ImageBackground
          source={require('../../assets/shining-ngoma.png')}
          resizeMode="cover"
          style={{
            flex: 1,
            flexDirection: 'column',
            height: '70%',
          }}></ImageBackground>
        <Box bottom="100">
          <CustomButton
            btnText="Create an account"
            disabled={false}
            btnType={ButtonType.PRIMARY}
            onPress={() => {
              navigation.navigate('Register');
            }}
            loading={false}
            newWidth="60%"
            newBorderRadius={20}
          />
        </Box>
        <Divider my="5" w="1/4" fontWeight="900" color="primary.500" bottom="16" mx="auto"></Divider>
        <Box bottom="10">
          <CustomButton
            btnText="Login"
            disabled={false}
            btnType={ButtonType.SECONDARY}
            onPress={() => {
              navigation.navigate('Login');
            }}
            loading={false}
            newWidth="60%"
            newBorderRadius={20}
          />
        </Box>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Splash;
