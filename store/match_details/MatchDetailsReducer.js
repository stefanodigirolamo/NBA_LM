import {
  MATCH_DETAILS_LOAD,
  MATCH_DETAILS_SUCCESS,
  MATCH_DETAILS_ERROR,
} from './MatcheDetailsTypes';

const initialState = {
  matchDetails: [],
  loading: false,
  error: false,
};

export default function matchDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case MATCH_DETAILS_LOAD:
      return {
        matchDetails: [],
        loading: true,
        error: false,
      };
    case MATCH_DETAILS_SUCCESS:
      return {
        matchDetails: action.payload,
        error: false,
        loading: false,
      };
    case MATCH_DETAILS_ERROR:
      return {
        matchDetails: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
