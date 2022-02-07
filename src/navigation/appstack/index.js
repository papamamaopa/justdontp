import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeGroup from './homegroup/HomeGroup';
import SettingsGroup from './settingsgroup/SettingsGroup';
import SocialGroup from './socialgroup/SocialGroup';
import {AuthContext} from '../../context/Contexts';

const tabStack = createBottomTabNavigator();

const AppStack = () => {
  const {firebaseUserData} = React.useContext(AuthContext);

  // debug
  React.useEffect(() => {
    console.log(firebaseUserData.uid);
  }, []);

  return (
    <tabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 70,
          elevation: 15,
        },
      }}>
      <tabStack.Screen name="homegroup" component={HomeGroup} />
      <tabStack.Screen name="socialgroup" component={SocialGroup} />
      <tabStack.Screen name="settingsgroup" component={SettingsGroup} />
    </tabStack.Navigator>
  );
};

export default AppStack;
