//import React, { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
//


import '../css/home.css'
class HomeComponent extends React.Component {

  state = {
    open:true,
    value: '',
    wpm: 'jkal lilksd ersli siy ll top pill',
    green: false,
    red: false,
    correct: [],
    wrong: [],
    start: 0,
    name: '',
    email: '',
    password:''


  }

  
  

  handleChange = (e) => {
    //console.log(`this is from the change ${e.target.value}`);
   this.setState({value: e.target.value }) ;

  }


  
  


  render() {

    
    return (
      <div>
        
        <div id="section-1-r">
      <Link to="/register">Register</Link>
      <Link to="/login" >Login</Link>
        </div>


  <section id="first-home-section">
  <img src={process.env.PUBLIC_URL + '/images/typing.jpg'}  id="main-img" alt="No photo found" />
      <br/>
      <center>
      <h3>Learn touch typing</h3>
      <br/>
      <br/>

      <button className="btn btn-success">Try it</button>
      </center>
  </section>

    <section id="second-home-section">
    <center>choose one
    <ul>
      <li><Link to="/letteru"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-u.jpg'} alt="no pic" /></Link></li>
      <li><Link to="/letterr"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-r.png'} alt="mp pic" /></Link></li>
      <li><Link to="/letteri"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-i.jpg'} alt="no pic" /></Link></li>
      <li><Link to="/lettere"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-e.png'} alt="no pic" /></Link></li>
    </ul>


    </center>
    </section>



          <div id="section-1-l">
        <h4>{this.state.wpm}</h4>
        <p >{this.state.value}</p>
        
      </div>
    
      
    </div>
      
      
        
    );
  }
}

export default HomeComponent;
