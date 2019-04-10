import React, {Component} from 'react';
//import '../css/lettere.css';
import ResultsComponent from './ResultsComponent';
import {Link} from 'react-router-dom';

class LetterEComponent extends Component{
    state= {
        wpm:`eeeiou eerie eerie erie eew end ever endless eager easy ever elf end yes sir see there the end erie elephant ease easy end ever there the then eend
        easer eaten eight egger eject elect eater eve earn edit epic enol endless ease elf ever
        ebooks eagle ecarte earing earn easy regular connection
        earth earthling learning landing learn more haste heavy eat end yes pop`,
        userInput: '',
        start: 0,
        red: false,
        correct: [],
        wrong:[],
        score: 0,
        userWpm: ''
    }


    componentDidMount(nextprops, nextstate){
        //his.state.wpm = '';
       let token =  localStorage.getItem('token');
       if(token == '' || token == undefined){
        window.location = "/login";
       }
        let holder = document.getElementById('e-container');
        let nxtbtn = document.getElementById('nxt-btn');
        nxtbtn.style.display = 'none';
        holder.style.display = 'none';
        let eInput = document.getElementById('e-input');
        //let mainContainer = document.getElementById('main-container');
        //mainContainer.style.height = '1000px';
       // mainContainer.style.width = '1000px';
       // mainContainer.style.background = `url(${process.env.PUBLIC_URL} /images/main-background.png)`;

        //holder.style.display = 'none';
        eInput.style.display = 'none';
        
        let wpmHoler = document.getElementById('wpmHolder');
        console.log(`This is the component mount ${eInput} `);
        
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
        let holder = document.getElementById('e-container');
        let ani = document.getElementById('ani');
        ani.style.display = 'none';
        holder.style.display = 'none';
        let eInput = document.getElementById('e-input');
        let eText = document.getElementById('e-input');
        let ebtn = document.getElementById('ebtn');
        eInput.style.display = 'inline';
        ebtn.style.display = 'none';
        let len = this.state.wpm.length;
        let milli = 1000;
        let coun = 0;
        let userToken = localStorage.getItem('token');
        console.log(userToken);
        let interFunction = () => {
            coun ++;
            if(len == this.state.start || coun == 60){
                
                let nxtbtn = document.getElementById('nxt-btn');
                let eDisplay  = document.getElementById('e-container');
                eDisplay.style.display = 'inline';
                eInput.style.display = 'none';
                nxtbtn.style.display = 'inline';

                clearInterval(interFunction);
                this.setState({
                    score: this.state.userInput.length / 5
                });

                fetch(`http://localhost:4000/eresults`, {
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
            <button className="btn btn-success" onClick={this.handleStart} id="ebtn">Start</button>
            
            
            <center>
                <div className='row'>
                <div className='col-md-4 col-lg-4 col-xs-4'>
                    <input type='text' 
                           id="e-input" 
                           name='k'
                           onChange={this.handleChange}
                           value={this.state.userInput}
                           onKeyUpCapture={this.captureKeyStrokes}
                           className="form-control"
                    />
                </div>
                </div>
            </center>

                    <div  id="e-container">

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

export default LetterEComponent;

