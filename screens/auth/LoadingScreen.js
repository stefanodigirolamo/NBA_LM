import React, {useEffect} from 'react';
import {View} from 'react-native';
import * as firebase from 'firebase';
import LoadingScreenStyle from './style/LoadingScreenStyle';
import BallLoader from '../../components/ball_loader/BallLoader';

export const LoadingScreen = ({navigation}) => {
  const styles = LoadingScreenStyle;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      navigation.navigate(user ? 'App' : 'Auth');
    });
  }, []);

  return (
    <View style={styles.container}>
      <BallLoader />
    </View>
  );
};
