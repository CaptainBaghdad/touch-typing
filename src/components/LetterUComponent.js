import React, {Component} from 'react';
import '../css/letteru.css';

class LetterUComponent extends Component{
    state= {
        wpm:'uuuouuooie uiuuiiu een ternn thnd ooouu uuu',
        userInput: '',
        start: 0,
        red: false,
        correct: [],
        wrong:[]

    }

    captureKeyStrokes = (event) =>{
        
        let str = this.state.wpm.trim();
        let strSplit = str.split('');
        let input = this.state.userInput;
        let inputSplit = input.split('');
        //let s = this.state.start;
        console.log(`this is USER INPUT  ${inputSplit[this.state.start]}`);

        if(strSplit[this.state.start] === inputSplit[this.state.start]){
            console.log(`this is the user input ${strSplit[this.state.start]}`);
            
            this.setState({
                start: this.state.start +=1,
                correct: [...this.state.correct, strSplit[this.state.start]],
               
                
                userInput: event.target.value
            });
            console.log(this.state.correct);
            //console.log('Correct' + ' ' + this.state.start + "," + " " + strSplit[this.state.start] + ", "  + " " + input.charAt(this.state.start));
        }
            else{
                this.setState({
                    red: true,
                    wrong: [...this.state.wrong, strSplit[this.state.start]],


                    
                    start: this.state.start

                })
                console.log('Wrong' + ' ' + this.state.start + " " + strSplit[this.state.start] );
                console.log('Wrong' + ' ' + this.state.start + " " + this.state.userInput.charAt(this.state.start) );
            }

            if(this.state.start == this.state.wpm.length){
                console.log('Finished');

            }


    }

    handleStart = (event) => {
        //prompt(`Start is started`);
        let len = this.state.wpm.length;
        let milli = 60000;
        let interFunction = () => {
            if(len == this.state.start){
                clearInterval(interFunction);
                window.location = '/letterr'

            }

            else{
                let userLen = this.state.userInput.length;
                let wpmLen = this.state.wpm.length;
                let userWordsPerMinute = userLen / 5;
                //alert(`This is the return from the setInterval ${userWordsPerMinute}`);
                console.log('UserInput : ' + " " + this.state.userInput);
                clearInterval(interFunction);
            }

        };

                //alert('You have finished before a min');
                setInterval(interFunction,milli);
                
            }
            

    
handleChange = (event) => {
        
        this.setState({
            userInput: event.target.value
        });
}






    render(){
        //const wpm = ' ';
        return (
            <div className="container">
            <h1> U</h1>
            <br/>
            <div className="letter-u-holder">
            <h4 className={this.state.red ? 'red' : ''}>{this.state.wpm}</h4>
            <br/>
           
            <span className={this.state.red ? 'red' : ''}>{this.state.userInput.charAt(this.state.start) + this.state.userInput.slice(this.state.start +1)} </span>
           <br/>
           <br/>
            <button className="btn btn-success" onClick={this.handleStart} >Start</button>
            <br/>
            <br/>
            <h3>start typing</h3>
            <br/>
            <br/>
            
            <center>
       <input type='text' 
      id="k" 
      name='k'
      onChange={this.handleChange}
      value={this.state.userInput}
      onKeyPress={this.captureKeyStrokes}
      //onClick={this.handleStart}
      
      className="form-control"
      />
      </center>


            </div>
            </div>
        )
    }


}

export default LetterUComponent;

