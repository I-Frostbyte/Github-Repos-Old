import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Box, Button, Pressable, Text, View} from 'native-base';
import {CustomButton} from '../../components';
import {ButtonType} from '../../components/general/Button.component';

const Splash = ({navigation}: any) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View flex="1">
        <ImageBackground
          source={require('../../assets/splash1.png')}
          resizeMode="cover"
          style={{
            flex: 1,
            flexDirection: 'column',
            maxHeight: '70%',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {/* <Text
            ml="5"
            color="primary.500"
            fontWeight="700"
            lineHeight="40px"
            height="80px"
            fontSize="40px"
            w="343px"
            mt="96">
            Welcome To Trabuz
          </Text> */}
        </ImageBackground>
        <View flexDirection="column" justifyContent="space-between">
          {/* <Text
            ml="5"
            color="primary.500"
            fontWeight="700"
            lineHeight="40px"
            height="80px"
            fontSize="40px"
            w="343px"
            fontFamily=""
            mt="2">
            Welcome To Trabuz
          </Text> */}
          {/* <Text ml="5" color="primary.500" mt="2" mb="6" fontWeight="semibold">
          <Text ml="5" color="gray.500" mt="2" mb="6" fontWeight="semibold">
            Conveniently and efficiently purchase your bus tickets to travel to
            your destination.
          </Text> */}
          <Box mt="50">
            <CustomButton
              btnText={'Get started'}
              btnType={ButtonType.PRIMARY}
              onPress={() => {
                console.log('Press');
                navigation.navigate('Register');
              }}
              loading={false}
              disabled={false}
              newWidth="90%"
            />
          </Box>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Splash;
