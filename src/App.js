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
import LetterUComponent from './components/LetterUComponent';
import LetterIComponent from './components/LetterIComponent';
import LetterRComponent from './components/LetterRComponent';
import LetterEComponent from './components/LetterEComponent'; 


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
     <Route exact path="/letteru" component={LetterUComponent} />
     <Route exact path="/lettere" component={LetterEComponent} />
     <Route exact path="/letteri" component={LetterIComponent} />
     <Route exact path="/letterr" component={LetterRComponent} />
  </Switch>
      </div>
    
        
    );
  }
}

export default App;
