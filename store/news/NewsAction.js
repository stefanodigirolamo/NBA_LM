import {
  NEWS_LOAD,
  NEWS_SUCCESS,
  NEWS_ERROR,
  TEAM_NEWS_LOAD,
  TEAM_NEWS_SUCCESS,
  TEAM_NEWS_ERROR,
} from './NewsTypes';
import axios from 'axios';
import {format} from 'date-fns';

const today = format(new Date(), 'yyyy-MM-dd');

export function getNewsAction() {
  return async dispatch => {
    dispatch({
      type: NEWS_LOAD,
    });
    try {
      const news = await axios.get(
        `http://newsapi.org/v2/everything?q=NBA&apiKey=1e51d8a5c87d48a89166f40fae05c13c&from=${today}`,
      );
      dispatch({
        type: NEWS_SUCCESS,
        payload: news.data.articles,
      });
    } catch (error) {
      dispatch({
        type: NEWS_ERROR,
        payload: error.message,
      });
    }
  };
}

export function getTeamNewsAction(teamName) {
  return async dispatch => {
    dispatch({
      type: TEAM_NEWS_LOAD,
    });
    try {
      const teamNews = await axios.get(
        `http://newsapi.org/v2/everything?q=${
          teamName.length > 0 ? teamName : 'NBA'
        }&apiKey=1e51d8a5c87d48a89166f40fae05c13c&from=${today}`,
      );
      dispatch({
        type: TEAM_NEWS_SUCCESS,
        payload: teamNews.data.articles,
      });
    } catch (error) {
      dispatch({
        type: TEAM_NEWS_ERROR,
        payload: error.message,
      });
    }
  };
}
