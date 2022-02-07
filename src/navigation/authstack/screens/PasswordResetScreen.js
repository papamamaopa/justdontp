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

const PasswordResetScreen = () => {
  const {doPasswordReset} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const router = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#4318FF'}}>
              {Messages.de.passwordReset.title}
            </Text>
            <Text style={{color: '#B1B1B1', marginTop: 2.5}}>
              {Messages.de.passwordReset.subTitle}
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
              placeholder={Messages.de.registration.inputs.email}
            />
            <View style={{marginTop: 10, alignItems: 'flex-end'}}>
              {errorMessage ? (
                <Text style={{color: '#FF4B4B'}}>{errorMessage}</Text>
              ) : null}
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
                  const code = await doPasswordReset(email);
                  setErrorMessage(code);
                }}>
                <Text style={{color: 'white'}}>
                  {Messages.de.passwordReset.buttons.reset}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PasswordResetScreen;
