//import React, { Component } from 'react';
import * as React from 'react';
import {Link}  from 'react-router-dom';

import '../css/home.css'

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
        event.preventDefault();
      this.setState({
       
        [event.target.id]: event.target.value
         
      })

    }

    handleSubmit = (event) => {
        
      fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          
          'Content-Type': 'application/json'

        },

        body: JSON.stringify({
          
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(res => res.json())
        .then(data => {
            

            
                
                localStorage.setItem('token', data.token);
                localStorage.setItem('name', data.data.name);
                    window.location = '/dashboard';
                
            
         })
    }
  

  render() {

    
    return (
      <center>
        <div className='lg-container'>
      <div className='login-main'>
      
      
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit} className='form' >
       

       Email <input type="text" 
        onChange={this.handleChange} 
        name="email"
        id="email"
        className='form-control'
        value={this.state.email}
        />

        Password <input type="text"
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
    <Link to="/register" id="reg-link">Sign up</Link>
    </div>
    
    </center>
      
    
        
    );
  }
}

export default LoginComponent;
