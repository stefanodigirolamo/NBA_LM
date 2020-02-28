import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import {getUserLoggedOutAction} from '../../store/user/UserAction';

const MyAreaScreen = ({navigation, getUserLoggedOut}) => {
  const [userInfo, setUserInfo] = useState({
    displayName: '',
    photoURL: '',
  });

  useEffect(() => {
    const {displayName, photoURL} = firebase.auth().currentUser;
    setUserInfo({displayName, photoURL});
  }, []);

  const SignOutUser = async () => {
    firebase
      .auth()
      .signOut()
      .then(getUserLoggedOut);
  };

  return (
    <>
      <View style={styles.container}>
        <Text> Hi {userInfo.displayName} ! </Text>

        <TouchableOpacity onPress={SignOutUser}>
          <Text> Logout </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#000000',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    getUserLoggedOut: () => {
      dispatch(getUserLoggedOutAction());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(MyAreaScreen);
