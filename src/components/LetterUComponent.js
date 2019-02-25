import React, {Component} from 'react';
import '../css/letteru.css';

class LetterUComponent extends Component{
    state= {
        wpm:'uuuouuooie uiuuiiu een ternn thnd ooouu uuu',
        userInput: '',
        start: 0,
        green: false,
        red: false

    }

    captureKeyStrokes = (event) => {
        let len = this.state.wpm.length;
        let milli = 60000;
        let interFunction = () => {
            if(len == this.state.start){
                clearInterval(interFunction);
                window.location = '/letterr'

            }

        };

        
        setInterval(interFunction, milli);
           
                //alert('You have finished before a min');
                
                
            }
            

        
      
        

            

        
         
       
            
          
    
    
    
    
      
    
        
       
    
      
   

handleChange = (event) => {
        
        let str = this.state.wpm.trim();
        let strSplit = str.split('');
        let input = this.state.userInput;
        let inputSplit = input.split('');
        //let s = this.state.start;

        if(strSplit[this.state.start] === inputSplit[this.state.start]){
            console.log(`this is the user input ${this.state.userInput}`);
            console.log(`this is the start index ${this.state.start}`);
            this.setState({
                start: this.state.start +=1,
                green: true,
                red: false,
                userInput: event.target.value
            });
            //console.log('Correct' + ' ' + this.state.start + "," + " " + strSplit[this.state.start] + ", "  + " " + input.charAt(this.state.start));
        }
            else{
                this.setState({
                    red: true,
                    green:false
                })
                console.log('Wrong' + ' ' + this.state.start);
            }






    

}






    render(){
        //const wpm = ' ';
        return (
            <div className="container">
            <h1> U</h1>
            <br/>
            <div className="letter-u-holder">
            <p>{this.state.wpm}</p>
            <br/>
            <span className={this.state.green ? 'green' : 'red'}>{this.state.userInput.charAt(this.state.start) + this.state.userInput.slice(1)} </span>
           

            <br/>
            <br/>
            <h3>start typing</h3>
            <br/>
            <br/>
            
            <center>
       <input type='text' 
      id="k" 
      name='k'
      onChange={this.captureKeyStrokes}
      value={this.state.userInput}
      onKeyPressCapture={this.handleChange}
      
      className="form-control"
      
      
      
      />
      </center>









           
            </div>
            </div>
        )
    }


}

export default LetterUComponent;

