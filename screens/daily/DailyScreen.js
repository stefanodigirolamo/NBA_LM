import React, {useEffect} from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import DailyScreenStyle from './DailyScreenStyle';
import {connect} from 'react-redux';
import {getDailyMatchAction} from '../../store/match/MatchAction';
import {format} from 'date-fns';

const DailyScreen = ({getDailyMatch, dailyGames}) => {
  const styles = DailyScreenStyle;

  useEffect(() => {
    getDailyMatch();
  }, [getDailyMatch]);

  return (
    <View style={styles.container}>
      {dailyGames.length > 0 && (
        <FlatList
          bounces={false}
          data={dailyGames}
          renderItem={({item}) => (
            <View style={styles.matchItem}>
              <View style={styles.teamContainer}>
                <Image
                  source={{uri: `${item.hTeam.logo}`}}
                  style={styles.teamLogo}
                  resizeMode={'contain'}
                />
              </View>
              <View>
                <Text style={styles.statusGame}> {item.statusGame} </Text>
                <Text style={styles.scorePoints}>
                  {item.hTeam.score.points} - {item.vTeam.score.points}
                </Text>
                <Text style={styles.endTimeMatch}>
                  {format(new Date(item.endTimeUTC), 'yyyy-MM-dd hh:mm')}
                </Text>
              </View>
              <View style={styles.teamContainer}>
                <Image
                  source={{uri: `${item.vTeam.logo}`}}
                  style={styles.teamLogo}
                  resizeMode={'contain'}
                />
              </View>
            </View>
          )}
          keyExtractor={item => `${item.gameId}`}
        />
      )}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    dailyGames: state.dailyMatches.dailyGames,
    loading: state.dailyMatches.loading,
    error: state.dailyMatches.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDailyMatch: () => {
      dispatch(getDailyMatchAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyScreen);
