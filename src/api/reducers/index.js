import { combineReducers } from 'redux';
import auth from './auth';
import prospect from './prospecto';

const ApiReducer = combineReducers({
  Auth: auth,
  Prospecto: prospect
});

export default ApiReducer;
