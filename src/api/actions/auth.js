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

export const getTransportista = () => async dispatch => {
  const result = await services.getTransportista();
  dispatch({
    type: actionTypes.TRANSPORTISTA,
    payload: result
  });
};
export const guardarEmbarque = (
  idTrailer,
  idMunicipioOrigen,
  idMunicipioDestino,
  idAgenteExportacion,
  embarqueDetalles
) => async dispatch => {
  const result = await services.guardarEmbarque(
    idTrailer,
    idMunicipioOrigen,
    idMunicipioDestino,
    idAgenteExportacion,
    embarqueDetalles
  );
  dispatch({
    type: actionTypes.GUARDAR_EMBARQUE,
    payload: result
  });
};

export const getEmbarque = s => async dispatch => {
  const result = await services.getEmbarque(s);
  dispatch({
    type: actionTypes.EMBARQUE,
    payload: result
  });
};

export const getDispositivo = () => async dispatch => {
  const result = await services.getDispositivo();
  dispatch({
    type: actionTypes.DISPOSITIVO,
    payload: result
  });
};
export const recibido = id => async dispatch => {
  const result = await services.recibido(id);
  dispatch({
    type: actionTypes.RECIBIDO,
    payload: result
  });
};
export const guardarSalida = (
  idEmbarque,
  idChofer,
  idDispositivo,
  fechaSalida
) => async dispatch => {
  const result = await services.guardarSalida(
    idEmbarque,
    idChofer,
    idDispositivo,
    fechaSalida
  );
  dispatch({
    type: actionTypes.GUADAR_SALIDA,
    payload: result
  });
};
