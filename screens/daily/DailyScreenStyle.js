import {StyleSheet} from 'react-native';

const DailyScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3e3e3e',
  },
  matchItem: {
    backgroundColor: '#fefefe',
    width: 380,
    marginVertical: 20,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  endTimeMatch: {
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default DailyScreenStyle;
