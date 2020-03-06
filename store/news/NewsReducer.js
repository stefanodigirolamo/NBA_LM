import {
  NEWS_LOAD,
  NEWS_SUCCESS,
  NEWS_ERROR,
  TEAM_NEWS_LOAD,
  TEAM_NEWS_SUCCESS,
  TEAM_NEWS_ERROR,
} from './NewsTypes';

const initialState = {
  news: [],
  teamNews: [],
  loading: false,
  error: false,
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_LOAD:
      return {
        news: [],
        loading: true,
        error: false,
      };
    case NEWS_SUCCESS:
      return {
        news: action.payload,
        error: false,
        loading: false,
      };
    case NEWS_ERROR:
      return {
        news: [],
        error: action.payload,
        loading: false,
      };
    case TEAM_NEWS_LOAD:
      return {
        teamNews: [],
        loading: true,
        error: false,
      };
    case TEAM_NEWS_SUCCESS:
      return {
        teamNews: action.payload,
        error: false,
        loading: false,
      };
    case TEAM_NEWS_ERROR:
      return {
        teamNews: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
