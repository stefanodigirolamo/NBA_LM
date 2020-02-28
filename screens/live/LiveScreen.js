import React from 'react';
import {View, Text} from 'react-native';
import LiveScreenStyle from './LiveScreenStyle';

export const LiveScreen = () => {
  const styles = LiveScreenStyle;

  return (
    <>
      <View style={styles.container}>
        <Text> Live </Text>
      </View>
    </>
  );
};
