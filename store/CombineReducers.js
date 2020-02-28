import {combineReducers} from 'redux';
import userReducer from './user/UserReducer';
import matchReducer from './match/MatchReducer';

const ReducersRouter = combineReducers({
  user: userReducer,
  dailyMatches: matchReducer,
});

export default ReducersRouter;
