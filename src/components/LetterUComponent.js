import React, {Component} from 'react';
import '../css/letteru.css';
import ResultsComponent from './ResultsComponent';

class LetterUComponent extends Component{
    state= {
        wpm:'uuuouuooie uiuuiiu een ternn thnd ooouu uuuuii riiiiu uuueuusu iuuuousuuuiuuull iioootuuuuu yuuupuuu ruuufuuujuuulkun uuu tttereuuuu',
        userInput: '',
        start: 0,
        red: false,
        correct: [],
        wrong:[],
        score: 0
    }


    componentDidMount(nextprops, nextstate){
        let holder = document.getElementById('u-container');
        let uInput = document.getElementById('u-input');
        let mainContainer = document.getElementById('main-container');
        mainContainer.style.height = '1000px';
        mainContainer.style.width = '1000px';
        mainContainer.style.background = `url(${process.env.PUBLIC_URL} /images/main-background.png)`;

        holder.style.display = 'none';
        uInput.style.display = 'none';
        let wpmHoler = document.getElementById('wpmHolder');
        console.log(`This is the component mount ${uInput} `);
        
    }
    
    handleStart = (event) => {
        let holder = document.getElementById('u-container');
        let uInput = document.getElementById('u-input');
        let uText = document.getElementById('u-input');
        let ubtn = document.getElementById('ubtn');
        uInput.style.display = 'inline';
        ubtn.style.display = 'none';
        let len = this.state.wpm.length;
        let milli = 1000;
        let coun = 0;
        let userToken = localStorage.getItem('token');
        console.log(userToken);
        let interFunction = () => {
            coun ++;
            if(len == this.state.start || coun == 20){
                
                let uDisplay  = document.getElementById('u-container');
                uDisplay.style.display = 'inline';
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
           
            <button className="btn btn-success" onClick={this.handleStart} id="ubtn">Start</button>
            <br/>
            <br/>
            
            <center>
                    <input type='text' 
                           id="u-input" 
                           name='k'
                           onChange={this.handleChange}
                           value={this.state.userInput}
                           onKeyPress={this.captureKeyStrokes}
                           className="form-control"
                    />
     
            </center>

                    <div  id="u-container">

                            <ResultsComponent 
                                    wpm={this.state.wpm}
                                    score={this.state.score}
                            />

                    </div>
                    </div>
        )
    }


}

export default LetterUComponent;

