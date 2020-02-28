import {StyleSheet} from 'react-native';

const LoginScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
  },
  logo: {
    height: 60,
    width: 100,
    marginBottom: '3%',
    alignSelf: 'center',
    borderRadius: 6,
  },
  errorMessage: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 25,
  },
  error: {
    color: '#fefefe',
    fontWeight: '400',
    fontSize: 13,
    textAlign: 'center',
  },
  form: {
    marginTop: 40,
    marginHorizontal: 30,
  },
  inputTitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#fefefe',
  },
  input: {
    borderBottomColor: '#fefefe',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#fefefe',
    marginTop: 10,
  },
  button: {
    marginHorizontal: 53,
    marginTop: 10,
    backgroundColor: '#c9082a',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#fefefe',
    textAlign: 'center',
  },
  googleSignInButton: {
    marginTop: 15,
    borderRadius: 5,
    height: 50,
    alignSelf: 'center',
  },
  facebookSignInButton: {
    backgroundColor: '#17408B',
    marginHorizontal: 53,
    marginTop: 15,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  facebookIcon: {
    width: '10%',
    paddingLeft: '3%',
  },
  facebookSignInButtonText: {
    width: '90%',
    fontWeight: '600',
    fontSize: 14,
    color: '#fefefe',
    textAlign: 'left',
    paddingLeft: '6%',
  },
  greeting: {
    fontSize: 25,
    color: '#fefefe',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 100,
  },
});

export default LoginScreenStyle;
