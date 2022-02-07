import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {useNavigation} from '@react-navigation/native';
import {Messages} from '../../../lang/Messages';
import {AuthContext} from '../../../context/Contexts';

const RegistrationScreen = () => {
  const {doRegistration} = React.useContext(AuthContext);
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
              {Messages.de.registration.title}
            </Text>
            <Text style={{color: '#B1B1B1', marginTop: 2.5}}>
              {Messages.de.registration.subTitle}
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
              placeholder={Messages.de.registration.inputs.email}
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
              placeholder={Messages.de.registration.inputs.password}
            />
            <View style={{marginTop: 10, alignItems: 'flex-end'}}>
              {errorMessage ? (
                <Text style={{color: '#FF4B4B'}}>{errorMessage}</Text>
              ) : null}
            </View>
            <View style={{alignItems: 'flex-start', marginTop: 30}}>
              <Text style={{color: '#B1B1B1'}}>
                {Messages.de.registration.infoText}
              </Text>
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
                  const code = await doRegistration(email, password);
                  setErrorMessage(code);
                }}>
                <Text style={{color: 'white'}}>
                  {Messages.de.registration.buttons.registration}
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
              <Text>{Messages.de.registration.footer.agb}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>{Messages.de.registration.footer.privacy}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
