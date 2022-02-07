import {View, Text} from 'react-native';
import React from 'react';

import IconAnt from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={{padding: 20}}>
      <IconAnt name="left" size={20} color="black" />
    </View>
  );
};

export default Header;
