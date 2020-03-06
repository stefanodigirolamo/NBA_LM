import {
  DAILY_MATCH_LOAD,
  DAILY_MATCH_SUCCESS,
  DAILY_MATCH_ERROR,
  LIVE_MATCH_LOAD,
  LIVE_MATCH_SUCCESS,
  LIVE_MATCH_ERROR,
  MATCHES_LOAD,
  MATCHES_SUCCESS,
  MATCHES_ERROR,
  TOMORROW_MATCH_LOAD,
  TOMORROW_MATCH_SUCCESS,
  TOMORROW_MATCH_ERROR,
} from './MatchTypes';

const initialState = {
  dailyGames: [],
  tomorrowGames: [],
  games: [],
  liveGames: [],
  loading: false,
  error: false,
};

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case DAILY_MATCH_LOAD:
      return {
        dailyGames: [],
        loading: true,
        error: false,
      };
    case DAILY_MATCH_SUCCESS:
      return {
        dailyGames: action.payload,
        error: false,
        loading: false,
      };
    case DAILY_MATCH_ERROR:
      return {
        dailyGames: [],
        error: action.payload,
        loading: false,
      };
    case TOMORROW_MATCH_LOAD:
      return {
        tomorrowGames: [],
        loading: true,
        error: false,
      };
    case TOMORROW_MATCH_SUCCESS:
      return {
        tomorrowGames: action.payload,
        error: false,
        loading: false,
      };
    case TOMORROW_MATCH_ERROR:
      return {
        tomorrowGames: [],
        error: action.payload,
        loading: false,
      };
    case MATCHES_LOAD:
      return {
        games: [],
        loading: true,
        error: false,
      };
    case MATCHES_SUCCESS:
      return {
        games: action.payload,
        error: false,
        loading: false,
      };
    case MATCHES_ERROR:
      return {
        games: [],
        error: action.payload,
        loading: false,
      };
    case LIVE_MATCH_LOAD:
      return {
        liveGames: [],
        loading: true,
        error: false,
      };
    case LIVE_MATCH_SUCCESS:
      return {
        liveGames: action.payload,
        error: false,
        loading: false,
      };
    case LIVE_MATCH_ERROR:
      return {
        liveGames: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
