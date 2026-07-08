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
import PasswordIcon from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}: any) => {
  const [show, setShow] = useState(false);
  return (
    <TouchableWithoutFeedback>
      <View flex="1">
        <Box w="100%" alignItems="center" height="25%">
          <Image
            source={require('../../assets/login.png')}
            alt="#"
            size="2xl"
            mx="auto"
            height="110%"
            resizeMode="contain"
          />
        </Box>
        <Text
          color="primary.500"
          fontSize="2xl"
          fontWeight="semibold"
          mt="5"
          textAlign="center">
          Login
        </Text>
        <Text
          color="gray.600"
          fontSize="md"
          fontWeight="semibold"
          mt="2"
          textAlign="center"
          mx="auto">
          Enter your credentials
        </Text>
        <Stack space={10} w="75%" mx="auto" mt="5">
          <Input variant="underlined" size="xl" placeholder="Email" />
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
        </Stack>
        <TouchableOpacity style={{marginTop: 16}} onPress={() => {}}>
          <Text
            color="primary.500"
            fontSize="sm"
            fontWeight="semibold"
            textAlign="center"
            mx="auto">
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <Box mt="10">
          <CustomButton btnText="Continue" disabled={false} btnType={ButtonType.PRIMARY} onPress={() => {navigation.navigate('BottomTab')}} loading={false} newWidth='60%' newBorderRadius={15} />
        </Box>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
