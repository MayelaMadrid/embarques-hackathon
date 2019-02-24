import * as actionTypes from '../actionTypes/auth';

const initialState = {
  auth: undefined,
  estados: undefined,
  municipios: undefined,
  trailers: undefined,
  agentes: undefined,
  productos: undefined,
  transportistas: undefined,
  guardaEmbarque: undefined,
  embarques: undefined
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
    case actionTypes.TRAILERS:
      newState = Object.assign({}, state, {
        trailers: action.payload
      });
      return newState;
    case actionTypes.AGENTES:
      newState = Object.assign({}, state, {
        agentes: action.payload
      });
      return newState;
    case actionTypes.PRODUCTOS:
      newState = Object.assign({}, state, {
        productos: action.payload
      });
      return newState;
    case actionTypes.TRANSPORTISTA:
      newState = Object.assign({}, state, {
        transportistas: action.payload
      });
      return newState;
    case actionTypes.GUARDAR_EMBARQUE:
      newState = Object.assign({}, state, {
        guardaEmbarque: action.payload
      });
      return newState;
    case actionTypes.EMBARQUE:
      newState = Object.assign({}, state, {
        embarques: action.payload
      });
      return newState;
    default:
      return state;
  }
}
