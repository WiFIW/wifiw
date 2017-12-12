import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
  apiKey: "AIzaSyACN711STvrN4BBGlyuwaFAvNYyaY7eSxE",
  authDomain: "wifiw-champions-race.firebaseapp.com",
  databaseURL: "https://wifiw-champions-race.firebaseio.com",
  projectId: "wifiw-champions-race",
  storageBucket: "wifiw-champions-race.appspot.com",
  messagingSenderId: "841565554165",
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;
