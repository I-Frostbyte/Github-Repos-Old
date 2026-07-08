import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Box, Button, Input, Pressable, Stack, Text, View} from 'native-base';
import React, {useState} from 'react';
import {CustomButton} from '../../components';
import {ButtonType} from '../../components/Button. component';
import PasswordIcon from 'react-native-vector-icons/MaterialIcons';

const Register = ({navigation}: any) => {
  const [show, setShow] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View flex="1">
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          textAlign="center"
          mt="10"
          mb="3"
          color="primary.500">
          Registration
        </Text>
        <Text
          textAlign="center"
          w="3/4"
          mx="auto"
          fontWeight="semibold"
          color="gray.600"
          mb="10">
          Enter your e-mail and create a password. We will send a verification
          code to your phone.
        </Text>
        <Stack space={10} w="75%" mx="auto">
          <Input variant="underlined" placeholder="Email" size="xl" />
          <Input
            variant="underlined"
            placeholder="Password"
            size="xl"
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <PasswordIcon
                  name={show ? 'visibility' : 'visibility-off'}
                  size={20}
                />
              </Pressable>
            }
          />
          <Input
            variant="underlined"
            placeholder="Phone Number"
            size="xl"
            keyboardType="numeric"
          />
        </Stack>

        <Box mt="20">
          <CustomButton
            btnText="Register"
            disabled={false}
            btnType={ButtonType.PRIMARY}
            onPress={() => {
              navigation.navigate('Verification');
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

export default Register;
