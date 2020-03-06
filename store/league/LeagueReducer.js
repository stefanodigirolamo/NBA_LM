import {LEAGUE_LOAD, LEAGUE_SUCCESS, LEAGUE_ERROR} from './LeagueTypes';

const initialState = {
  league: [],
  loading: false,
  error: false,
};

export default function leagueReducer(state = initialState, action) {
  switch (action.type) {
    case LEAGUE_LOAD:
      return {
        league: [],
        loading: true,
        error: false,
      };
    case LEAGUE_SUCCESS:
      return {
        league: action.payload,
        error: false,
        loading: false,
      };
    case LEAGUE_ERROR:
      return {
        league: [],
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
