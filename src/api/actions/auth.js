import * as services from '../services/verificar';
import * as actionTypes from '../actionTypes/auth';

export const authTracking = (username, password) => async dispatch => {
  const result = await services.authTracking(username, password);
  dispatch({
    type: actionTypes.AUTH,
    payload: result
  });
};

export const getEstados = () => async dispatch => {
  const result = await services.getEstados();
  dispatch({
    type: actionTypes.ESTADOS,
    payload: result
  });
};

export const getMunicipios = idEstado => async dispatch => {
  const result = await services.getMunicipios(idEstado);
  dispatch({
    type: actionTypes.MUNICIPIOS,
    payload: result
  });
};

export const getTrailers = idEstado => async dispatch => {
  const result = await services.getTrailers(idEstado);
  dispatch({
    type: actionTypes.TRAILERS,
    payload: result
  });
};
export const getAgentesExportacion = () => async dispatch => {
  const result = await services.getAgentesExportacion();
  dispatch({
    type: actionTypes.AGENTES,
    payload: result
  });
};
export const getProductos = () => async dispatch => {
  const result = await services.getProductos();
  dispatch({
    type: actionTypes.PRODUCTOS,
    payload: result
  });
};
