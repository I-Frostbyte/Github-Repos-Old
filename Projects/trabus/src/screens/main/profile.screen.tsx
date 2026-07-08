import {Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Center, Image, View, Input, Pressable} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackHandler, StyleSheet} from 'react-native';


export default function Profile({navigation}) {
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
        <Image
          size={150}
          borderRadius={100}
          source={{
            uri: 'https://schooloflanguages.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg',
          }}
          alt="Alternate Text"
        />

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {user.name ? user.name : 'Tambua'}
        </Text>
        <Text style={{fontSize: 16, marginVertical: 10}}>
          {user.email ? user.email : 'tambua@gmail.com'}
        </Text>
        <Text style={{fontSize: 16, marginVertical: 10}}>
          {user.phoneNumber}
        </Text>
        <TouchableOpacity style={{marginTop: 20}}>
          <Text style={{color: 'blue', fontSize: 16}}>Edit Profile</Text>
        </TouchableOpacity>
      </Center>
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
