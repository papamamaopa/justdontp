import React from 'react';

import {AuthContext, SettingsContext} from './Contexts';

import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

import {Messages} from '../lang/Messages';

// react auth context provider (auth state management)
// -> if firebase onAuthStateChange is running
// func set firebaseUserData => firebaseUserData in context get updated src/App.js:67-97
export const AuthProvider = ({children}) => {
  const [firebaseUserData, setFirebaseUserData] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState(null);
  return (
    <AuthContext.Provider
      value={{
        firebaseUserData,
        setFirebaseUserData,
        userProfile,
        setUserProfile,
        doLogin: async (email, password) => {
          if (!(email && password))
            return Messages.de.error.emailAndPasswordRequired;
          return auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              return 'logged in';
            })
            .catch(e => {
              if (e.code === 'auth/invalid-email')
                return Messages.de.error.invalidEmail;
              if (e.code === 'auth/user-not-found')
                return Messages.de.error.userNotFound;
              else console.log(e.code);
            });
        },
        doRegistration: async (email, password) => {
          if (!(email && password))
            return Messages.de.error.emailAndPasswordRequired;
          return await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              return 'created';
            })
            .catch(e => {
              if (e.code === 'auth/email-already-in-use')
                return Messages.de.error.emailAlreadyInUse;
              else console.log(e.code);
            });
        },
        doPasswordReset: async email => {
          if (!email) return 'please enter your email for password reset';
          return await auth()
            .sendPasswordResetEmail(email)
            .then(() => 'check your mail inbox')
            .catch(e => 'something went wrong');
        },
        doLogout: async () => {
          await auth().signOut();
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const SettingsProvider = ({children}) => {
  const [darkmode, setDarkmode] = React.useState(false);

  return (
    <SettingsContext.Provider value={{darkmode, setDarkmode}}>
      {children}
    </SettingsContext.Provider>
  );
};
