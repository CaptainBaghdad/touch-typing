import React, {Component} from 'react';


class ResultsComponent extends Component{

    render(){
        return (
            <div className='container'>
            <h2>Results</h2>
            <h4>Accuracy : {this.props.acc} %</h4>
            <br/>
            <h2>WPM : {this.props.score} </h2>

            <h1></h1>

            </div>
        )

    }

}

export default ResultsComponent;