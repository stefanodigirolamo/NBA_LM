import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import Logo from '../assets/NBA_logo.png';

const Header = () => (
  <View style={styles.container}>
    <SafeAreaView>
      <Image style={styles.logo} source={Logo} />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17408B',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 100,
    marginBottom: '3%',
    borderRadius: 6,
  },
});

export default Header;
