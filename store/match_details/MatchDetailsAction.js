import {
  MATCH_DETAILS_LOAD,
  MATCH_DETAILS_SUCCESS,
  MATCH_DETAILS_ERROR,
} from './MatcheDetailsTypes';
import axios from 'axios';

export function getMatchDetailsAction(id) {
  return async dispatch => {
    dispatch({
      type: MATCH_DETAILS_LOAD,
    });
    try {
      const matchDetails = await axios.get(
        `https://api-nba-v1.p.rapidapi.com/gameDetails/${id}`,
        {
          headers: {
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
            'x-rapidapi-key':
              'e76106110dmshc38ba214a75aad7p1c7bc0jsndc85d4e6964e',
          },
        },
      );
      dispatch({
        type: MATCH_DETAILS_SUCCESS,
        payload: matchDetails.data.api.game,
      });
    } catch (error) {
      dispatch({
        type: MATCH_DETAILS_ERROR,
        payload: error.message,
      });
    }
  };
}
