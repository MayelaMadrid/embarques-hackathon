import * as actionTypes from '../actionTypes/prospecto';

const initialState = {
  getProspectsById: undefined,
  getProspectsAll: undefined,
  getProspectsCompany: undefined,
  getProspectsPromoter: undefined,
  getDetalleProspecto: undefined
};

export default function prospecto(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.GET_PROSPECTS_BY_ID:
      newState = Object.assign({}, state, {
        getProspectsById: action.payload
      });
      return newState;
    case actionTypes.GET_PROSPECTS_ALL:
      newState = Object.assign({}, state, {
        getProspectsAll: action.payload
      });
      return newState;
    case actionTypes.GET_PROSPECTS_COMPANY:
      newState = Object.assign({}, state, {
        getProspectsCompany: action.payload
      });
      return newState;
    case actionTypes.GET_PROSPECTS_PROMOTER:
      newState = Object.assign({}, state, {
        getProspectsPromoter: action.payload
      });
      return newState;
    case actionTypes.GET_DETALLE_PROSPECTO:
      newState = Object.assign({}, state, {
        getDetalleProspecto: action.payload
      });
      return newState;
    default:
      return state;
  }
}
