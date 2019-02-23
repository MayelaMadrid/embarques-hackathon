import { combineReducers } from 'redux';
import Auth from './auth';
import { ApiReducer } from '../api';

const rootReducer = combineReducers({
  Api: ApiReducer,
  Auth: Auth
});

export default rootReducer;
