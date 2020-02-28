import React, {useState, useEffect} from 'react';
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
import {GoogleSigninButton, GoogleSignin} from 'react-native-google-signin';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreenStyle from './style/LoginScreenStyle';
import {connect} from 'react-redux';
import {getUserLoggedAction} from '../../store/user/UserAction';

const LoginScreen = ({navigation, getUserLogged, loggedIn}) => {
  const styles = LoginScreenStyle;

  const [email, setEmail] = useState('stefanodigirolamo2@gmail.com');
  const [password, setPassword] = useState('Digirolamo96');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '220825879977-9qe7e2pjo55713c5gv7n8ihb2qcc5vku.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      loginHint: '',
      forceConsentPrompt: true,
      accountName: '',
      iosClientId:
        '220825879977-lmf6mnc5802b3j4btdgm3icsvsugrj1c.apps.googleusercontent.com',
    });
  }, []);

  const HandleLogin = () => {
    try {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(getUserLogged);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const HandleGoogleLogin = async () => {
    try {
      await GoogleSignin.configure();
      const userData = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(
        userData.idToken,
      );

      return await firebase
        .auth()
        .signInWithCredential(credential)
        .then(getUserLogged)
        .then(navigation.navigate('App'));
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const HandleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(result => {
        if (result.isCancelled) {
          return Promise.reject(new Error('The User cancelled the request'));
        }
        return AccessToken.getCurrentAccessToken();
      })
      .then(data => {
        const credential = firebase.auth.FacebookAuthProvider.credential(
          data.accessToken,
        );
        return firebase.auth().signInWithCredential(credential);
      })
      .then(currentUser => {
        getUserLogged();
        navigation.navigate('App');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image style={styles.logo} source={Logo} />
      </SafeAreaView>

      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}> Email Address </Text>
          <TextInput
            clearButtonMode="always"
            style={styles.input}
            autoCapitalize="none"
            value={email}
            onChangeText={emailValue => setEmail(emailValue)}
          />
        </View>

        <View style={{marginTop: 65}}>
          <Text style={styles.inputTitle}> Password </Text>
          <TextInput
            clearButtonMode="always"
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={passwordValue => setPassword(passwordValue)}
          />
        </View>
      </View>

      <View style={styles.errorMessage}>
        {errorMessage && <Text style={styles.error}> {errorMessage} </Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={HandleLogin}>
        <Text style={styles.buttonText}> Sign In </Text>
      </TouchableOpacity>

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        style={styles.googleSignInButton}
        onPress={HandleGoogleLogin}
      />
      <TouchableOpacity
        title="Facebook Sign in"
        onPress={HandleFacebookLogin}
        style={styles.facebookSignInButton}>
        <Icon
          name="facebook"
          size={25}
          style={styles.facebookIcon}
          color={'#ffffff'}
        />
        <Text style={styles.facebookSignInButtonText}>
          {' '}
          Sign in with Facebook{' '}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: 32,
        }}
        onPress={() => navigation.navigate('Register')}>
        <Text style={{color: '#fefefe', fontSize: 13}}>
          {' '}
          New to NBA LiveScore Manager?{' '}
          <Text style={{color: '#c9082a', fontSize: 15, fontWeight: 'bold'}}>
            {' '}
            Sign Up{' '}
          </Text>
        </Text>
      </TouchableOpacity>

      <Text style={styles.greeting}> {`Hello again.\nWelcome back...`} </Text>
    </View>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = dispatch => {
  return {
    getUserLogged: () => {
      dispatch(getUserLoggedAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
