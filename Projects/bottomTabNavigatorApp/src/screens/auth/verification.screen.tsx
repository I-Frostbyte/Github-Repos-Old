import {
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Box,
  Button,
  Image,
  Input,
  Pressable,
  Stack,
  Text,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {CustomButton} from '../../components';
import {ButtonType} from '../../components/Button. component';
import {OTP} from 'react-native-otp-form';

const Verification = ({navigation}: any) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View flex="1" bg="white">
        <Box w="100%" alignItems="center" height="25%">
          <Image
            source={require('../../assets/verification.png')}
            mx="auto"
            size="2xl"
            height="100%"
            resizeMode="contain"
            alt="#"
          />
        </Box>
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          color="primary.500"
          textAlign="center">
          Verification
        </Text>
        <Text
          textAlign="center"
          mx="auto"
          w="60%"
          fontWeight="medium"
          color="gray.600">
          Enter the 4 digits we sent to you on +237 (6XX) XXX - XXX
        </Text>

        <OTP
          codeCount={4}
          containerStyle={{marginTop: 30}}
          otpStyles={{
            backgroundColor: 'white',
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 5,
            padding: -20,
            marginTop: 20,
            marginRight: 15,
            fontSize: 18,
          }}
          keyboardType="numeric"
        />

        <Box mt="16">
          <CustomButton
            btnText="Create an account"
            disabled={false}
            btnType={ButtonType.PRIMARY}
            onPress={() => {
              navigation.navigate('BottomTab');
            }}
            loading={false}
            newWidth="60%"
            newBorderRadius={15}
          />
        </Box>

        <TouchableOpacity onPress={() => {}} style={{marginTop: 30}}>
          <Text
            textAlign="center"
            mx="auto"
            color="primary.500"
            fontWeight="semibold"
            fontSize="md">
            Re-send code
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Verification;
