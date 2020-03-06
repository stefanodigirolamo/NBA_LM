import React, {useRef, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {format} from 'date-fns';
import {getMatchDetailsAction} from '../../store/match_details/MatchDetailsAction';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MatchItem = ({
  item,
  getMatchDetails,
  matchDetails,
  isHeaderOpen,
  setClickedHeader,
}) => {
  const heightAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(heightAnimation, {
      toValue: isHeaderOpen ? 1 : 0,
      duration: 500,
    }).start();
  }, [isHeaderOpen, heightAnimation]);

  const openHeader = id => {
    getMatchDetails(id);
    setClickedHeader();
  };

  const heightTransform = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [80, 320],
  });

  const DetroitPistonsLogo =
    'https://upload.wikimedia.org/wikipedia/it/a/ae/Detroit_Pistons_logo.png';

  const ClevelandCavaliersLogo =
    'https://upload.wikimedia.org/wikipedia/it/thumb/a/ab/Cleveland_Cavaliers.png/200px-Cleveland_Cavaliers.png';

  return (
    <Animated.View style={{height: heightTransform}}>
      <TouchableWithoutFeedback onPress={() => openHeader(item.gameId)}>
        <View style={styles.matchItem}>
          <View style={styles.teamContainer}>
            <Image
              source={{
                uri:
                  item.hTeam.nickName === 'Cavaliers'
                    ? ClevelandCavaliersLogo
                    : item.hTeam.nickName === 'Pistons'
                    ? DetroitPistonsLogo
                    : item.hTeam.logo,
              }}
              style={styles.teamLogo}
              resizeMode={'contain'}
            />
          </View>
          <View>
            <Text style={styles.statusGame}> {item.statusGame} </Text>
            <Text style={styles.scorePoints}>
              {item.hTeam.score.points.length > 0
                ? `${item.hTeam.score.points} - `
                : null}
              {item.vTeam.score.points.length > 0
                ? item.vTeam.score.points
                : null}
            </Text>
            <Text style={styles.startTimeMatch}>
              {item.startTimeUTC
                ? format(new Date(item.startTimeUTC), 'yyyy-MM-dd hh:mm')
                : null}
            </Text>
          </View>
          <View style={styles.teamContainer}>
            <Image
              source={{
                uri:
                  item.vTeam.nickName === 'Cavaliers'
                    ? ClevelandCavaliersLogo
                    : item.vTeam.nickName === 'Pistons'
                    ? DetroitPistonsLogo
                    : item.vTeam.logo,
              }}
              style={styles.teamLogo}
              resizeMode={'contain'}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {matchDetails.length > 0 && isHeaderOpen && (
        <>
          <View
            style={{
              width: 350,
              backgroundColor: '#000000',
              borderRadius: 5,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.quarterLegendText}> R </Text>
            <Text style={styles.quarterLegendText}> 1 </Text>
            <Text style={styles.quarterLegendText}> 2 </Text>
            <Text style={styles.quarterLegendText}> 3 </Text>
            <Text style={styles.quarterLegendText}> 4 </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: '5%'}}>
            <View style={{flex: 2}}>
              <Text style={styles.teamName}>
                {' '}
                {matchDetails[0].hTeam.nickname}{' '}
              </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 4, marginLeft: '4%'}}>
              <Text style={styles.quarterInfoText}>
                {' '}
                {matchDetails[0].hTeam.score.points}{' '}
              </Text>
              <Text style={styles.quarterInfoText}>
                {' '}
                {matchDetails[0].hTeam.score.linescore[0]}{' '}
              </Text>
              <Text style={styles.quarterInfoText}>
                {matchDetails[0].hTeam.score.linescore[1]}
              </Text>
              <Text style={styles.quarterInfoText}>
                {matchDetails[0].hTeam.score.linescore[2]}
              </Text>
              <Text style={styles.quarterInfoText}>
                {matchDetails[0].hTeam.score.linescore[3]}
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: '5%'}}>
            <View style={{flex: 2}}>
              <Text style={styles.teamName}>
                {' '}
                {matchDetails[0].vTeam.nickname}{' '}
              </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 4, marginLeft: '4%'}}>
              <Text style={styles.quarterInfoText}>
                {' '}
                {matchDetails[0].vTeam.score.points}{' '}
              </Text>
              <Text style={styles.quarterInfoText}>
                {' '}
                {matchDetails[0].vTeam.score.linescore[0]}{' '}
              </Text>
              <Text style={styles.quarterInfoText}>
                {matchDetails[0].vTeam.score.linescore[1]}
              </Text>
              <Text style={styles.quarterInfoText}>
                {matchDetails[0].vTeam.score.linescore[2]}
              </Text>
              <Text style={styles.quarterInfoText}>
                {matchDetails[0].vTeam.score.linescore[3]}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: '5%',
            }}>
            <Icon name="stadium" size={40} color="#fefefe" />
            <Text style={styles.arenaText}>
              {item.arena}, {item.city}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: '2%',
            }}>
            <Icon name="human-greeting" size={40} color="#fefefe" />
            <Text style={styles.refereeText}>
              {matchDetails[0].officials[0].name},{' '}
              {matchDetails[0].officials[1].name},{' '}
              {matchDetails[0].officials[2].name}
            </Text>
          </View>
        </>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  matchItem: {
    backgroundColor: '#fefefe',
    width: 380,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
  },
  teamContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginVertical: '1%',
  },
  teamLogo: {
    width: 60,
    height: 60,
  },
  statusGame: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: '#c9082a',
  },
  scorePoints: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  startTimeMatch: {
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: '2%',
  },
  quarterLegendText: {
    color: '#fefefe',
    marginHorizontal: 15,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: '600',
  },
  quarterInfoText: {
    color: '#fefefe',
    fontSize: 13,
    textAlign: 'left',
    fontWeight: '300',
    marginHorizontal: 13,
  },
  teamName: {
    color: '#fefefe',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  arenaText: {
    color: '#fefefe',
    fontSize: 13,
    marginLeft: '3%',
    fontWeight: '500',
  },
  refereeText: {
    color: '#fefefe',
    fontSize: 11,
    marginLeft: '1%',
    fontWeight: '400',
  },
});

const mapStateToProps = state => ({
  matchDetails: state.matchDetails.matchDetails,
  loading: state.matches.loading,
  error: state.matches.error,
});

const mapDispatchToProps = dispatch => ({
  getMatchDetails: id => {
    dispatch(getMatchDetailsAction(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchItem);
