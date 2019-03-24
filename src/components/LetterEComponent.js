import React, {Component} from 'react';
//import '../css/lettere.css';
import ResultsComponent from './ResultsComponent';

class LetterEComponent extends Component{
    state= {
        wpm:'eeeiouoeeeeecee eerie eerie erie eew end ever endless eager easy ever elf end yes sir see there the end erie elephant ease easy end ever there the then eend',
        userInput: '',
        start: 0,
        red: false,
        correct: [],
        wrong:[],
        score: 0
    }


    componentDidMount(nextprops, nextstate){
        let holder = document.getElementById('e-container');
        let eInput = document.getElementById('e-input');
        let mainContainer = document.getElementById('main-container');
        mainContainer.style.height = '1000px';
        mainContainer.style.width = '1000px';
        mainContainer.style.background = `url(${process.env.PUBLIC_URL} /images/main-background.png)`;

        holder.style.display = 'none';
        eInput.style.display = 'none';
        let wpmHoler = document.getElementById('wpmHolder');
        console.log(`This is the component mount ${eInput} `);
        
    }
    
    handleStart = (event) => {
        let holder = document.getElementById('e-container');
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
            if(len == this.state.start || coun == 20){
                
                let eDisplay  = document.getElementById('e-container');
                eDisplay.style.display = 'inline';
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
                        right: [... this.state.right, this.state.wpm.charAt(this.state.start)]

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
            <h4  id="wpmHolder">{this.state.wpm}</h4>
            <br/>
           
            <button className="btn btn-success" onClick={this.handleStart} id="ebtn">Start</button>
            <br/>
            <br/>
            
            <center>
                    <input type='text' 
                           id="e-input" 
                           name='k'
                           onChange={this.handleChange}
                           value={this.state.userInput}
                           onKeyPress={this.captureKeyStrokes}
                           className="form-control"
                    />
     
            </center>

                    <div  id="e-container">

                            <ResultsComponent 
                                    wpm={this.state.wpm}
                                    score={this.state.score}
                            />

                    </div>
                    </div>
        )
    }


}

export default LetterEComponent;

