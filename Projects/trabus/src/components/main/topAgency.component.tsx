import {View} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

const TopAgency = ({name, image}) => {
  return (
    <ImageBackground
      source={{
        uri: image,
      }}
      style={styles.image}>
      <View style={styles.cover}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal:5,
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',

    padding: 16,
  },
  cover: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    backgroundSize: 'cover',

    // borderRadius: 15,
  },
});

export default TopAgency;
