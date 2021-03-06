//import React, { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from  '../components/FooterComponent';

//


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
    //console.log(`this is from the change ${e.target.value}`);
   this.setState({value: e.target.value }) ;

  }


  


    
  
  


  render() {

     
    
      
    

    
    return (
      <div className="container">
        {this.state.loggedIn ? 
        (
          <div>
            <Link to="/logout">Logout</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        )
      : 

      (
        <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
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
      <li><Link to="/letteru"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-u.jpg'} alt="no pic" /></Link></li>
      <li><Link to="/letterr"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-r.png'} alt="mp pic" /></Link></li>
      <li><Link to="/letteri"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-i.jpg'} alt="no pic" /></Link></li>
      <li><Link to="/lettere"><img className="display-pic" src={process.env.PUBLIC_URL + '/images/letter-e.png'} alt="no pic" /></Link></li>
    </ul>


    </center>
    </section>


       <section id="footer-holder">
         <FooterComponent />
       </section>
          
      
    </div>
      
      
        
    );
  }
}

export default HomeComponent;
