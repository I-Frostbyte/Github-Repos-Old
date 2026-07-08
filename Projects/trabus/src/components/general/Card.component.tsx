import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Box, Image, Text} from 'native-base';

type Props = {
//   disabled: boolean;
  cardType: CardType;
  onPress?: (e?: any) => any;
  onRoutes?: (e?: any) => any;
//   source: string;
  busId: string;
  departureTime: string;
  destination: string;
  availableSeats: number;
};

export enum CardType {
  GENERAL = 'general',
  VIP = 'vip',
}

const CustomCard: React.FC<Props> = ({
  cardType,
  onPress = () => {},
  onRoutes = () => {},
  busId = '#11123',
  departureTime = '11:30 AM',
  destination = 'Douala to Buea',
  availableSeats = 70,
}) => {
  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center" ml="2" rounded="xl" maxHeight="90px" maxWidth="341px" backgroundColor="gray.300" borderWidth="1" borderColor="gray.300" shadow="3" >
      <Image
        source={require('../../assets/CardDefault.jpg')}
        alt="logo"
        height="90px"
        width="90px"
        rounded="10px"
      />
      <Box textAlign="left">
        <Text fontWeight="700" fontSize="18px" display="flex">Bus {busId} - {cardType}</Text>
        <Text color="gray.500" fontWeight="500" fontSize="12px">Departure time: {departureTime}</Text>
        <Text color="gray.500" fontSize="10px">{destination}, {availableSeats} seats available</Text>        
      </Box>
      <Box flexDirection="column" justifyContent="space-between" pr="16px" h="2/4">
        <TouchableOpacity onPress={onRoutes}><Text fontWeight="600" fontSize="12px" alignItems="center" textAlign="center">Routes</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>onPress()}><Text fontSize="14px" fontWeight="700" alignItems="center" textAlign="center">Book</Text></TouchableOpacity>
      </Box>
    </Box>
  );
};

export default CustomCard;
