import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Divider, Pressable, Stack, Text, View} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  currencyText: string;
  currencyIcon: string;
  buy: string;
  buyGains: string;
  sell: string;
  sellGains: string;
  buyProfit?: boolean;
  sellProfit?: boolean;
  iconBgColor: string;
//   onPress?: (e?: any) => any;
};

const CurrencyCard: React.FC<Props> = ({
  currencyText = 'EUR',
  currencyIcon = 'notifications',
  buy = '9.01',
  buyGains = '0.01',
  sell = '7.02',
  sellGains = '-0.21',
  buyProfit = true,
  sellProfit = false,
  iconBgColor = 'primary.500',
//   onPress = () => {},
}) => {
  return (
    <View flex="1">
      <Stack direction="row" space={12}
              mx="auto"
              justifyContent="space-between">
        <Box
          flexDirection="row"
          bg="secondary.500"
          rounded="xl"
          pl="2"
          py="2"
          alignItems="center"
          width="32%">
          <Box
            borderRadius="lg"
            alignItems="center"
            // pt="3"
            width="30%"
            h="100%"
            backgroundColor={iconBgColor}>
            <MaterialCommunityIcons name={currencyIcon} size={25} color="#d3d3d3" style={{paddingVertical: 5}} />
          </Box>
          <Text ml="2" fontWeight="extrabold" fontSize="sm">
            {currencyText}
          </Text>
        </Box>
        <Stack direction="column" space={-1} alignItems="center">
          <Stack direction="row" space={1} alignItems="center">
            <Ionicons
              name={buyProfit ? 'caret-up' : 'caret-down'}
              color={buyProfit ? '#4ea24e' : '#F23839'}
              size={10}
            />
            <Text fontWeight="semibold" fontSize="md" color="gray.500">
              {buy}
            </Text>
          </Stack>
          <Text fontSize="xs" fontWeight="medium" color="gray.400" ml="3">
            {buyProfit ? "+" : "-"}{buyGains}
          </Text>
        </Stack>
        <Stack direction="column" space={-1} alignItems="center">
          <Stack direction="row" space={1} alignItems="center">
            <Ionicons
              name={sellProfit ? 'caret-up' : 'caret-down'}
              color={sellProfit ? '#4ea24e' : '#F23839'}
              size={10}
            />
            <Text fontWeight="semibold" fontSize="md" color="gray.500">
              {sell}
            </Text>
          </Stack>
          <Text fontSize="xs" fontWeight="medium" color="gray.400" ml="3">
            {sellProfit ? "+" : "-"}{sellGains}
          </Text>
        </Stack>
      </Stack>
      <Divider mt="5" width="75%" mx="auto" />
    </View>
  );
};

export default CurrencyCard;
