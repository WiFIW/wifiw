import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';


import championshipsReducer from './championships';

export default combineReducers({
  firebase,
  championshipsReducer,
});
