import {Text} from 'react-native';
import React from 'react';
import {Messages} from '../../lang/Messages';
import {SafeAreaView} from 'react-native-safe-area-context';
import NoInternetConnectionVector from '../../assets/vectors/NoInternetConnectionVector';

const NoConnectionScreen = () => {
  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <NoInternetConnectionVector />
      <Text>Error: {Messages.de.error.noInternetConnection}</Text>
    </SafeAreaView>
  );
};

export default NoConnectionScreen;
