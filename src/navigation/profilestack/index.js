import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserDetailsScreen from './screens/UserDetailsScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserPreviewScreen from './screens/UserPreviewScreen';

const profileStack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <profileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <profileStack.Screen name="userprofile" component={UserProfileScreen} />
      <profileStack.Screen name="userdetails" component={UserDetailsScreen} />
      <profileStack.Screen name="userpreview" component={UserPreviewScreen} />
    </profileStack.Navigator>
  );
};

export default ProfileStack;
