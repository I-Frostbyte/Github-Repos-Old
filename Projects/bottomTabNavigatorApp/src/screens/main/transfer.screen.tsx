import React from 'react';
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

const Transfer = ({navigation}: any) => {
  return (
    <TouchableWithoutFeedback>
      <Text mx="auto" fontSize="lg">
        Transfer Screen
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default Transfer;
