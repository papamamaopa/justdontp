import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../../../../context/Contexts';

const HomeScreen = () => {
  const {doLogout} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          padding: 30,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#B2C2EA',
            borderRadius: 100 ^ 7,
            padding: 8,
            marginRight: 10,
          }}>
          <Image
            source={require('../../../../assets/images/1-510px.png')}
            style={{
              height: 40,
              width: 40,
              borderRadius: 100 ^ 7,
            }}
          />
        </View>
        <Text style={{fontSize: 20, color: '#1B0967', fontWeight: 'bold'}}>
          username
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            color: '#1B0967',
            fontWeight: 'bold',
            paddingLeft: 20,
          }}>
          Gesamt
        </Text>
        <View style={{margin: 20}}>
          <ImageBackground
            source={require('../../../../assets/images/HomeScreenBackground.png')}
            style={{
              padding: 20,
            }}
            imageStyle={{borderRadius: 15}}>
            <TouchableOpacity onPress={() => doLogout()}>
              <Text>Test</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
