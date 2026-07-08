import React, {useState, useEffect, useRef} from 'react';
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
  Divider,
  FormControl,
  Flex,
  Image,
  InputGroup,
  Text,
  View,
  ScrollView,
} from 'native-base';
import PhoneInput from 'react-native-phone-input';
import EditIcon from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import {CustomButton} from '../../components';
import {ButtonType} from '../../components/general/Button.component';

const Payment = ({navigation}: any) => {
  const newRef = useRef('phone');
  const [timer, setTimer] = useState(0);
  const [price, setPrice] = useState(1);
  const [fee, setFee] = useState(0);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const onAuthStateChanged = (user: any) => {
      setPhoneNumber(user.phoneNumber.slice(4));
    };

    console.log('====================================');
    console.log(phoneNumber);
    console.log('====================================');

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const makePayment = () => {
    navigation.navigate("TicketDownload");
  };

  return (
    <ScrollView backgroundColor="white">
      <View flex="1">
        <Text fontSize="3xl" fontWeight="extrabold" my="5" textAlign="center">
          Payment Method
        </Text>

        <Text
          color="secondary.500"
          my="5"
          fontWeight="semibold"
          textAlign="center">
          Finish your payment in 02:00min
        </Text>

        <Box
          flexDirection="row"
          justifyContent="space-between"
          mx="5"
          alignItems="center"
          my="1">
          <Text fontWeight="semibold">Regular Seat</Text>
          <Box flexDirection="row" alignItems="center">
            <Text mx="1" fontWeight="semibold">
              {price}.000XAF
            </Text>
            <Text color="gray.500"> x {numberOfTickets}</Text>
          </Box>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          mx="5"
          alignItems="center"
          my="1">
          <Text fontWeight="semibold">Convenience Fee</Text>
          <Box flexDirection="row" alignItems="center">
            <Text mx="1" fontWeight="semibold">
              {fee}.000XAF
            </Text>
            <Text color="gray.500"> x {numberOfTickets}</Text>
          </Box>
        </Box>

        <Divider my="2" w="3/4" mx="auto" />

        <Box
          flexDirection="row"
          justifyContent="space-between"
          mx="5"
          alignItems="center"
          my="1">
          <Text fontWeight="semibold" fontSize="md">
            Actual Pay
          </Text>
          <Text bold color="primary.500" fontSize="xl">
            {price * numberOfTickets + fee}.000XAF
          </Text>
        </Box>

        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          color="primary.500"
          ml="5"
          my="7"
          mb="3">
          Your Mobile Money Number
        </Text>

        <FormControl width="100" my="3" ml="5">
          <Flex direction="row" align="center">
            <InputGroup mb="4">
              <PhoneInput
                ref={newRef}
                initialCountry={'cm'}
                textProps={{placeholder: `${phoneNumber}`}}
                flagStyle={{width: 35, height: 25, borderRadius: 3}}
                disabled={!disabled}
                autoFormat={true}
                onChangePhoneNumber={number => {
                  // number.replace(/ /g, "")
                  if (number.replace(/ /g, '').length == 13) {
                    setDisabled(true);
                    setPhoneNumber(number.replace(/ /g, ''));
                  }
                }}
                // maxLength={9}
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
                  width: 325,
                  borderWidth: 1,
                  borderColor: 'lightgray',
                  borderRadius: 5,
                }}
              />
            </InputGroup>
          </Flex>
        </FormControl>

        <Box flexDirection="row" alignItems="center" ml="5" mb="5">
          <EditIcon name="edit" size={25} color="#02385A" />
          <TouchableOpacity
            onPress={() => {
              setDisabled(!disabled);
            }}
            style={{marginLeft: 50}}>
            <Text color="primary.500" fontWeight="semibold">
              Pay with a Different Number
            </Text>
          </TouchableOpacity>
        </Box>

        <Divider my="2" />

        <Text
          mt="2"
          mb="4"
          color="gray.500"
          fontWeight="semibold"
          ml="5"
          fontSize="lg">
          Accepted Methods
        </Text>
        <Box flexDirection="row" alignItems="center" mb="20" ml="5">
          <Image source={require('../../assets/Orange.png')} alt="#" mx="1" />
          <Image source={require('../../assets/Mtn.png')} alt="#" mx="1" />
        </Box>

        <Box mb="100">
          <CustomButton
            btnText="Confirm Payment"
            disabled={false}
            btnType={ButtonType.PRIMARY}
            onPress={() => {
              makePayment();
            }}
            loading={false}
            newWidth="60%"
          />
        </Box>
      </View>
    </ScrollView>
  );
};

export default Payment;
