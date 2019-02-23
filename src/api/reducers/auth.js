import * as actionTypes from '../actionTypes/auth';

const initialState = {
  auth: undefined
};

export default function callCenter(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.AUTH:
      newState = Object.assign({}, state, {
        auth: action.payload
      });
      return newState;
    default:
      return state;
  }
}
