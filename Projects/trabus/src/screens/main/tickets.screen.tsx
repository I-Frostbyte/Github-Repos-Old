import {Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Center, Image, View, Input, Pressable} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackHandler, StyleSheet} from 'react-native';
import {CustomCard} from '../../components';
import History from '../../components/general/History';

export default function Tickets({navigation}) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const onAuthStateChanged = (user: any) => {
      if (user) {
        setUser(user);
      }
    };
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [navigation]);
  return (
    <View>
      <View p={4} pt={6} py={5}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/trivabus.png')}
            style={{width: 90, resizeMode: 'contain'}}
          />
          <Input
            placeholder="Search by destination or agency"
            borderRadius={30}
            w="60%"
            h={30}
            color="black"
            // textColor="black"
            p={5}
            InputRightElement={
              <Pressable>
                <Icon
                  name="search"
                  style={{padding: 4, paddingRight: 10}}
                  size={20}
                  color="grey"
                />
              </Pressable>
            }
          />

          <Pressable borderRadius={90} h={30} bg="primary.500">
            <Icon name="bell-o" style={{padding: 4}} size={20} color="white" />
          </Pressable>
        </View>
      </View>
      <Center>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ticket History</Text>
      </Center>
      <History />
      <History />
      <History />
      <History />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    borderRadius: 35,
    paddingVertical: 4,
    // width: '80%',
    height: 15,
  },
});
