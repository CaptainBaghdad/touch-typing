//import React, { Component } from 'react';
import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/home.css';
import {Link, Route, Switch} from 'react-router-dom';
//
import HomeComponent from './components/HomeComponent';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';

import DashBoardComponent from './components/DashBoardComponent';
import LogoutComponent from './containers/LogoutComponent';
import Error404 from './containers/Error404';
import Error500 from './containers/Error500';
import LetteruComponent from './components/LetterUComponent';


class App extends React.Component {
  
  render() {

    
    return (
     
      <div>
        
     
      
  <Switch>
    <Route exact path="/" component={HomeComponent} />
     <Route exact path='/login'  component={LoginComponent} />
     <Route exact path='/register'  component={RegisterComponent} />
     <Route exact path='/dashboard' component={DashBoardComponent} />
     <Route exact path="/logout" component={LogoutComponent} />
     <Route exact path="/error404" component={Error404} />
     <Route exact path="/error500" component={Error500} />
     <Route exact path="/letteru" component={LetteruComponent} />
  </Switch>
      </div>
    
        
    );
  }
}

export default App;
