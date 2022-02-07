import {View, Text} from 'react-native';
import React from 'react';
import LoadingVector from '../../assets/vectors/LoadingVector';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Messages} from '../../lang/Messages';

const LoadingScreen = () => {
  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <LoadingVector />
      <Text>{Messages.de.loading}</Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
