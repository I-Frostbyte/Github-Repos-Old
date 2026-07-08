import {
  Box,
  Heading,
  ScrollView,
  Text,
  View,
  Button,
  Input,
  InputRightAddon,
  Pressable,
} from 'native-base';
import React from 'react';
import {BackHandler, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopAgency from '../../components/main/topAgency.component';
import TopAgencyList from '../../components/main/topAgencyList';
import Agency from '../../components/main/agency.component';
import {CustomButton} from '../../components';
import {ButtonType} from '../../components/general/Button.component';
import {Image} from 'react-native';
import axios from 'axios';

const Home = ({navigation}: any) => {
  const goBackToSync = () => {
    navigation.goBack();
    return true;
  };

  const fetchData = async() => {
    const data = await axios.get("https://trabus-server.onrender.com/api/agencies", {
      params : {
        search : search
      }
    })

    return data;
  }

  const [agenciesData, setAgenciesData] = React.useState([]);
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(()=>{
    fetchData().then((response)=>{
      console.log(response.data);
      const agencies = response.data.agencies
      setAgenciesData(agencies)
    })
  },[search]);


  BackHandler.addEventListener('hardwareBackPress', goBackToSync);

  return (
    <ScrollView>
      <View p={4} pt={6}>
        <View style={styles.container}>
          <Image source={require('../../assets/trivabus.png')} style={{ width:90, resizeMode:'contain'  }}  />
          <Input
            placeholder="Search by destination or agency"
            borderRadius={30}
            w="60%"
            h={45}
            color="black"
            p={3}
            onChangeText={(value) => setSearch(value)}
            InputRightElement={
              <Pressable>
                <Icon
                  name="search"
                  style={{marginRight: 10}}
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
      <View p={4}>
        <Heading fontSize="xl" pb={4}>
          {' '}
          Top agencies
        </Heading>

        <View>
          <TopAgencyList />
        </View>
      </View>
      <View p={4}>
        <Heading fontSize="xl" pb={4}>
          {' '}
          Available agencies
        </Heading>

        <View>
            {
              (agenciesData.length > 0) &&
              agenciesData.map((agency)=> {
                return <Agency data = {agency} key={agency._id} />
              })
            }
        </View>
      </View>
    </ScrollView>
  );
};

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
export default Home;
