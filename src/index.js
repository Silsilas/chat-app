import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); 

firebase.initializeApp({
  apiKey: "AIzaSyAzdGal6uY3mKPa7vlO30EgohIFThBMGRs",
  authDomain: "chat-app-76d47.firebaseapp.com",
  databaseURL: "https://chat-app-76d47.firebaseio.com",
  projectId: "chat-app-76d47",
  storageBucket: "chat-app-76d47.appspot.com",
  messagingSenderId: "29812871965",
  appId: "1:29812871965:web:30449c9cd4111b3d6407f4",
  measurementId: "G-56J69Y80LG"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
