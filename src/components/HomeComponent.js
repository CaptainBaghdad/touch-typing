//import React, { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from  '../components/FooterComponent';
import '../css/home.css'
class HomeComponent extends React.Component {

  state = {
    open:true,
    value: '',
    green: false,
    red: false,
    correct: [],
    wrong: [],
    start: 0,
    name: '',
    email: '',
    password:'',
    loggedIn: false


  }

  
  componentDidMount(){
    let ans = localStorage.getItem('name');
    console.log(`COMPONENT DID MOUNT ${ans}`);
    if(ans !== null){
    this.setState({loggedIn: true})
    }

  }

  handleChange = (e) => {
    
   this.setState({value: e.target.value }) ;

  }

render() {

     return (
      <div className="container">
        {this.state.loggedIn ? 
        (
          <div className="dash-nav">
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </div>
        )
      : 

      (
        <div className="dash-nav">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </div> 
      )
      
      }
        <div className="main-title">
        <h3>Touch Typing</h3>

        </div>
       


  <section id="first-home-section">
  <img src={process.env.PUBLIC_URL + '/images/typing.jpg'}  id="main-img" alt="No photo found" />
      <br/>
      <center>
      <h3>Learn touch typing</h3>
      <br/>
      <br/>

      </center>
  </section>

    <section id="second-home-section">
    <center>choose one
    <ul>
      <li ><Link to="/letteru" className="hvr-wobble-to-top-right"><img className="display-pic hvr-wobble-to-top-right" src={process.env.PUBLIC_URL + '/images/letter-u.jpg'} alt="no pic" /></Link></li>
      <li className="hvr-wobble-to-top-right"><Link to="/letterr"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-r.png'} alt="mp pic" /></Link></li>
      <li className="hvr-wobble-to-top-right"><Link to="/letteri"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-i.jpg'} alt="no pic" /></Link></li>
      <li className="hvr-wobble-to-top-right"><Link to="/lettere"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-e.png'} alt="no pic" /></Link></li>
    </ul>


    </center>
    </section>
        <section id="footer-holder">
        
       </section>
          
      
    </div>
      
      );
  }
}

export default HomeComponent;
