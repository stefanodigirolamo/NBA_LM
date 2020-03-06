import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import LiveScreenStyle from './LiveScreenStyle';
import {connect} from 'react-redux';
import {getLiveMatchAction} from '../../store/match/MatchAction';
import NBALogo from '../../assets/NBALogoSwitch';
import {getNewsAction, getTeamNewsAction} from '../../store/news/NewsAction';
import {format} from 'date-fns';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {getTomorrowMatchAction} from '../../store/tomorrow_matches/TomorrowMatchesAction';
import NewsItem from '../../components/news_item/NewsItem';

const LiveScreen = ({
  getLiveMatch,
  getTomorrowMatch,
  tomorrowGames,
  liveGames,
  league,
  getNews,
  news,
  getTeamNews,
  teamNews,
}) => {
  const styles = LiveScreenStyle;

  const carouselWidth = Dimensions.get('screen').width;

  const [activeSlide, setActiveSlide] = useState(0);
  const [teamName, setTeamName] = useState('');
  const [filteredTomorrowGames, setFilteredTomorrowGames] = useState([]);

  useEffect(() => {
    getLiveMatch();
  }, [getLiveMatch]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  useEffect(() => {
    getTomorrowMatch();
  }, [getTomorrowMatch]);

  useEffect(() => {
    teamName.length > 0 && getTeamNews(teamName);
  }, [getTeamNews, teamName]);

  const allTeam = [...league.east, ...league.west];

  const teamsLogoSeparator = () => (
    <View
      style={{
        height: 50,
        width: 1,
        backgroundColor: '#fefefe',
        alignSelf: 'center',
      }}
    />
  );

  const getTeamInfo = (name, nickName, code) => {
    setTeamName(`${name}-${nickName}`);
    const filterGames = tomorrowGames.filter(function(item) {
      return item.hTeam.shortName === code || item.vTeam.shortName === code;
    });
    return setFilteredTomorrowGames(filterGames);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://www.msg.com/wp-content/uploads/2018/05/NYK_013116_1827-social-1200x630.jpg',
        }}
        style={styles.arenaImage}
        imageStyle={{opacity: 0.2}}>
        <Carousel
          data={
            filteredTomorrowGames.length > 0
              ? filteredTomorrowGames
              : tomorrowGames
          }
          renderItem={({item}) => (
            <View style={styles.tomorrowGamesContainer}>
              <Text style={styles.gamesTypeTitle}>{item.league} league</Text>

              <View style={styles.teamsGameLogoContainer}>
                <Image
                  source={{uri: item.hTeam.logo}}
                  style={styles.teamsGameLogo}
                  resizeMode={'contain'}
                />
                <Text
                  style={{fontSize: 35, fontWeight: '600', color: '#000000'}}>
                  {' '}
                  -{' '}
                </Text>
                <Image
                  source={{uri: item.vTeam.logo}}
                  style={styles.teamsGameLogo}
                  resizeMode={'contain'}
                />
              </View>

              <Text style={styles.tomorrowGamesDate}>
                {' '}
                {format(new Date(item.startTimeUTC), 'yyyy-MM-dd hh:mm')}{' '}
              </Text>
            </View>
          )}
          sliderWidth={carouselWidth}
          itemWidth={carouselWidth}
          onSnapToItem={index => setActiveSlide(index)}
        />
        <View style={styles.paginationContainer}>
          <Pagination
            activeDotIndex={activeSlide}
            dotsLength={tomorrowGames && tomorrowGames.length}
            dotStyle={styles.paginationDots}
            inactiveDotStyle={{
              backgroundColor: '#000000',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
      </ImageBackground>
      <View style={{height: 70, marginTop: '2%'}}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={teamsLogoSeparator}
          bounces={false}
          data={allTeam}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                getTeamInfo(
                  item.teamSitesOnly.teamName,
                  item.teamSitesOnly.teamNickname,
                  item.teamSitesOnly.teamTricode,
                )
              }
              style={styles.teamsLogoContainer}>
              <NBALogo
                teamName={item.teamSitesOnly.teamName}
                height={50}
                width={60}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => `${item.teamId}`}
        />
      </View>

      <Text style={styles.dailyNewsTitle}>Daily News</Text>
      <Carousel
        data={teamNews ? teamNews : news}
        renderItem={({item}) => <NewsItem item={item} />}
        sliderWidth={carouselWidth}
        itemWidth={275}
        layout="default"
        loop
        autoplay
        autoplayDelay={3500}
        autoplayInterval={4000}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  league: state.league.league,
  news: state.news.news,
  teamNews: state.news.teamNews,
  liveGames: state.matches.liveGames,
  tomorrowGames: state.tomorrow.tomorrowGames,
  loading: state.matches.loading,
  error: state.matches.error,
});

const mapDispatchToProps = dispatch => {
  return {
    getLiveMatch: () => {
      dispatch(getLiveMatchAction());
    },
    getTomorrowMatch: () => {
      dispatch(getTomorrowMatchAction());
    },
    getNews: () => {
      dispatch(getNewsAction());
    },
    getTeamNews: teamName => {
      dispatch(getTeamNewsAction(teamName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveScreen);
