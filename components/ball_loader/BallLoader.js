import React, {useEffect} from 'react';
import {Animated} from 'react-native';
import {Easing} from 'react-native-reanimated';

const BallLoader = () => {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <Animated.Image
        style={{
          width: 50,
          height: 50,
          transform: [{rotate: spin}],
        }}
        source={{
          uri:
            'https://cdn2.iconfinder.com/data/icons/activity-5/50/1F3C0-basketball-512.png',
        }}
      />
    </>
  );
};

export default BallLoader;
