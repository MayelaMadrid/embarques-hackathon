import * as auth from '../actionTypes/auth';

const initialState = {
  user: localStorage.getItem('userid')
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

    default:
      return state;
  }
}

export default Auth;
