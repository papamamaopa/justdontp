import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';

const UserProfileScreen = () => {
  return (
    <SafeAreaView>
      <Header title="dein Profil - #1" />
      <View style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
        <Text style={{paddingLeft: 0, color: '#B2C2EA'}}>
          Wie soll dein Benutzername lauten?
        </Text>
        <TextInput
          style={{
            marginTop: 5,
            borderColor: '#B2C2EA',
            borderWidth: 2,
            paddingLeft: 20,
            borderRadius: 15,
          }}
          placeholderTextColor="#B2C2EA"
          placeholder="Benutzername"
        />
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
