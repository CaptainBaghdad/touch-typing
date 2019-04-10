import * as React from 'react';
import {Link} from 'react-router-dom';

import '../css/home.css'

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
        headers: {
         
          'Content-Type': 'application/json'

        },
        body: JSON.stringify( {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
       })
        .then(res => res.json())
        .then(data => window.location = '/login');
        
    }
  

  render() {

    
    return (
      <center>
        <div className='lg-container'>
      <div className="login-main">
        <h1>Register</h1>

        <form onSubmit={this.handleSubmit} className="form">
        Name <input type="text" 
        value={this.state.name}
        onChange={this.handleChange} 
        id="name"
        className="form-control"
        
        />

        Email <input type="text"
        id="email" 
        value={this.state.email}
        onChange={this.handleChange} 
        className="form-control"
        
        />

        Password <input type="password"
        id="password"
        value={this.state.password}
        onChange={this.handleChange}
        className="form-control"
        
        />
        <br/>
        <br/>
        <input type="submit" className='form-control btn btn-success' />
        </form>
      
   
    </div>
    <Link to="/login" id="reg-link" className="btn btn-info">Login</Link>
    </div>
    </center>
      
    
        
    );
  }
}

export default RegisterComponent;
