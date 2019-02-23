import * as services from '../services/verificar';
import * as actionTypes from '../actionTypes/auth';

export const authTracking = (username, password) => async dispatch => {
  const result = await services.authTracking(username, password);
  dispatch({
    type: actionTypes.AUTH,
    payload: result
  });
};
