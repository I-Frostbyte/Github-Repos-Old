import React from 'react';
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Box, Button, Pressable, Text, View} from 'native-base';

const Profile = ({navigation}: any) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text fontSize="5xl" bold textAlign="center">
          Profile Screen
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;
