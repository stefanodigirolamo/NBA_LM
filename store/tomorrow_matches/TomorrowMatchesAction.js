import {
  TOMORROW_MATCH_LOAD,
  TOMORROW_MATCH_SUCCESS,
  TOMORROW_MATCH_ERROR,
} from './TomorrowMatchesTypes';
import axios from 'axios';
import {format, startOfTomorrow} from 'date-fns';

const tomorrow = format(startOfTomorrow(), 'yyyy-MM-dd');

export function getTomorrowMatchAction() {
  return async dispatch => {
    dispatch({
      type: TOMORROW_MATCH_LOAD,
    });
    try {
      const tomorrowMatches = await axios.get(
        `https://api-nba-v1.p.rapidapi.com/games/date/${tomorrow}`,
        {
          headers: {
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
            'x-rapidapi-key':
              'e76106110dmshc38ba214a75aad7p1c7bc0jsndc85d4e6964e',
          },
        },
      );
      dispatch({
        type: TOMORROW_MATCH_SUCCESS,
        payload: tomorrowMatches.data.api.games,
      });
    } catch (error) {
      dispatch({
        type: TOMORROW_MATCH_ERROR,
        payload: error.message,
      });
    }
  };
}
