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
  Text,
  View,
} from 'native-base';
import PhoneInput from 'react-native-phone-input';
import auth from '@react-native-firebase/auth';
import {OTP} from 'react-native-otp-form';
import {CustomButton, CustomModal} from '../../components';
import {ButtonType} from '../../components/general/Button.component';
import {ModalType} from '../../components/general/Modal.component';
import {useFocusEffect} from '@react-navigation/native';

const Register = ({navigation}: any) => {
  const newRef = useRef('phone');
  const [phoneNumber, setPhoneNumber] = useState('+237670000000');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [showBackground, setShowBackground] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeBackground = async (now: any) => {
    setShowBackground(now);
  };

    useEffect(() => {
      const onAuthStateChanged = (user: any) => {
        if (user) {
          navigation.navigate('About', {
            phoneNumberObj: user.phoneNumber,
          });
        }
      };
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, [navigation]);

  const login: any = async () => {
    setLoading(true);
    const confirmation: any = await auth().signInWithPhoneNumber(phoneNumber);
    if (confirmation) {
      setConfirm(confirmation);
      setLoading(false);
    }
    // setConfirm(true);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code).then((user: any) => {
        if (user) {
          navigation.navigate('About', {
            phoneNumberObj: user.phoneNumber,
          });
        }
      });
    } catch (error) {
      console.log('Invalid Code.', error);
    }
    // navigation.navigate('About')
  };

  useFocusEffect(() => {
    const exitApp = () => {
      Alert.alert(
        'Exit app?',
        'Exiting the application',
        [
          {
            text: 'Cancel',
            onPress: () => {},
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
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

  if (!confirm) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View flex="1">
          <View flexDirection="column" justifyContent="space-between">
            <Text fontSize="2xl" bold ml="5" mb="2" mt="10" color="primary.500">
              Enter your phone number
            </Text>

            <Text fontSize="md" ml="5" mt="2" mb="3" color="primary.500">
              We use your mobile number to identify your account
            </Text>

            <FormControl width="100" my="3" ml="5">
              <Flex direction="row" align="center">
                <InputGroup mb="4">
                  <PhoneInput
                    ref={newRef}
                    initialCountry={'cm'}
                    textProps={{placeholder: 'Enter your phone number'}}
                    flagStyle={{width: 35, height: 25, borderRadius: 3}}
                    disabled={disabled}
                    autoFormat={true}
                    onChangePhoneNumber={number => {
                      // number.replace(/ /g, "")
                      if (number.replace(/ /g, '').length == 13) {
                        setDisabled(true);
                        setPhoneNumber(number.replace(/ /g, ''));
                      }
                    }}
                    maxLength={9}
                    textStyle={{
                      width: 200,
                      backgroundColor: '#FDFAFA',
                      height: 39,
                      borderRadius: 5,
                      paddingLeft: 10,
                      color: '#000000',
                    }}
                    style={{
                      padding: 8,
                      backgroundColor: '#FDFAFA',
                      width: 285,
                      borderWidth: 1,
                      borderColor: 'lightgray',
                      borderRadius: 5,
                    }}
                  />
                </InputGroup>
              </Flex>
            </FormControl>

            <Text ml="5" fontWeight="light" color="gray.600">By tapping next, you agree to the Terms & Conditions</Text>

            <Box width="100%" mt="330">
              <CustomButton
                onPress={login}
                btnText="Next"
                btnType={ButtonType.PRIMARY}
                loading={loading}
                disabled={!disabled}
                newWidth="90%"
              />
            </Box>
            {/* <CustomModal
              heading={'Connection failed'}
              showModal={false}
              modalType={ModalType.ERROR}
              setShowModal={() => {}}
              description={'Check your internet and try again'}
              btnText={'Try again'}
              btnType={ButtonType.PRIMARY}
              onPress={() => {}}
            /> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View flex="1">
        <Text fontSize="2xl" bold ml="5" mb="2" mt="10" color="primary.500">
          Enter the code we texted you
        </Text>
        <Text fontSize="md" ml="5" my="2" flexWrap="wrap" color="primary.500">
          We've sent an SMS to {phoneNumber}
        </Text>

        <OTP
          codeCount={6}
          containerStyle={{marginTop: 32, marginBottom: 16}}
          otpStyles={{backgroundColor: '#ddd', padding: -20}}
          keyboardType="numeric"
          onFinish={(value: any) => {
            setDisabled(true);
            setCode(value);
          }}
        />

        <Text ml="6" fontWeight="light" color="gray.600" mt="3">Your 6 digit code is on its way. This can sometimes take a few moments to arrive.</Text>

        <TouchableOpacity style={{marginLeft: 28, marginTop: 30}} onPress={() => {
          login();
        }}>
          <Text bold color="primary.300" fontSize="md">Resend Code</Text>
        </TouchableOpacity>

        <Box mt="300">
          <CustomButton
            btnText={'Submit'}
            btnType={ButtonType.PRIMARY}
            onPress={confirmCode}
            loading={loading}
            disabled={!disabled}
            newWidth="90%"
          />
        </Box>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  ContainerStyle: {},
  myDropdownContainerStyle: {},
  myDropdownRowStyle: {},
  myDropdownCountryTextStyle: {},
  mycountryNameStyle: {},
});

export default Register;
