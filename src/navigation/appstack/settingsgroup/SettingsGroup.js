import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SettingsScreen from './screens/SettingsScreen';

const SettingsStack = createNativeStackNavigator();

const SettingsGroup = () => {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsGroup;
