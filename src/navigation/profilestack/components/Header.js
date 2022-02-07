import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import IconAnt from 'react-native-vector-icons/AntDesign';

const Header = ({title}) => {
  const router = useNavigation();

  // if router can go back return goBackIcon if not return header
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {router.canGoBack() ? (
        <View>
          <TouchableOpacity onPress={() => router.goBack()}>
            <IconAnt name="left" size={20} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#1B0967'}}>
          {title}
        </Text>
      )}
    </View>
  );
};

export default Header;
