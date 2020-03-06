import {StyleSheet} from 'react-native';

const LiveScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3e3e3e',
  },
  arenaImage: {
    height: 350,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
  },
  tomorrowGamesContainer: {
    height: 200,
    width: 360,
    backgroundColor: '#fefefe',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '14%',
    borderRadius: 8,
  },
  gamesTypeTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: 'red',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '4%',
  },
  teamsGameLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },
  teamsGameLogo: {
    height: 100,
    width: 100,
  },
  tomorrowGamesDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginVertical: '6%',
  },
  paginationContainer: {
    height: 50,
    width: 60,
    alignSelf: 'center',
  },
  paginationDots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 5,
    backgroundColor: '#fefefe',
  },
  teamsLogoContainer: {
    marginTop: '5%',
    marginHorizontal: 20,
  },
  dailyNewsTitle: {
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: '600',
    color: '#fefefe',
    marginVertical: '3%',
    marginLeft: '3%',
  },
});

export default LiveScreenStyle;
