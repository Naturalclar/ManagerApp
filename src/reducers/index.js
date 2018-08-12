// index.js
// Combines all the reducers

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
});
