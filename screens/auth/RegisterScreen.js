import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Logo from '../../assets/NBA_logo.png';
import firebase from 'firebase';
import RegisterScreenStyle from './style/RegisterScreenStyle';

export const RegisterScreen = ({navigation}) => {
  const styles = RegisterScreenStyle;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const HandleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: name,
        });
      })
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image style={styles.logo} source={Logo} />
      </SafeAreaView>

      <Text style={styles.greeting}> {`Sign Up to get started.`} </Text>

      <View style={styles.errorMessage}>
        {errorMessage && <Text style={styles.error}> {errorMessage} </Text>}
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}> Full Name </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={name}
            onChangeText={nameValue => setName(nameValue)}
          />
        </View>

        <View style={{marginTop: 65}}>
          <Text style={styles.inputTitle}> Email Address </Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={email}
            onChangeText={emailValue => setEmail(emailValue)}
          />
        </View>

        <View style={{marginTop: 65}}>
          <Text style={styles.inputTitle}> Password </Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={passwordValue => setPassword(passwordValue)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={HandleRegister}>
        <Text style={styles.buttonText}> Sign Up </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: 32,
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: '#fefefe', fontSize: 13}}>
          {' '}
          Already have an Account?{' '}
          <Text style={{color: '#c9082a', fontSize: 15, fontWeight: 'bold'}}>
            {' '}
            Login{' '}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
