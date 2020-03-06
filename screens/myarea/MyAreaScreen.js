import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import {getUserLoggedOutAction} from '../../store/user/UserAction';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View style={styles.container}>
      <View style={styles.userImageAndTextContainer}>
        <Image source={{uri: userInfo.photoURL}} style={styles.userImage} />
        <Text style={styles.userName}> {userInfo.displayName} </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: '#fefefe',
          height: 420,
          width: 280,
          alignSelf: 'center',
          marginVertical: '10%',
          borderRadius: 7,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="camera" size={90} color="#fefefe" />
      </View>

      <TouchableOpacity onPress={SignOutUser} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}> LOGOUT </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#3e3e3e',
    paddingVertical: '3%',
  },
  userImageAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
  },
  userImage: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fefefe',
  },
  logoutButton: {
    backgroundColor: '#C9082A',
    height: 35,
    width: 260,
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fefefe',
    textAlign: 'left',
  },
  logoutButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fefefe',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    getUserLoggedOut: () => {
      dispatch(getUserLoggedOutAction());
    },
  };
};

export default connect(null, mapDispatchToProps)(MyAreaScreen);
