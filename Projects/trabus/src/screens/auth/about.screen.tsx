import React, {useEffect, useState, useRef} from 'react';
import {
  Alert,
  BackHandler,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Box,
  Button,
  FormControl,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  View,
} from 'native-base';
import {CustomButton} from '../../components';
import {ButtonType} from '../../components/general/Button.component';
import {useFocusEffect} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const About = ({navigation, route}: any) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [userObject, setUserObject] = useState(null);
  // const [id, setId] = useState('');
  let phoneNumber = route.params.phoneNumberObj;

  const createUser = async () => {
    const traveller = {userName, email, phoneNumber};

    const response = await fetch(
      'https://trabus-server.onrender.com/api/users/',
      {
        method: 'POST',
        body: JSON.stringify(traveller),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setUserName('');
      setEmail('');
      setError(null);
      console.log('====================================');
      console.log('New traveller registered', json);
      console.log('====================================');
      setUserObject(json);
    }
    navigation.navigate('BottomTab');
  };

  useFocusEffect(() => {
    const exitApp = () => {
      Alert.alert(
        'Sign Out?',
        'Logging out of the application',
        [
          {
            text: 'Cancel',
            onPress: () => {},
          },
          {
            text: 'OK',
            onPress: () => {
              auth()
                .signOut()
                .then(() => {
                  navigation.navigate('Splash');
                });
            },
          },
        ],
        {
          cancelable: false,
        },
      );
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', exitApp);
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View flex="1">
        <View flexDirection="column" justifyContent="space-between">
          <Text ml="5" bold fontSize="2xl" mt="10" color="primary.500">
            About you
          </Text>
          <Text
            ml="5"
            fontWeight="semibold"
            fontSize="md"
            mt="3"
            mb="5"
            color="primary.500">
            Please fill the form below to customize your account
          </Text>

          <Stack space={6} w="95%" maxW="300px" ml="5">
            <Input
              variant="outline"
              size="lg"
              placeholder="Name"
              onChangeText={nameValue => {
                setUserName(nameValue);
              }}
            />
            <Input
              variant="outline"
              size="lg"
              placeholder="Email"
              onChangeText={emailValue => {
                setEmail(emailValue);
              }}
            />
            {/* <Input
              variant="outline"
              size="lg"
              placeholder="ID Card Number"
              keyboardType="numeric"
              onChangeText={(idValue) => {
                setId(idValue);
            }}
            /> */}
          </Stack>
        </View>

        <Box mt="275">
          <CustomButton
            btnText={'Confirm'}
            btnType={ButtonType.PRIMARY}
            onPress={createUser}
            loading={false}
            disabled={false}
            newWidth="90%"
          />
        </Box>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default About;
