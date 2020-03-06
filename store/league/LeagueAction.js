import {LEAGUE_LOAD, LEAGUE_SUCCESS, LEAGUE_ERROR} from './LeagueTypes';
import axios from 'axios';

export function getLeagueAction() {
  return async dispatch => {
    dispatch({
      type: LEAGUE_LOAD,
    });
    try {
      const league = await axios.get(
        'http://data.nba.net/data/10s/prod/v1/current/standings_conference.json',
      );
      dispatch({
        type: LEAGUE_SUCCESS,
        payload: league.data.league.standard.conference,
      });
    } catch (error) {
      dispatch({
        type: LEAGUE_ERROR,
        payload: error.message,
      });
    }
  };
}
