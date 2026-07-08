import {Button, HStack, Pressable, View, Text} from 'native-base';
import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Agency = ({data}: any) => {
  const navigation = useNavigation();

  const image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIWKzKnTZedSJcKfulKvcWG6KgyNa6vOu3Q&usqp=CAU"

   const id = data._id;

  return (
    <View
      borderColor="primary.500"
      my={1}
      borderWidth={1}
      p={2}
      borderRadius="md">
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cover}>
          <Text style={styles.text}>{data.agencyName}</Text>
        </View>
      </ImageBackground>
      <HStack space={3} px={3} justifyContent="space-between">
        <View>
          <Text>{data.agencyName}</Text>
          <Text>The title description</Text>
        </View>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate('Agency', { id : id});
            }}
            w={10}
            my="auto"
            color="white"
            borderRadius="lg"
            bg="primary.500">
            <Text color="white" mx={1}>
              Book
            </Text>
          </Pressable>
        </View>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 163,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    // marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 0,
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    padding: 10,
  },
  cover: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    bottom: 2,
    backgroundSize: 'cover',

    // borderRadius: 15,
  },
});

export default Agency;
