import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider, SettingsProvider} from './context/Providers';
import {AuthContext} from './context/Contexts';

import NetInfo from '@react-native-community/netinfo';

import * as Sentry from '@sentry/react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import NoConnectionScreen from './navigation/util/NoConnectionScreen';
import LoadingScreen from './navigation/util/LoadingScreen';

import AuthStack from './navigation/authstack';
import AppStack from './navigation/appstack';
import ProfileStack from './navigation/profilestack';
// Construct a new instrumentation instance. This is needed to communicate between the integration and React
const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

// sentry init
Sentry.init({
  dsn: process.env.SENTRY_TOKEN,
  tracesSampleRate: 1.0,
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ['localhost', /^\//],
      routingInstrumentation,
    }),
  ],
});

const App = () => {
  const navigation = React.useRef();

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <SettingsProvider>
          <NavigationContainer
            ref={navigation}
            onReady={() => {
              // Register the navigation container with the instrumentation
              routingInstrumentation.registerNavigationContainer(navigation);
            }}>
            <RootComponent />
          </NavigationContainer>
        </SettingsProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

const RootComponent = () => {
  // firebase user from authcontext /context/Provider and /context/Context
  const {firebaseUserData, setFirebaseUserData, userProfile, setUserProfile} =
    React.useContext(AuthContext);
  // init state -> default true
  const [isInit, setIsInit] = React.useState(true);
  // offline state -> default true - if user has a internet connection
  const [isOffline, setIsOffline] = React.useState(true);

  // on firebaseUserData update
  const onAuthStateChanged = user => {
    setFirebaseUserData(user);
    setIsInit(false);
  };

  // subscriber useEffect
  React.useEffect(() => {
    // subscribe internet connection state
    const netSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      console.log(offline);
      setIsOffline(offline);
    });

    // subscribe firebase user auth state change and set userProfile (onAuthStateChanged)
    const userSubscription = auth().onAuthStateChanged(onAuthStateChanged);

    // userprofile subscription in db
    const profileSubscription = firestore()
      .collection('users')
      .doc(firebaseUserData?.uid)
      .onSnapshot(
        snapshot => {
          if (snapshot.exists) setUserProfile(snapshot.data());
          else console.log('user does not exists');
          console.log(snapshot.data());
        },
        error => {
          console.error(error);
        },
      );

    // return subscriptions
    return () => {
      netSubscription, userSubscription, profileSubscription;
    };
  }, [firebaseUserData]);

  // if no internet connection return no connection screen /navgation/util/NoConnectionScreen
  if (isOffline) return <NoConnectionScreen />;

  // if app is init return loading screen /navigation/util/LoadingScreen
  if (isInit) return <LoadingScreen />;

  // if no firebaseUserData return authstack /navigation/authstack
  if (!firebaseUserData) return <AuthStack />;

  // if user has no userprofile in db
  if (!userProfile) return <ProfileStack />;

  // if firebaseUserData return appstack /navigation/appstack
  return <AppStack />;
};

export default Sentry.wrap(App);
