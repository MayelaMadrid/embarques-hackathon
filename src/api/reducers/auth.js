import * as actionTypes from '../actionTypes/auth';

const initialState = {
  auth: undefined,
  estados: undefined,
  municipios: undefined
};

export default function callCenter(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.AUTH:
      newState = Object.assign({}, state, {
        auth: action.payload
      });
      return newState;
    case actionTypes.ESTADOS:
      newState = Object.assign({}, state, {
        estados: action.payload
      });
      return newState;
    case actionTypes.MUNICIPIOS:
      newState = Object.assign({}, state, {
        municipios: action.payload
      });
      return newState;
    default:
      return state;
  }
}
