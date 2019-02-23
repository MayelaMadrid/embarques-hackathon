import { combineReducers } from 'redux';
import auth from './auth';

const ApiReducer = combineReducers({
  Auth: auth
});

export default ApiReducer;
