//import React, { Component } from 'react';
import * as React from 'react';

//
/*import TextField from 'material-ui/TextField';
import Keyboard from 'react-material-ui-keyboard';
import { alphaNumericKeyboard } from 'react-material-ui-keyboard/layouts';
import '../css/home.css'*/

class LoginComponent extends React.Component {

  state = {
    open:true,
    value: '',
    userText: '',
    name: '',
    email: '',
    password:''
  }


  


    handleChange = (event) => {
      this.setState({
       
        email: event.target.email,
        password: event.target.password
      })

    }

    handleSubmit = (event) => {
      fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Accepts': 'application/json',
          'Content-Type': 'application/json'

        },

        body: JSON.stringify({
          
          email: this.state.email,
          pasword: this.state.password
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(`Post server response ${data.name}`);
        })
    }
  

  render() {

    
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
       

        <input type="text" 
        onChange={this.handleChange} 
        name="email"
        id="email"
        className='form-control'
        value={this.state.email}
        />

        <input type="text"
        onChange={this.handleChange}
        name='password'
        id="password"
        className="form-control"
        value={this.state.password}
        />
        <br/>
        <br/>
        <input type="submit" className='form-control' />
        </form>
      
    
    </div>
      
    
        
    );
  }
}

export default LoginComponent;
