import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Box, Image, ScrollView, Text, View, VStack} from 'native-base';
import {CustomCard, CustomButton} from '../../components';
import {CardType} from '../../components/general/Card.component';
import {ButtonType} from '../../components/general/Button.component';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Agency = ({navigation, route}: any) => {
  const [agencyData, setAgencyData] = React.useState({})
  const [agencyTrip, setAgencyTrip] = React.useState([]);

  const id = route.params.id;

  const navigationRoute = useNavigation();

  const fetchData = async() => {
    const data = axios.get(`https://trabus-server.onrender.com/api/agencies/${id}`)
    return data
  }
  React.useEffect(()=>{
    fetchData()
    .then((response)=> {
      const data = response.data.data
      console.log(data)
      setAgencyData(data)
      setAgencyTrip(data.trip)
    })
    .catch((error)=>{
      console.log("Details Agency error:", error.message);
    })


  },[])

  const goBackToSync = () => {
    navigation.goBack();
    return true;
  };

  BackHandler.addEventListener('hardwareBackPress', goBackToSync);

  return (
    <ScrollView>
      <View flex="1">
        <ImageBackground
          source={require('../../assets/Agency.png')}
          resizeMode="cover"
          style={{
            flex: 1,
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <Box mt="50%">
            <Text
              color="white"
              bold
              left="16px"
              fontSize="24px"
              fontFamily="Poppins"
              w="1/2"
              display="flex">
              {agencyData.agencyName} Bus Agency
            </Text>
            {/* <Text
              color="white"
              fontWeight="semibold"
              //   bottom="10px"
              left="16px"
              //   mt="3"
            >
              {branchName} Branch
            </Text> */}
            <Text left="16px" bold fontSize="xl" mb="2" mt="2">
              About {agencyData.agencyName}
            </Text>
          </Box>
        </ImageBackground>
        <View flexDirection="column" justifyContent="space-between" bg="white">
          <Text color="gray.500" ml="4">
            {
              `${agencyData.agencyName} provides we have affordable transportation solutions to fit most any budget. We consistently deliver the level of quality and professionalism that sets the transportation industry standard.`
            }
          </Text>
          <Box flexDirection="row" justifyContent="space-between" my="4">
            <Text bold fontSize="lg" ml="4">
              Available Buses
            </Text>
            <TouchableOpacity>
              <Text color="primary.300" mr="5" fontWeight="semibold">
                See All
              </Text>
            </TouchableOpacity>
          </Box>

          <VStack space={5} mb="20">
            {
              agencyTrip !== null > 0 && 

              agencyTrip.map((trip) =>{ 

                return (
                  <CustomCard
                    cardType={trip.tripClass}
                    onPress={() => {
                      navigationRoute.navigate("ChooseSeat", { tripDetails: trip})
                    }}
                    onRoutes={() => {}}
                    busId={trip.tripNumber}
                    departureTime={trip.departureTime}
                    destination={`${trip.tripStart} to ${trip.destination[0]}`}
                    availableSeats={70}
                  />
                )}
                )
            }
          </VStack>

          <Box mb="32">
            <CustomButton
              btnText="Make Payment"
              disabled={false}
              btnType={ButtonType.PRIMARY}
              onPress={() => {
                navigation.navigate('Payment');
              }}
              loading={false}
              newWidth="60%"
            />
          </Box>
        </View>
      </View>
    </ScrollView>
  );
};

export default Agency;
