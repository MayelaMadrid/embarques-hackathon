import * as services from '../services/prospecto';
import * as actionTypes from '../actionTypes/prospecto';

export const getProspectsById = id => async dispatch => {
  const result = await services.getProspectsById(id);
  dispatch({
    type: actionTypes.GET_PROSPECTS_BY_ID,
    payload: result
  });
};

export const getProspectsCompany = id => async dispatch => {
  const result = await services.getProspectsCompany(id);
  dispatch({
    type: actionTypes.GET_PROSPECTS_COMPANY,
    payload: result
  });
};

export const getAllProspects = () => async dispatch => {
  const result = await services.getAllProspects();
  dispatch({
    type: actionTypes.GET_PROSPECTS_ALL,
    payload: result
  });
};

export const getProspectsPromoter = id => async dispatch => {
  const result = await services.getProspectsPromoter(id);
  dispatch({
    type: actionTypes.GET_PROSPECTS_PROMOTER,
    payload: result
  });
};

export const getDetalleProspecto = id => async dispatch => {
  const result = await services.getDetalleProspecto(id);
  dispatch({
    type: actionTypes.GET_DETALLE_PROSPECTO,
    payload: result
  });
};
