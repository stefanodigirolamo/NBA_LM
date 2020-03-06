import React, {useState} from 'react';
import {View, Text, Dimensions, FlatList, Image} from 'react-native';
import LeagueScreenStyle from './LeagueScreenStyle';
import {connect} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import NBALogoSwitch from '../../assets/NBALogoSwitch';

const LeagueScreen = ({league}) => {
  const styles = LeagueScreenStyle;
  const carouselWidth = Dimensions.get('screen').width;

  const [activeSlide, setActiveSlide] = useState(0);

  const leagueArray = [league.east, league.west];

  return (
    <View style={styles.container}>
      <Carousel
        data={leagueArray}
        style={{position: 'absolute'}}
        renderItem={conferenceArray => (
          <>
            {conferenceArray.index === 0 ? (
              <Image
                source={{
                  uri:
                    'https://seeklogo.com/images/N/nba-eastern-conference-logo-0B7E499625-seeklogo.com.png',
                }}
                style={styles.conferenceLogo}
                resizeMode={'contain'}
              />
            ) : (
              <Image
                source={{
                  uri:
                    'https://seeklogo.com/images/N/nba-western-conference-logo-CD123BABD3-seeklogo.com.png',
                }}
                style={styles.conferenceLogo}
                resizeMode={'contain'}
              />
            )}
            <View style={styles.leagueCard}>
              <View style={styles.legendContainer}>
                <Text style={styles.legendText}> PG </Text>
                <Text style={styles.legendText}> V </Text>
                <Text style={styles.legendText}> P </Text>
                <Text style={styles.legendText}> %V </Text>
              </View>
              <FlatList
                bounces={false}
                data={conferenceArray.item}
                renderItem={({item, index}) => (
                  <View style={styles.teamItemContainer}>
                    <View
                      style={
                        index < 8
                          ? [
                              {
                                backgroundColor: '#C9082A',
                                flex: 0.75,
                                borderRadius: 10,
                                marginRight: 8,
                              },
                            ]
                          : {flex: 0.75, marginRight: 8}
                      }>
                      <Text
                        style={
                          index < 8
                            ? [
                                {
                                  color: '#fefefe',
                                  fontWeight: 'bold',
                                  textAlign: 'center',
                                },
                              ]
                            : {fontWeight: 'bold', textAlign: 'center'}
                        }>
                        {' '}
                        {index + 1}.{' '}
                      </Text>
                    </View>

                    <NBALogoSwitch
                      teamName={item.teamSitesOnly.teamName}
                      height={35}
                      width={40}
                    />
                    <Text style={styles.teamName}>
                      {item.teamSitesOnly.teamNickname}
                    </Text>
                    <View style={styles.teamLeagueInfoContainer}>
                      <Text style={styles.teamLeagueInfo}>
                        {+item.win + +item.loss}
                      </Text>
                      <Text style={styles.teamLeagueInfo}>{item.win}</Text>
                      <Text style={styles.teamLeagueInfo}>{item.loss}</Text>
                      <Text style={styles.teamLeagueInfo}>
                        {Math.round(item.winPctV2)}
                      </Text>
                    </View>
                  </View>
                )}
                keyExtractor={item => `${item.teamId}`}
              />
            </View>
          </>
        )}
        sliderWidth={carouselWidth}
        itemWidth={carouselWidth}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          activeDotIndex={activeSlide}
          dotsLength={leagueArray.length}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            marginBottom: 15,
            backgroundColor: '#fefefe',
          }}
          inactiveDotStyle={{
            backgroundColor: '#000000',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  league: state.league.league,
  loading: state.league.loading,
  error: state.league.error,
});

export default connect(mapStateToProps, null)(LeagueScreen);
