import React, {Component} from 'react';
import '../css/letterr.css';
import ResultsComponent from './ResultsComponent';

class LetterRComponent extends Component{

    state = {
        loggedIn: false,
        token: '',
        wpm: 'red der reee eedg iloous that is tehat last ir read more dann rtuous trrwn opppsrnen ssitpsg srtt errre rrreee rorpworormdtewreee ghjiulsljrrterrqrqrm bbr ioieess rreee popoppeeerr pwpwoerrrnnrt sttteetrrr' ,
        userInput:'',
        red: false,
        start: 0,
        right:[],
        wrong:[],
        score:0
    }

    componentDidMount(nextprops, nextstate){
        let holder = document.getElementById('main-background');
        let blockID = document.getElementById('r-input');
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

    handleInput = (event) =>{
        
            let milli = 1000
            let coun = 0;
            let len = this.state.wpm.length;
            let eachVal = 0.48;
            let userInputLength = this.state.userInput.length;
            let intervalFunction = () => {
                coun++
                
                if(this.state.start == len || coun == 60){
                    let resultsDisplay = document.getElementById('results-display');
                    let blockID = document.getElementById('r-input');
                    let userPointsPer = 100 / userInputLength;
                    
                    this.setState({
                        score: this.state.userInput.length / 5
                    })

                    blockID.style.display = 'none';
                    clearInterval(intervalFunction);
                    resultsDisplay.style.display = 'inline'
                   
                } 
       
            }
            setInterval(intervalFunction, milli);
            
            if(this.state.wpm.trim().charAt(this.state.start) == this.state.userInput.trim().charAt(this.state.start)){
            this.setState({
                start: this.state.start += 1,
                red:false,
                right: [... this.state.right, this.state.wpm.trim().charAt(this.state.start) ] 
            })
            
           
        }

        else {
            
            this.setState({
                wrong: [... this.state.wrong, this.state.wpm.charAt(this.state.start)]
            })
           
            
        }
  
    }

          
    handleStart = (event) => {
        let btnID = document.getElementById('r-start');
        let blockID = document.getElementById('r-input');
        blockID.style.display = 'inline';
        btnID.style.display = 'none';
        let c = 0;
        let milli = 1000;
        
    }


    render(){

        return (
            <div className="container" id="main-background">
            <h1>Letter R component</h1>
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
            id="r-input"

            />
            <br/>
            <br/>
            <button id='r-start' className='btn btn-success' onClick={this.handleStart} >Press here</button>
           
        
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


export default LetterRComponent;





