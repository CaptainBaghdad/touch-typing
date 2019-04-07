import React, {Component} from 'react';
import '../css/stats.css';

class StatsComponent extends Component{

    state = {
        _isMounted: false,
        uLeader: {},
        rLeader: {},
        eLeader: {},
        iLeader: {}
    }

    componentDidMount(){
        this._isMounted = true;
       
        fetch('http://localhost:4000/stats')
        .then(res => res.json())
        .then(data => {
            if(this._isMounted){
                this.setState({
                    uLeader: data.uLeader,
                    rLeader : data.rLeader,
                    eLeader: data.eLeader,
                    iLeader: data.iLeader

                })
            }
        })
           

    }

    componentWillUnmount(){
        this._isMounted = false;
    }



render(){
    return (
        <div>
        
        <table class="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Letter</th>
      <th scope="col">WPM</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{this.state.uLeader.name}</td>
      <td>U</td>
      <td>{this.state.uLeader.letterU}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{this.state.rLeader.name}</td>
      <td>R</td>
      <td>{this.state.rLeader.letterR}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{this.state.eLeader.name}</td>
      <td>E</td>
      <td>{this.state.eLeader.letterE}</td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>{this.state.iLeader.name}</td>
      <td>I</td>
      <td>{this.state.iLeader.letterI}</td>
    </tr>
  </tbody>
</table>
        
        
      </div>

      
    
            
            
        

        

      
    )
}

}

export default StatsComponent;