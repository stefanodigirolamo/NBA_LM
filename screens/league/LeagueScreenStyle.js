import {StyleSheet} from 'react-native';

const LeagueScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
  },
  conferenceLogo: {
    height: 40,
    width: 40,
    zIndex: 10,
    marginLeft: '2%',
    marginTop: '2%',
  },
  leagueCard: {
    height: '95%',
    width: '90%',
    backgroundColor: '#fefefe',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: '5%',
    zIndex: 0,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: '3%',
    paddingTop: 10,
  },
  legendText: {
    fontSize: 17,
    fontWeight: '600',
    marginHorizontal: '2%',
  },
  teamItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1,
    marginHorizontal: 5,
  },
  teamName: {
    flex: 2,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  teamLeagueInfoContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '6%',
    alignContent: 'center',
    paddingLeft: '4%',
  },
  teamLeagueInfo: {
    fontSize: 15,
    fontWeight: '300',
  },
  paginationContainer: {
    height: 50,
    width: 80,
    alignSelf: 'center',
  },
});

export default LeagueScreenStyle;
