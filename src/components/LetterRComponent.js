import React, {Component} from 'react';
import '../css/letteru.css';
import ResultsComponent from './ResultsComponent';
import {Link} from 'react-router-dom';

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
        score:0,
        userWpm:''
    }

    componentDidMount(nextprops, nextstate){
        //his.state.wpm = '';
       let token =  localStorage.getItem('token');
       if(token == '' || token == undefined){
        window.location = "/login";
       }
        let holder = document.getElementById('r-container');
        holder.style.display = 'none';
        
        let nxtbtn = document.getElementById('nxt-btn');
        nxtbtn.style.display = 'none';
        let rInput = document.getElementById('r-input');
        //let mainContainer = document.getElementById('main-container');
        //mainContainer.style.height = '1000px';
       // mainContainer.style.width = '1000px';
       // mainContainer.style.background = `url(${process.env.PUBLIC_URL} /images/main-background.png)`;

        //holder.style.display = 'none';
        rInput.style.display = 'none';
        
        let wpmHoler = document.getElementById('wpmHolder');
        console.log(`This is the component mount ${rInput} `);
        
    }
    
    handleStart = (event) => {
        let holder = document.getElementById('r-container');
        holder.style.display = 'none';
        let ani = document.getElementById('ani');
        ani.style.display = 'none';

        let rInput = document.getElementById('r-input');
        let rText = document.getElementById('r-input');
        let rbtn = document.getElementById('rbtn');
        
        rInput.style.display = 'inline';
        rbtn.style.display = 'none';
        let len = this.state.wpm.length;
        let milli = 1000;
        let coun = 0;
        let userToken = localStorage.getItem('token');
        console.log(userToken);
        let interFunction = () => {
            coun ++;
            if(len == this.state.start || coun == 20){
                
                let rDisplay  = document.getElementById('r-container');
                rInput.style.display = 'none';
                rDisplay.style.display = 'inline';
                let nxtbtn = document.getElementById('nxt-btn');
        nxtbtn.style.display = 'inline';
                clearInterval(interFunction);
                this.setState({
                    score: this.state.userInput.length / 5
                });

                fetch(`http://localhost:4000/rresults`, {
                    method: 'POST',
                    headers: {
                        'Accepts': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: userToken,
                        score: this.state.score

                    })
                })
                .then((res) => res.json())
                .then(data => {
                    console.log(data)
                })

            }


           
        };

               
                setInterval(interFunction,milli);

                if(this.state.userInput.charAt(this.state.start) == this.state.wpm.charAt(this.state.start)){
                    this.setState({
                        start: this.state.start +=1
                    });

                }
            }
            

            captureKeyStrokes = (event) =>{
               
               if(this.state.userInput.charAt(this.state.start) == this.state.wpm.charAt(this.state.start)){
                    
                    this.setState({
                        start: this.state.start +=1,
                        userWpm: this.state.wpm.slice(this.state.start)

                    })

                }
            }

    
handleChange = (event) => {
        
        this.setState({
            userInput: event.target.value
        });
}

          
 


    render(){

        return (
            <div className="container" id="main-container">
            <div className='row'>
            <div className='col-md-8 col-lg-8 col-xs-8'>
            <h1 class="ml4" id="ani">
                <span class="letters letters-1">Press</span>
                <span class="letters letters-2">Start</span>
                <span class="letters letters-3">Button!</span>
            </h1>

            <br/>
            <br/>
            <br/>

           
            <br/>
            <br/>
            <h4>{this.state.userInput == '' ? this.state.wpm : this.state.userWpm}</h4>
            
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <button className="btn btn-success" onClick={this.handleStart} id="rbtn">Start</button>
            
            
            <center>
                <div className='row'>
                <div className='col-md-4 col-lg-4 col-xs-4'>
                    <input type='text' 
                           id="r-input" 
                           name='k'
                           onChange={this.handleChange}
                           value={this.state.userInput}
                           onKeyUpCapture={this.captureKeyStrokes}
                           className="form-control"
                    />
                </div>
                </div>
            </center>

                    <div  id="r-container">

                            <ResultsComponent 
                                    wpm={this.state.wpm}
                                    score={this.state.score}
                            />

                    </div>
                    <br/>
                    <br/>
                        <div className='row' id="next-holder">
                        <div className='col-md-4 col-lg-4 col-xs-4'>
                        <Link className='btn btn-success' to="/lettere" onClick={this.nextLetter} id='nxt-btn'>Next Letter</Link>
                    
                    </div>
                    </div>
                    </div>
        )
    }

}


export default LetterRComponent;





