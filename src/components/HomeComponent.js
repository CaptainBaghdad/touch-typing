//import React, { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
//


import '../css/home.css'
class HomeComponent extends React.Component {

  
  


  render() {

    
    return (
      <div>
        
        <div id="section-1-r">
      <Link to="/register">Register</Link>
      <Link to="/login" >Login</Link>
        </div>
    
      
    </div>
      
      
        
    );
  }
}

export default HomeComponent;
