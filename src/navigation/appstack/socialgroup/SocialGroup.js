import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GroupsOverviewScreen from './screens/GroupsOverviewScreen';

const SocialStack = createNativeStackNavigator();

const SocialGroup = () => {
  return (
    <SocialStack.Navigator screenOptions={{headerShown: false}}>
      <SocialStack.Screen name="groups" component={GroupsOverviewScreen} />
    </SocialStack.Navigator>
  );
};

export default SocialGroup;
