import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';

const NewsItem = ({item}) => {
  const onArticlePress = url => {
    Linking.openURL(url);
  };
  const nbaFallbackLogo =
    'https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/08/NBA.png';

  return (
    <TouchableOpacity onPress={() => onArticlePress(item.url)}>
      <View style={styles.dailyNewsBox}>
        <ImageBackground
          source={{
            uri: item.urlToImage ? item.urlToImage : nbaFallbackLogo,
          }}
          style={styles.backgroundImageArticle}
          imageStyle={{opacity: 0.2, borderRadius: 5}}>
          <Text style={styles.dailyNewsText}>{item.title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dailyNewsBox: {
    backgroundColor: '#000000',
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
    marginHorizontal: 15,
    borderRadius: 5,
    height: 180,
    width: 270,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  backgroundImageArticle: {
    height: 180,
    width: 270,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dailyNewsText: {
    color: '#fefefe',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginHorizontal: '5%',
  },
});

export default NewsItem;
