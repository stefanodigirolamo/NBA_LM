import {PLAYOFF} from './PlayoffTypes';

const initialState = {
  teams: {},
};

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYOFF:
      return {
        teams: action.payload,
      };

    default:
      return state;
  }
}
