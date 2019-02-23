//import React, { Component } from 'react';
//import * as React from 'react';

//
/*import TextField from 'material-ui/TextField';
import Keyboard from 'react-material-ui-keyboard';
import { alphaNumericKeyboard } from 'react-material-ui-keyboard/layouts';
import '../css/home.css'*/

class RegisterComponent extends React.Component {

  state = {
    open:true,
    value: '',
    userText: ''

  }

  handleInput  = (input) => {
    this.setState({value: input})

  }

  captureKeyStrokes(event){
    let val = event.key;
    console.log(val);

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
    <div id="k" 
      tabIndex="0"
      onKeyDown={this.captureKeyStrokes}
    >
    
    </div>
      
      </div>
        
    );
  }
}

export default RegisterComponent;
