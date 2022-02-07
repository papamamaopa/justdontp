import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import PasswordResetScreen from './screens/PasswordResetScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const authStack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <authStack.Navigator screenOptions={{headerShown: false}}>
      <authStack.Screen name="welcome" component={WelcomeScreen} />
      <authStack.Screen name="login" component={LoginScreen} />
      <authStack.Screen name="registration" component={RegistrationScreen} />
      <authStack.Screen name="passwordreset" component={PasswordResetScreen} />
    </authStack.Navigator>
  );
};

export default AuthStack;
