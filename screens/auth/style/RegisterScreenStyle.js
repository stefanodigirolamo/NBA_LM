import {StyleSheet} from 'react-native';

const RegisterScreenStyle = StyleSheet.create({
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
  greeting: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
  },
  errorMessage: {
    height: 20,
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
    marginHorizontal: 30,
    marginTop: 60,
    backgroundColor: '#c9082a',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#fefefe',
  },
});

export default RegisterScreenStyle;
