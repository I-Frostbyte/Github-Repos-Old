import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Box, Button, Pressable, Text, View} from 'native-base';
import React from 'react';

const Purchase = ({navigation}: any) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text fontSize="5xl" bold textAlign="center">
          Purchase Screen
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Purchase;
