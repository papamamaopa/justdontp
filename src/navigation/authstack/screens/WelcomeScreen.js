import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {Messages} from '../../../lang/Messages';
import WelcomeVector from '../../../assets/vectors/WelcomeVector';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const router = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <WelcomeVector />
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {Messages.de.welcome.first.title}
        </Text>
        <Text>{Messages.de.welcome.first.subTitle}</Text>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: '100%',
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: '#4318FF',
            borderRadius: 5,
          }}
          onPress={() => router.navigate('login')}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            {Messages.de.welcome.first.buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
