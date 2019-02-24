import * as auth from '../actionTypes/auth';

export const setUser = userid => {
  localStorage.setItem('userid', userid);
  return {
    type: auth.SET_USER,
    payload: userid
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: auth.SET_USER,
    payload: undefined
  };
};

export const vistasHome = vista => {
  return {
    type: auth.VISTAS_HOME,
    payload: vista
  };
};
export const ORIGEN = vista => {
  return {
    type: auth.ORIGEN,
    payload: vista
  };
};
export const DESTINO = vista => {
  return {
    type: auth.DESTINO,
    payload: vista
  };
};
export const idTrailer = id => {
  return {
    type: auth.IDTRAILER,
    payload: id
  };
};
export const idMunOrigen = id => {
  return {
    type: auth.IDMUNORIGEN,
    payload: id
  };
};
export const idMunDestino = id => {
  return {
    type: auth.IDMUNDESTINO,
    payload: id
  };
};
export const idAgente = id => {
  return {
    type: auth.IDAGENTE,
    payload: id
  };
};
export const embarqueDetalles = detalle => {
  return {
    type: auth.EMBARQUE_DETALLES,
    payload: detalle
  };
};
