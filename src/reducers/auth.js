import * as auth from '../actionTypes/auth';

const initialState = {
  user: localStorage.getItem('userid'),
  vistas: undefined
};

function Auth(state = initialState, action) {
  switch (action.type) {
    case auth.SET_USER:
      return Object.assign({}, state, {
        user: action.payload
      });

    case auth.LOGOUT:
      return Object.assign({}, state, {
        token: undefined
      });
    case auth.VISTAS_HOME:
      return Object.assign({}, state, {
        vistas: action.payload
      });
    default:
      return state;
  }
}

export default Auth;
