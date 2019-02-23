//import React, { Component } from 'react';
import * as React from 'react';

//
import TextField from 'material-ui/TextField';
import Keyboard from 'react-material-ui-keyboard';
import { alphaNumericKeyboard } from 'react-material-ui-keyboard/layouts';
import '../css/home.css'
class HomeComponent extends React.Component {

  state = {
    open:true,
    value: '',
    userText: ''

  }

  handleInput  = (input) => {
    this.setState({value: input.target.value})

  }

  


  render() {

    
    return (
      <div>
        
      
    
      
    </div>
      
      
        
    );
  }
}

export default HomeComponent;
