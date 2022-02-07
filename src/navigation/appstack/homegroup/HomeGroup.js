import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import StaticsScreen from './screens/StaticsScreen';

const HomeStack = createNativeStackNavigator();

const HomeGroup = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="statics" component={StaticsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeGroup;
