//import React, { Component } from 'react';
import * as React from 'react';
import logo from './logo.svg';
import './App.css';
//
import TextField from 'material-ui/TextField';
import Keyboard from 'react-material-ui-keyboard';
import { alphaNumericKeyboard } from 'react-material-ui-keyboard/layouts';

class App extends React.Component {

  state = {
    open:false,
    value: ''

  }

  handleInput  = (input) => {
    this.setState({value: input})

  }


  render() {

    
    return (
      <div>
        <h1>Press the area below this is where the keyboard is</h1>
      <Keyboard
        textField={
          <TextField
            id="text"
            value={this.state.value}
          />
        }
        automatic
        onInput={this.handleInput}
        layouts={[alphaNumericKeyboard]}
      />

      
      </div>
        
    );
  }
}

export default App;
