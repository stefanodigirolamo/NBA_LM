import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import ReducersRouter from './CombineReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = createStore(ReducersRouter, composeEnhancers(middleWareEnhancer));

export default store;
