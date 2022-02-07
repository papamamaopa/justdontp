import React from 'react';

import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';
import {Messages} from '../../../lang/Messages';
import {AuthContext} from '../../../context/Contexts';

const LoginScreen = () => {
  const {doLogin} = React.useContext(AuthContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const router = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#4318FF'}}>
              {Messages.de.login.title}
            </Text>
            <Text style={{color: '#B1B1B1', marginTop: 2.5}}>
              {Messages.de.login.subTitle}
            </Text>
          </View>
          <View style={{padding: 20}}>
            <TextInput
              style={{
                borderColor: 'rgba(177,177,177,0.2)',
                borderWidth: 2,
                paddingLeft: 20,
                borderRadius: 10,
              }}
              onChangeText={text => setEmail(text)}
              placeholder={Messages.de.login.inputs.email}
            />
            <TextInput
              style={{
                marginTop: 20,
                borderColor: 'rgba(177,177,177,0.2)',
                borderWidth: 2,
                paddingLeft: 20,
                borderRadius: 10,
              }}
              onChangeText={text => setPassword(text)}
              placeholder={Messages.de.login.inputs.password}
            />
            <View style={{marginTop: 10, alignItems: 'flex-end'}}>
              {errorMessage ? (
                <Text style={{color: '#FF4B4B'}}>{errorMessage}</Text>
              ) : null}
            </View>
            <View style={{alignItems: 'flex-end', marginTop: 30}}>
              <TouchableOpacity
                onPress={() => router.navigate('passwordreset')}>
                <Text style={{color: '#B1B1B1'}}>
                  {Messages.de.login.passwordReset}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  marginTop: 30,
                  paddingTop: 15,
                  paddingBottom: 15,
                  backgroundColor: '#4318FF',
                  borderRadius: 5,
                  alignItems: 'center',
                }}
                onPress={async () => {
                  const code = await doLogin(email, password);
                  setErrorMessage(code);
                }}>
                <Text style={{color: 'white'}}>
                  {Messages.de.login.buttons.login}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  paddingTop: 15,
                  paddingBottom: 15,
                  backgroundColor: '#B1B1B1',
                  borderRadius: 5,
                  alignItems: 'center',
                }}
                onPress={() => router.navigate('registration')}>
                <Text style={{color: 'white'}}>
                  {Messages.de.login.buttons.registration}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity style={{marginRight: 10}}>
              <Text>{Messages.de.login.footer.agb}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>{Messages.de.login.footer.privacy}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
