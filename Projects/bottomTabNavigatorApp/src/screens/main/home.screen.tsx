import {
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Box,
  Button,
  Flex,
  Image,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Stack,
  Text,
  View,
} from 'native-base';
import React from 'react';
import IoniIcons from 'react-native-vector-icons/Ionicons';
import {IconCard} from '../../components';
import CircularProgress from 'react-native-circular-progress-indicator';
import LinearGradient from 'react-native-linear-gradient';
import {CurrencyCard} from '../../components';

const Home = ({navigation}: any) => {
  return (
    <ScrollView>
      <View flex="1" h="full">
        <View flex="1">
          <Stack direction="row" space={3} my="2" ml="3" alignItems="center">
            <Image
              source={require('../../assets/profile-two.jpg')}
              alt="#"
              size={10}
              rounded="full"
            />
            <Stack direction="column" space={-1}>
              <Text fontWeight="800" fontSize="md" color="primary.400">
                Jonathan Smith
              </Text>
              <Text color="gray.600" fontSize="xs" fontWeight="semibold">
                @JohnnyBoy2015
              </Text>
            </Stack>

            <TouchableOpacity
              style={{position: 'absolute', right: 10}}
              onPress={() => {}}>
              <IoniIcons name="notifications-outline" size={25} />
            </TouchableOpacity>
          </Stack>

          <Stack direction="row" mx="5" space={16} my="4">
            <Stack direction="column" space={-1}>
              <Text color="gray.400" fontWeight="bold" fontSize="md">
                My Balance:
              </Text>
              <Text fontSize="2xl" bold>
                $3,524.25
              </Text>
            </Stack>
            <Stack direction="column" space={2} alignItems="center">
              <Stack direction="row" space={2} alignItems="center">
                <Text color="gray.400" fontWeight="semibold" fontSize="sm">
                  Today Spent:
                </Text>
                <Text fontWeight="bold" fontSize="md">
                  $18.56
                </Text>
              </Stack>
              <Stack direction="row" space={2} alignItems="center">
                <Text color="gray.400" fontWeight="semibold" fontSize="sm">
                  Daily Limit:
                </Text>
                <Text fontWeight="bold" fontSize="md">
                  $350
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" space={5} mx="6" mt="2" mb="5">
            <IconCard
              bgColor="card.200"
              iconName="wallet-outline"
              onPress={() => {}}
              cardText="Payments"
            />
            <IconCard
              bgColor="card.400"
              iconName="arrow-forward-circle-outline"
              onPress={() => {navigation.navigate("Transfer")}}
              cardText="Transfer"
            />
            <IconCard
              bgColor="primary.400"
              iconName="phone-portrait-outline"
              onPress={() => {}}
              cardText="Replenish"
            />
            <IconCard
              bgColor="card.300"
              iconName="card-outline"
              onPress={() => {}}
              cardText="Cards"
            />
          </Stack>
        </View>

        <View width="100%" bgColor="white" roundedTop="3xl" flex="1" pt="8">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#228b22', '#D28E5C', '#D99E96']}
            locations={[0, 0.7, 0.95]}
            style={{
              borderRadius: 15,
              paddingHorizontal: 15,
              paddingVertical: 7,
              width: '95%',
              marginBottom: 30,
              marginHorizontal: 10,
            }}>
            <Stack direction="row" space={5} mx="2" my="3" alignItems="center">
              <CircularProgress
                value={65}
                progressValueColor={'white'}
                activeStrokeColor={'#d3d3d3'}
                inActiveStrokeColor={'#4ea24e'}
                activeStrokeWidth={3}
                inActiveStrokeWidth={3}
                valueSuffix="%"
                radius={30}
                maxValue={100}
              />
              <Stack direction="column" space={1}>
                <Text fontWeight="medium" color="secondary.500">
                  Daily limit
                </Text>
                <Text fontWeight="800" color="white" fontSize="sm">
                  $184.31 of $350.00
                </Text>
              </Stack>
              <IoniIcons
                name="caret-forward-circle-outline"
                color="white"
                size={35}
                position="absolute"
                right={-10}
              />
            </Stack>
          </LinearGradient>

          <Text mb="2" fontWeight="bold" color="gray.500" fontSize="lg" mx="5">
            Exchange Rates
          </Text>

          <Stack
            direction="row"
            space={12}
            mx="auto"
            my="2"
            justifyContent="space-between">
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Currency
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold" ml="16">
              Buy
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold" ml="5">
              Sell
            </Text>
          </Stack>

          <Stack direction="column" space={5} mt="2" mb="3">
            <CurrencyCard
              currencyText="EUR"
              currencyIcon="currency-eur"
              buy="0.90"
              buyGains="0.10"
              buyProfit={true}
              sell="1.12"
              sellGains="0.12"
              sellProfit={false}
              iconBgColor="error.500"
            />

            <CurrencyCard
              currencyText="GBP"
              currencyIcon="currency-gbp"
              buy="0.75"
              buyGains="0.16"
              buyProfit={false}
              sell="0.80"
              sellGains="0.20"
              sellProfit={true}
              iconBgColor="card.200"
            />

            <CurrencyCard
              currencyText="USD"
              currencyIcon="currency-usd"
              buy="0.85"
              buyGains="0.23"
              buyProfit={true}
              sell="1.35"
              sellGains="0.32"
              sellProfit={true}
              iconBgColor="card.300"
            />

            <CurrencyCard
              currencyText="JPY"
              currencyIcon="currency-jpy"
              buy="0.76"
              buyGains="0.05"
              buyProfit={true}
              sell="0.56"
              sellGains="0.10"
              sellProfit={false}
              iconBgColor="card.400"
            />

            <CurrencyCard
              currencyText="NGN"
              currencyIcon="currency-ngn"
              buy="0.40"
              buyGains="0.12"
              buyProfit={false}
              sell="0.37"
              sellGains="0.09"
              sellProfit={false}
              iconBgColor="primary.500"
            />
          </Stack>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
