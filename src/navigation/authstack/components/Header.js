import React from 'react';

import {View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import IconAnt from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const router = useNavigation();
  return (
    <View style={{padding: 20}}>
      {router.canGoBack() ? (
        <TouchableOpacity onPress={() => router.goBack()}>
          <IconAnt name="left" size={20} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
