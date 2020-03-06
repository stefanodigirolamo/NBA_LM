import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import MatchesScreenStyle from './MatchesScreenStyle';
import {connect} from 'react-redux';
import {
  getDailyMatchAction,
  getMatchAction,
} from '../../store/match/MatchAction';
import {format, eachDayOfInterval, subDays, addDays} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';
import MatchItem from '../../components/match_item/MatchItem';

const MatchesScreen = ({getDailyMatch, getMatches, dailyGames, games}) => {
  const [clickedHeader, setClickedHeader] = useState(null);
  const styles = MatchesScreenStyle;

  const [datePickerValue, setDatePickerValue] = useState('');
  const pickerRef = useRef();

  const lastWeek = subDays(new Date(), 7);
  const nextWeek = addDays(new Date(), 7);

  const interval = eachDayOfInterval({
    start: new Date(lastWeek),
    end: new Date(nextWeek),
  });

  const formattedInterval = interval.map(item =>
    format(new Date(item), 'yyyy-MM-dd'),
  );

  const newIntervalArray = array => {
    let values = {};
    let results = [];
    array.map(item => {
      values[item] ? (values[item] += 1) : (values[item] = 1);
    });
    Object.keys(values).map(key => {
      results.push({
        label: key,
        value: key,
        color: '#000000',
        displayValue: true,
      });
    });
    return results;
  };

  const datePickerArray = newIntervalArray(formattedInterval);

  useEffect(() => {
    getDailyMatch();
  }, [getDailyMatch]);

  return (
    <View style={styles.container}>
      <View style={styles.datePickerContainer}>
        <View>
          <RNPickerSelect
            onValueChange={index => {
              setDatePickerValue(index);
              setClickedHeader(null);
            }}
            onDonePress={() => getMatches(datePickerValue)}
            items={datePickerArray}
            style={pickerSelectStyles}
            ref={pickerRef}
            placeholder={{label: 'Select Date'}}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => pickerRef.current.togglePicker()}
            style={styles.calendarIcon}>
            <Icon name="calendar-month-outline" size={30} color={'#fefefe'} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={dailyGames?.length > 0 ? dailyGames : games}
        renderItem={({item, index}) => (
          <MatchItem
            item={item}
            isHeaderOpen={index === clickedHeader}
            setClickedHeader={() => setClickedHeader(index)}
          />
        )}
        keyExtractor={item => `${item.gameId}`}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  dailyGames: state.matches.dailyGames,
  games: state.matches.games,
  loading: state.matches.loading,
  error: state.matches.error,
});

const mapDispatchToProps = dispatch => ({
  getDailyMatch: () => {
    dispatch(getDailyMatchAction());
  },
  getMatches: date => {
    dispatch(getMatchAction(date));
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginLeft: '2%',
    fontWeight: '600',
  },
  inputAndroid: {},
});

export default connect(mapStateToProps, mapDispatchToProps)(MatchesScreen);
