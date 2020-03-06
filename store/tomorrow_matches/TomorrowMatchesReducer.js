import {
  TOMORROW_MATCH_LOAD,
  TOMORROW_MATCH_SUCCESS,
  TOMORROW_MATCH_ERROR,
} from './TomorrowMatchesTypes';

const initialState = {
  tomorrowGames: [],
  loading: false,
  error: false,
};

export default function tomorrowMatchReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
