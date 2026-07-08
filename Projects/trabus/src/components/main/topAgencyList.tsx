import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import TopAgency from './topAgency.component';

const TopAgencyList = () => {
  const data = [
    {
      id: 1,
      name: 'Amour Mezam',
      image: 'https://amourmezam.com/images/services/bus-location.jpg',
    },
    {
      id: 2,
      name: 'Vatican',
      image: 'https://amourmezam.com/images/services/bus-location.jpg',
    },
    {
      id: 3,
      name: 'Musango',
      image: 'https://amourmezam.com/images/services/bus-location.jpg',
    },
    {
      id: 4,
      name: 'Moghamo',
      image: 'https://amourmezam.com/images/services/bus-location.jpg',
    },
    {
      id: 5,
      name: 'Favour Voyage',
      image: 'https://amourmezam.com/images/services/bus-location.jpg',
    },
    {
      id: 6,
      name: 'Finex Voyage',
      image: 'https://amourmezam.com/images/services/bus-location.jpg',
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <TopAgency image={item.image} name={item.name} />}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    width: 200,
    marginRight: 10,
    padding: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default TopAgencyList;
