import React, {Component} from 'react';
//import '../css/letterr.css';
import ResultsComponent from './ResultsComponent';
import {Link} from 'react-router-dom';

class LetterIComponent extends Component{

    state = {
        loggedIn: false,
        token: '',
        wpm: `in into intend inspect in out reel is into like
        lost loose soft liquid life live love like in into ill is also dissent forget lollipop lol look lock lick
        learn love live los cost time in into ill is isa twist this is the last is soft soccer sad face happy sad success set seven 
        section spending skills sacred server serve dad sad saas six souls roads pistols panic expensive sections lines times 
        inside spider sad section seven never tested pleasre special splended spending ` ,
        userInput:'',
        red: false,
        start: 0,
        right:[],
        wrong:[],
        score:0
    }

    componentDidMount(nextprops, nextstate){
        //his.state.wpm = '';
       let token =  localStorage.getItem('token');
       if(token == '' || token == undefined){
        window.location = "/login";
       }
        let holder = document.getElementById('i-container');
        let nxtbtn = document.getElementById('nxt-btn');
        nxtbtn.style.display = 'none';
        holder.style.display = 'none';
        let iInput = document.getElementById('i-input');
        //let mainContainer = document.getElementById('main-container');
        //mainContainer.style.height = '1000px';
       // mainContainer.style.width = '1000px';
       // mainContainer.style.background = `url(${process.env.PUBLIC_URL} /images/main-background.png)`;

        //holder.style.display = 'none';
        iInput.style.display = 'none';
        
        let wpmHoler = document.getElementById('wpmHolder');
        console.log(`This is the component mount ${iInput} `);
        
        var ml4 = {};
        ml4.opacityIn = [0,1];
        ml4.scaleIn = [0.2, 1];
        ml4.scaleOut = 3;
        ml4.durationIn = 800;
        ml4.durationOut = 600;
        ml4.delay = 500;
        
        window.anime.timeline({loop: true})
          .add({
            targets: '.ml4 .letters-1',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
          }).add({
            targets: '.ml4 .letters-1',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
          }).add({
            targets: '.ml4 .letters-2',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
          }).add({
            targets: '.ml4 .letters-2',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
          }).add({
            targets: '.ml4 .letters-3',
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
          }).add({
            targets: '.ml4 .letters-3',
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay
          }).add({
            targets: '.ml4',
            opacity: 0,
            duration: 500,
            delay: 500
          });







    }

    handleStart = (event) => {
        let holder = document.getElementById('i-container');
        let ani = document.getElementById('ani');
        ani.style.display = 'none';
        holder.style.display = 'none';
        let iInput = document.getElementById('i-input');
        let iText = document.getElementById('i-input');
        let ibtn = document.getElementById('ibtn');
        iInput.style.display = 'inline';
        ibtn.style.display = 'none';
        let len = this.state.wpm.length;
        let milli = 1000;
        let coun = 0;
        let userToken = localStorage.getItem('token');
        console.log(userToken);
        let interFunction = () => {
            coun ++;
            if(len == this.state.start || coun == 60){
                
                let nxtbtn = document.getElementById('nxt-btn');
                let iDisplay  = document.getElementById('i-container');
                iDisplay.style.display = 'inline';
                iInput.style.display = 'none';
                nxtbtn.style.display = 'inline';

                clearInterval(interFunction);
                this.setState({
                    score: this.state.userInput.length / 5
                });

                fetch(`http://localhost:4000/iresults`, {
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
            <nav className="dash-nav">
                <ul>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>

                </ul>

                   
                </nav>
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
            <button className="btn btn-success" onClick={this.handleStart} id="ibtn">Start</button>
            
            
            <center>
                <div className='row'>
                <div className='col-md-4 col-lg-4 col-xs-4'>
                    <input type='text' 
                           id="i-input" 
                           name='k'
                           onChange={this.handleChange}
                           value={this.state.userInput}
                           onKeyUpCapture={this.captureKeyStrokes}
                           className="form-control"
                    />
                </div>
                </div>
            </center>

                    <div  id="i-container">

                            <ResultsComponent 
                                    wpm={this.state.wpm}
                                    score={this.state.score}
                            />

                    </div>
                    <br/>
                    <br/>
                        <div className='row' id="next-holder">
                        <div className='col-md-4 col-lg-4 col-xs-4'>
                        <Link className='btn btn-success' to="/letteri" onClick={this.nextLetter} id='nxt-btn'>Next Letter</Link>
                    
                    </div>
                    </div>
                    </div>
        )
    }

}


export default LetterIComponent;





