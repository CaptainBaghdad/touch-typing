//import React, { Component } from 'react';
import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/home.css';
//
import HomeComponent from './components/HomeComponent';
import TextField from 'material-ui/TextField';
import Keyboard from 'react-material-ui-keyboard';
import { alphaNumericKeyboard } from 'react-material-ui-keyboard/layouts';

class App extends React.Component {
  state = {
    open:true,
    value: '',
    wpm: 'jkal lilksd ersli siy ll top pill',
    green: false,
    red: false,
    correct: [],
    wrong: [],
    start: 0

  }

  
  captureKeyStrokes = (event) => {
    //this.setState({value: event.target.value})
    let len = this.state.wpm.length;
    let text = this.state.wpm;
    let input  = event.target.value;
    let text_split = text.split(input);
    //let wpm_split = this.state.wpm.split(input); 
    //let input_split = input.match(/\S+\s*/g);
    //console.log(` this is split : ${wpm_split.length} this is the data ${wpm_split}`);

    
    //console.log(` charAt ${text.charAt(this.state.start)}`);  
    
    let str = '';
    let reg  =  new RegExp(text) 


    /*if(event.target.key === text.charAt(this.state.start)){
      this.setState({start: this.state.start +=1})
       
      //console.log(`this is the word split: ${text_split.keyCode}`);
      console.log(`this is the event value: ${event.target.value}`);
      console.log(`console logging the start index value ${this.state.start}`);
      
   
    }

    else{
    
    console.log(`Wrong : ${this.state.start}`);
    
    }*/


    for(let i= 0; i < text.length;i++){
        
      if(event.target.value[i] == text.charAt(this.state.start)){
        this.setState({start: this.state.start +=1})
        return (
          <div>
            <p className={this.state.green}>{this.state.value}</p>
          </div>
        );
        //console.log(`this is the word split: ${wpm_split[i].keyCode}`);
        //console.log(`this is the event value: ${event.target.value.keyCode}`);
      
     
      }

      else{
      
      console.log(`Wrong : ${this.state.start}`);
      
      }




    }

    
      
    
    

   

  }

  handleChange = (e) => {
    //console.log(`this is from the change ${e.target.value}`);
   this.setState({value: e.target.value }) ;

  }

  render() {

    
    return (
      <div>
        <h4>{this.state.wpm}</h4>
        <p className={this.state.green}>{this.state.value}</p>
       <textarea 
      id="k" 
      name='k'
      onChange={this.handleChange}
      value={this.state.value}
      onKeyUp={this.captureKeyStrokes}
      
      
      
      />
    
      
      </div>
        
    );
  }
}

export default App;
