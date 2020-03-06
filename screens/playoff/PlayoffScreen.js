import React, {useEffect} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import PlayoffScreenStyle from './PlayoffScreenStyle';
import {connect} from 'react-redux';
import {getPlayoffAction} from '../../store/playoff/PlayoffAction';
import NBALogoSwitch from '../../assets/NBALogoSwitch';
import {FlatList} from 'react-native-gesture-handler';
import NBAPlayoffLogo from '../../assets/NBA_playoff_logo.png';

const PlayoffScreen = ({teams, getPlayoff, league}) => {
  const styles = PlayoffScreenStyle;

  useEffect(() => {
    league.length !== 0 && getPlayoff(league);
  }, [league, getPlayoff]);

  const renderEastSection = item => (
    <View
      style={{
        flexDirection: 'column',
        marginHorizontal: 8,
        marginTop: '40%',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <NBALogoSwitch teamName={item.hTeam} height={30} width={30} />
        <NBALogoSwitch teamName={item.vTeam} height={30} width={30} />
      </View>
      <View
        style={{
          height: 10,
          width: 1,
          backgroundColor: '#fefefe',
          alignSelf: 'center',
          marginTop: 10,
        }}></View>
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 50,
          backgroundColor: '#3e3e3e',
          alignSelf: 'center',
          marginTop: 10,
        }}></View>
    </View>
  );

  const renderWeastSection = item => (
    <View
      style={{
        flexDirection: 'column',
        marginHorizontal: 8,
        marginBottom: '40%',
      }}>
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 50,
          backgroundColor: '#3e3e3e',
          alignSelf: 'center',
          marginBottom: 10,
        }}></View>
      <View
        style={{
          height: 10,
          width: 1,
          backgroundColor: '#fefefe',
          alignSelf: 'center',
          marginBottom: 10,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <NBALogoSwitch teamName={item.hTeam} height={30} width={30} />
        <NBALogoSwitch teamName={item.vTeam} height={30} width={30} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://i.pinimg.com/originals/5a/76/05/5a7605f0f41832f222cff8c50eeea286.jpg',
        }}
        style={{height: '100%', width: '100%', marginBottom: '5%'}}
        imageStyle={{
          opacity: 0.4,
        }}>
        <View style={{alignItems: 'center'}}>
          <FlatList
            horizontal={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={teams.east}
            renderItem={({item}) => renderEastSection(item)}
            keyExtractor={item => `${item.id}`}
          />
          <View
            style={{
              height: 1,
              width: 40,
              backgroundColor: '#fefefe',
              alignSelf: 'flex-start',
              marginHorizontal: 90,
            }}></View>
          <View
            style={{
              height: 1,
              width: 40,
              backgroundColor: '#fefefe',
              alignSelf: 'flex-end',
              marginHorizontal: 90,
            }}></View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                backgroundColor: '#3e3e3e',
                alignSelf: 'flex-start',
                marginHorizontal: 80,
                marginTop: 10,
              }}></View>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                backgroundColor: '#3e3e3e',
                alignSelf: 'flex-end',
                marginHorizontal: 75,
                marginTop: 10,
              }}></View>
          </View>
          <View
            style={{
              height: 1,
              width: 140,
              backgroundColor: '#fefefe',
              alignSelf: 'center',
              marginHorizontal: 90,
            }}></View>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              backgroundColor: '#3e3e3e',
              alignSelf: 'center',
              marginHorizontal: 65,
              marginTop: 10,
            }}></View>
        </View>

        <Image
          source={NBAPlayoffLogo}
          style={{
            height: 140,
            width: 260,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        />

        <View style={{alignItems: 'center', marginTop: 'auto'}}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              backgroundColor: '#3e3e3e',
              alignSelf: 'center',
              marginHorizontal: 65,
              marginBottom: 10,
            }}></View>
          <View
            style={{
              height: 1,
              width: 140,
              backgroundColor: '#fefefe',
              alignSelf: 'center',
              marginHorizontal: 90,
            }}></View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                backgroundColor: '#3e3e3e',
                alignSelf: 'flex-start',
                marginHorizontal: 78,
                marginBottom: 10,
              }}></View>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 50,
                backgroundColor: '#3e3e3e',
                alignSelf: 'flex-end',
                marginHorizontal: 77,
                marginBottom: 10,
              }}></View>
          </View>

          <View
            style={{
              height: 1,
              width: 40,
              backgroundColor: '#fefefe',
              alignSelf: 'flex-start',
              marginHorizontal: 90,
            }}></View>
          <View
            style={{
              height: 1,
              width: 40,
              backgroundColor: '#fefefe',
              alignSelf: 'flex-end',
              marginHorizontal: 90,
            }}></View>
          <FlatList
            horizontal={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            data={teams.weast}
            renderItem={({item}) => renderWeastSection(item)}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => ({
  teams: state.playoff.teams,
  league: state.league.league,
  loading: state.league.loading,
  error: state.league.error,
});

const mapDispatchToProps = dispatch => ({
  getPlayoff: league => {
    dispatch(getPlayoffAction(league));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayoffScreen);
