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
} from './MatchTypes';
import axios from 'axios';
import {format} from 'date-fns';

const today = format(new Date(), 'yyyy-MM-dd');

export function getDailyMatchAction() {
  return async dispatch => {
    dispatch({
      type: DAILY_MATCH_LOAD,
    });
    try {
      const dailyMatches = await axios.get(
        `https://api-nba-v1.p.rapidapi.com/games/date/${today}`,
        {
          headers: {
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
            'x-rapidapi-key':
              'e76106110dmshc38ba214a75aad7p1c7bc0jsndc85d4e6964e',
          },
        },
      );
      dispatch({
        type: DAILY_MATCH_SUCCESS,
        payload: dailyMatches.data.api.games,
      });
    } catch (error) {
      dispatch({
        type: DAILY_MATCH_ERROR,
        payload: error.message,
      });
    }
  };
}

export function getMatchAction(date) {
  return async dispatch => {
    dispatch({
      type: MATCHES_LOAD,
    });
    try {
      const matches = await axios.get(
        `https://api-nba-v1.p.rapidapi.com/games/date/${date}`,
        {
          headers: {
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
            'x-rapidapi-key':
              'e76106110dmshc38ba214a75aad7p1c7bc0jsndc85d4e6964e',
          },
        },
      );
      dispatch({
        type: MATCHES_SUCCESS,
        payload: matches.data.api.games,
      });
    } catch (error) {
      dispatch({
        type: MATCHES_ERROR,
        payload: error.message,
      });
    }
  };
}

export function getLiveMatchAction() {
  return async dispatch => {
    dispatch({
      type: LIVE_MATCH_LOAD,
    });
    try {
      const liveMatches = await axios.get(
        'https://api-nba-v1.p.rapidapi.com/games/live/',
        {
          headers: {
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
            'x-rapidapi-key':
              'e76106110dmshc38ba214a75aad7p1c7bc0jsndc85d4e6964e',
          },
        },
      );
      dispatch({
        type: LIVE_MATCH_SUCCESS,
        payload: liveMatches.data.api.games,
      });
    } catch (error) {
      dispatch({
        type: LIVE_MATCH_ERROR,
        payload: error.message,
      });
    }
  };
}
