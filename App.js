import React, {useEffect} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {LoadingScreen} from './screens/auth/LoadingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import {RegisterScreen} from './screens/auth/RegisterScreen';
import LiveScreen from './screens/live/LiveScreen';
import MatchesScreen from './screens/matches/MatchesScreen';
import LeagueScreen from './screens/league/LeagueScreen';
import MyAreaScreen from './screens/myarea/MyAreaScreen';
import PlayoffScreen from './screens/playoff/PlayoffScreen';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import store from './store/Store';
import {connect, Provider} from 'react-redux';
import Header from './components/Header';
import {Image, Text} from 'react-native';
import {getLeagueAction} from './store/league/LeagueAction';

var firebaseConfig = {
  apiKey: 'AIzaSyBUlJz2yA776nt55vCvIMVD80Pg6QPjbfI',
  authDomain: 'nba-livescore-d306c.firebaseapp.com',
  databaseURL: 'https://nba-livescore-d306c.firebaseio.com',
  projectId: 'nba-livescore-d306c',
  storageBucket: 'nba-livescore-d306c.appspot.com',
  messagingSenderId: '220825879977',
  appId: '1:220825879977:web:2b0536d78823c21943b0b8',
};

firebase.initializeApp(firebaseConfig);

const LiveStack = createStackNavigator(
  {
    Live: LiveScreen,
  },
  {headerMode: 'none'},
);

const MatchesStack = createStackNavigator(
  {
    Matches: MatchesScreen,
  },
  {headerMode: 'none'},
);

const LeagueStack = createStackNavigator(
  {
    League: LeagueScreen,
  },
  {headerMode: 'none'},
);

const PlayoffStack = createStackNavigator(
  {
    Playoff: PlayoffScreen,
  },
  {headerMode: 'none'},
);

const MyAreaStack = createStackNavigator(
  {
    MyArea: MyAreaScreen,
  },
  {headerMode: 'none'},
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {headerMode: 'none'},
);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Icon;
  switch (routeName) {
    case 'Live':
      return (
        <Image
          source={{
            uri:
              'https://cdn2.iconfinder.com/data/icons/activity-5/50/1F3C0-basketball-512.png',
          }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: '#fefefe',
          }}
        />
      );
    case 'Matches':
      return (
        <IconComponent
          name="basketball-hoop-outline"
          size={30}
          color={tintColor}
        />
      );
    case 'Playoffs':
      return <IconComponent name="tournament" size={30} color={tintColor} />;
    case 'League':
      return (
        <IconComponent
          name="format-list-checkbox"
          size={30}
          color={tintColor}
        />
      );
    case 'MyArea':
      return (
        <IconComponent
          name="clipboard-account-outline"
          size={30}
          color={tintColor}
        />
      );
    default:
      return null;
  }
};

const tabNavigator = createBottomTabNavigator(
  {
    Playoffs: PlayoffStack,
    League: LeagueStack,
    Live: LiveStack,
    Matches: MatchesStack,
    MyArea: MyAreaStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
      tabBarLabel: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Live') {
          return <Text />;
        } else {
          return (
            <Text
              style={{
                fontSize: 12,
                alignSelf: 'center',
                color: '#fefefe',
                marginBottom: 2,
              }}>
              {routeName}
            </Text>
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#cccccc',
      labelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      style: {
        backgroundColor: '#17408B',
        height: 65,
      },
    },
    initialRouteName: 'Live',
  },
);

const AppConfig = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: tabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  getLeague: () => {
    dispatch(getLeagueAction());
  },
});

const App = ({loggedIn, getLeague}) => {
  useEffect(() => {
    getLeague();
  }, [getLeague]);

  return (
    <>
      {loggedIn && <Header />}
      <AppConfig />
    </>
  );
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const Container = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default Container;
