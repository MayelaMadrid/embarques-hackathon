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
