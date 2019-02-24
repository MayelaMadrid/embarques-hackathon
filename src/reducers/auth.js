import * as auth from '../actionTypes/auth';

const initialState = {
  user: localStorage.getItem('userid'),
  vistas: undefined,
  origen: { latitud: 33.33, longitud: 33.33 },
  destino: { latitud: 33.33, longitud: 33.33 },
  idTrailer: undefined,
  idOrigen: undefined,
  idDestino: undefined,
  idAgente: undefined,
  embarqueDetalles: undefined
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
    case auth.ORIGEN:
      return Object.assign({}, state, {
        origen: action.payload
      });
    case auth.DESTINO:
      return Object.assign({}, state, {
        destino: action.payload
      });
    case auth.IDTRAILER:
      return Object.assign({}, state, {
        idTrailer: action.payload
      });
    case auth.IDMUNORIGEN:
      return Object.assign({}, state, {
        idOrigen: action.payload
      });
    case auth.IDMUNDESTINO:
      return Object.assign({}, state, {
        idDestino: action.payload
      });
    case auth.IDAGENTE:
      return Object.assign({}, state, {
        idAgente: action.payload
      });
    case auth.EMBARQUE_DETALLES:
      return Object.assign({}, state, {
        embarqueDetalles: action.payload
      });
    default:
      return state;
  }
}

export default Auth;
