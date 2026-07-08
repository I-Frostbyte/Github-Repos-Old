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
import moment from 'moment';

const TicketDownload = ({navigation}: any) => {
  const [name, setName] = useState('Foncham Bernard');

  var date = moment().utcOffset('+1:00').format('DD-MM-YYYY hh:mm a');

  const DownloadTicket = () => {};

  return (
    <ScrollView>
      <View flex="1">
        <Text textAlign="center" fontSize="2xl" fontWeight="extrabold" my="5">
          View Ticket
        </Text>

        <Box shadow="5" rounded="2xl" mx="2" mt="1" mb="32">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center" mt="10" mx="10">
            <Image
              source={require('../../assets/TicketDownload.jpg')}
              alt="#"
              size={20}
              rounded="xl"
            />
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                {name}
              </Text>
              <Text fontSize="xl" fontWeight="bold">
                Douala to Buea
              </Text>
              <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                {date}
              </Text>
            </Box>
          </Box>
          <Divider w="3/4" my="5" mx="auto"></Divider>

          <Box ml="10">
            <Text color="gray.500" fontWeight="semibold" fontSize="md" mt="1">
              Order Number
            </Text>
            <Text color="black" fontSize="xl" mb="1">
              1198804794001625088
            </Text>
          </Box>

          <Box ml="10">
            <Text color="gray.500" fontWeight="semibold" fontSize="md" mt="1">
              Seat
            </Text>
            <Text color="black" fontSize="xl" mb="1">
              F7
            </Text>
          </Box>

          <Box ml="10">
            <Text color="gray.500" fontWeight="semibold" fontSize="md" mt="1">
              Payment Method
            </Text>
            <Text color="black" fontSize="xl" mb="1">
              MTN MoMo (089xxxxxx212)
            </Text>
          </Box>
          <Box ml="10">
            <Text color="gray.500" fontWeight="semibold" fontSize="md" mt="1">
              Regular Seat
            </Text>
            <Text color="black" fontSize="xl" mb="1">
              3.000XAF{' '}
              <Text color="gray.500" fontWeight="semibold" fontSize="sm">
                x 2
              </Text>
            </Text>
          </Box>
          <Box ml="10">
            <Text color="gray.500" fontWeight="semibold" fontSize="md" mt="1">
              Actual Pay
            </Text>
            <Text color="black" fontSize="xl" mb="1">
              3.000XAF
            </Text>
          </Box>
          <Divider fontWeight="semibold" my="5" w="3/4" mx="auto"></Divider>

          <Box mb="30">
            <CustomButton
              btnText="Download Ticket"
              disabled={false}
              btnType={ButtonType.PRIMARY}
              onPress={() => {
                DownloadTicket();
              }}
              loading={false}
              newWidth="70%"
            />
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
};

export default TicketDownload;
