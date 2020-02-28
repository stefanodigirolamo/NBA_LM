import {USER_LOGGED, USER_LOGGED_OUT} from './UserTypes';

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED:
      return {
        loggedIn: action.payload,
      };
    case USER_LOGGED_OUT:
      return {
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
