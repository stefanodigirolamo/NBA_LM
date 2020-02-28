import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../../components/Header';

export const LeagueScreen = () => {
  return (
    <>

      <View style={styles.container}>
        <Text> League </Text>
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
});
