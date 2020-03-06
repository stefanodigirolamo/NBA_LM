import {combineReducers} from 'redux';
import userReducer from './user/UserReducer';
import matchReducer from './match/MatchReducer';
import leagueReducer from './league/LeagueReducer';
import playoffReducer from './playoff/PlayoffReducer';
import newsReducer from './news/NewsReducer';
import tomorrowMatcheReducer from './tomorrow_matches/TomorrowMatchesReducer';
import matchDetailsReducer from './match_details/MatchDetailsReducer';

const ReducersRouter = combineReducers({
  user: userReducer,
  matches: matchReducer,
  league: leagueReducer,
  playoff: playoffReducer,
  news: newsReducer,
  tomorrow: tomorrowMatcheReducer,
  matchDetails: matchDetailsReducer,
});

export default ReducersRouter;
