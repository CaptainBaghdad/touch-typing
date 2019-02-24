//import React, { Component } from 'react';
import * as React from 'react';
import {Link} from 'react-router-dom';

//import '../css/home.css'*/

class RegisterComponent extends React.Component {

 
    state = {
      name: '',
      email: '',
      password: ''
   }

 


  


    handleChange = (event) => {
      console.log(`WTF the name value : ${event.target.value}`)
      this.setState({
       [event.target.id] : event.target.value
        
      })

    }

    handleSubmit = (event)  =>{
      
      fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify( {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }),
        headers: {
         
          'Content-Type': 'application/json'

        }

       
      })
        .then(res => res.json())
        .then(data => window.location = '/login');
        
    }
  

  render() {

    
    return (
      <div>
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit}>
        <input type="text" 
        value={this.state.name}
        onChange={this.handleChange} 
        id="name"
      
        className="form-control"
        
        />

        <input type="text"
        id="email" 
        value={this.state.email}
        onChange={this.handleChange} 
        
        className="form-control"
        
        />

        <input type="text"
        id="password"
        value={this.state.password}
        onChange={this.handleChange}
        
        className="form-control"
        
        />
        <br/>
        <br/>
        <input type="submit" className='form-control' />
        </form>
      
    <Link to="/login">Login</Link>
    </div>
      
    
        
    );
  }
}

export default RegisterComponent;
