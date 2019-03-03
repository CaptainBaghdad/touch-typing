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
        score:0,
        acc: 0

    
    
    }

    componentDidMount(nextprops, nextstate){
        let holder = document.getElementById('main-background');
        holder.style.background = `url(${process.env.PUBLIC_URL} /images/main-background.png)`;
        holder.style.height = '1000px';
        holder.style.width = '1000px';
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
            
            let intervalFunction = () => {
                coun++
                //console.log(coun);

                
                if(this.state.start == len || coun == 60){
                    let resultsDisplay = document.getElementById('results-display');
                    let blockID = document.getElementById('r-input');
                    let res = this.state.userInput.length;
                    console.log(`acc ${this.state.right.length - res}`);
                    this.setState({
                        score: this.state.userInput.length / 5,
                        acc: this.state.right.length * eachVal
                    })

                    console.log(`${this.state.right.length * eachVal} is the point per`);
                    blockID.style.display = 'none';
                    clearInterval(intervalFunction);
                    resultsDisplay.style.display = 'inline'
                    //window.location = '/results';
                    console.log(`The time has expired for the total of 60 sec ${coun}`)
    
                } 
    
                
    
            }
            setInterval(intervalFunction, milli);
        


        if(this.state.wpm.trim().charAt(this.state.start) == this.state.userInput.trim().charAt(this.state.start)){
            this.setState({
                start: this.state.start += 1,
                red:false,
                right: [... this.state.right, this.state.wpm.trim().charAt(this.state.start) ] 
            })
            


           // window.responsiveVoice.speak(this.state.userInput.charAt(this.state.start));
            console.log(`You got the right one this time ${this.state.right}`);
            //console.log(`You got the right one this time ${this.state.st}`);

        }

        else {
            //window.responsiveVoice.speak('no');
            this.setState({
                wrong: [... this.state.wrong, this.state.wpm.charAt(this.state.start)]
            })
            //console.log(`You got the right one this time ${this.state.start}`);
            console.log(`Wrong value ${this.state.wrong}`);
        }
    }

    

        
    handleStart = (event) => {
        let btnID = document.getElementById('r-start');
        btnID.style.display = 'none';
       
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
            //onKeyPress={this.handleInput}
            onKeyUpCapture={this.handleInput}
            //onKeyDownCapture={this.handleSpeak}
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
                acc={this.state.acc}
                
                
                
                />

            </div>


            </div>
            </div>
        )
    }

}


export default LetterRComponent;



/*let keyboard = [' a ',' b ',' c ',' d ',' e ',' f ',' g ',' h ',' i ',' j ',' k ',' l ',' m ',' n ',' o ',' p ',' q ',' r ',' s ',' t ',' u ',' v ',' w ',' x ',' y ',' z '];

displayBoard = (arr) => {
    for(let i =0; i < keyboard.length;i++){


    }

    <input onclick='responsiveVoice.speak("Hello World");' type='button' value='🔊 Play' />


}*/

