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

export const getTrailers = () => async dispatch => {
  const result = await services.getTrailers();
  dispatch({
    type: actionTypes.TRAILERS,
    payload: result
  });
}
