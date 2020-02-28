import {
  DAILY_MATCH_LOAD,
  DAILY_MATCH_SUCCESS,
  DAILY_MATCH_ERROR,
} from './MatchTypes';

const initialState = {
  dailyGames: [],
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
    default:
      return state;
  }
}
