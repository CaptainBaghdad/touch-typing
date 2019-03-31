import React, {Component} from 'react';
//import '../css/letterr.css';
import ResultsComponent from './ResultsComponent';

class LetterIComponent extends Component{

    state = {
        loggedIn: false,
        token: '',
        wpm: 'in into intend inspect in out reel is into like' ,
        userInput:'',
        red: false,
        start: 0,
        right:[],
        wrong:[],
        score:0
    }

    componentDidMount(nextprops, nextstate){
        let toke =  localStorage.getItem('token');
        
        if(toke == '' || toke == undefined){
        window.location = "/login";
       }
        
        let holder = document.getElementById('main-background');
        let blockID = document.getElementById('i-input');
        holder.style.background = `url(${process.env.PUBLIC_URL} /images/main-background.png)`;
        holder.style.height = '1000px';
        holder.style.width = '1000px';
        blockID.style.display = 'none';
        let resultsDisplay = document.getElementById('results-display');
        resultsDisplay.style.display = 'none'  
    }

    handleChange = (event) => {
        this.setState(
            {userInput: event.target.value}, () => {console.log(this.state.wpm.length)})
    }

    handleStart = (event) =>{
        
            let milli = 1000
            let coun = 0;
            let len = this.state.wpm.length;
            let eachVal = 0.48;
            let userInputLength = this.state.userInput.length;
            let blockID = document.getElementById('i-input');
            let btnID = document.getElementById('i-start');

            blockID.style.display = 'inline';
                    btnID.style.display = 'none';
            let intervalFunction = () => {
                coun++
                
                if(this.state.start == len || coun == 20){
                    let resultsDisplay = document.getElementById('results-display');
                    resultsDisplay.style.display = 'inline';
                    let userPointsPer = 100 / userInputLength;
                    let userToken = localStorage.getItem('token');
                    let userName = localStorage.getItem('name');
                    
                    //let blockID = document.getElementById('r-input');
                    
                    
                    this.setState({
                        score: this.state.userInput.length / 5
                    })

                    blockID.style.display = 'none';
                    clearInterval(intervalFunction);
                    resultsDisplay.style.display = 'inline'

                    fetch('http://localhost:4000/iresults', {
                        method: "POST",
                        headers: {
                            'Accepts': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            token: userToken,
                            score: this.state.score

                        })
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
                   
                } 
       
            }
            setInterval(intervalFunction, milli);
            
            if(this.state.wpm.trim().charAt(this.state.start) == this.state.userInput.trim().charAt(this.state.start)){
            this.setState({
                start: this.state.start += 1
            })
            
           
        }

       
  
    }

          
 


    render(){

        return (
            <div className="container" id="main-background">
            <h1>Letter I component</h1>
            <br/>
            <h3>{this.state.wpm}</h3>
            <br/>
            <br/>
            <br/><br/>
        <h3>{this.state.userInput}</h3>

            <input type="text" 
            className={this.state.red ? 'red' : (<span>{this.state.wpm.charAt(this.state.start)}</span>) } 
            onChange={this.handleChange}
            onKeyUpCapture={this.handleInput}
            id="i-input"

            />
            <br/>
            <br/>
            <button id='i-start' className='btn btn-success' onClick={this.handleStart} >Start</button>
           
        
            <div className="row" id="results-display">
            <div className="col-md-5 col-lg-5 col-sm-5">
                <ResultsComponent 
                wrong={this.state.wrong} 
                right={this.state.right} 
                score={this.state.score}
                wpm={this.state.wpm}
                
                
                />

            </div>
            </div>
            </div>
        )
    }

}


export default LetterIComponent;





