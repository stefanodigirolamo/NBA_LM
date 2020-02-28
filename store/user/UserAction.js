import {USER_LOGGED, USER_LOGGED_OUT} from './UserTypes';

export function getUserLoggedAction() {
  return {type: USER_LOGGED, payload: true};
}

export function getUserLoggedOutAction() {
  return {type: USER_LOGGED_OUT, payload: false};
}
