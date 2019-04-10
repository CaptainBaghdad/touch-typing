import * as React from 'react';
import {Link} from 'react-router-dom';
import '../css/dashboard.css';
import StatsComponent from '../components/StatsComponent';


class DashBoardComponent extends React.Component{
    state = { 
        redirect: false,
        username: '',
        lastScore: 0,
        scores: [],
        profileURL: '',
        obj: {},
        avg:0,
        bool: ''
    }

    componentDidMount(){
        console.log(`localStorage on componentDidMount ${localStorage.getItem('token')}`);
        this.handleMount();
        
     }


    

    handleMount(){
        if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
            console.log(`There must be something wrong`);
             window.location  = '/login';
        
        }
            
             let token = localStorage.getItem('token');
             let name = localStorage.getItem('name');
             console.log(`from the getItem ${name} should be the name of the user`);
             fetch('http://localhost:4000/dashboard', {headers: {
                 token: token,
                 name: name
             }
         })
         .then(res => res.json())
         .then(data => {
             console.log(`This is the dashboard promise response ${data}`);
             console.log(`This is the data response object ${data.letterR}`);
             this.setState({
                 username: name,
                 obj: data.data,
                 avg: data.avg,
                 bool: data.bool
             })
             
                 console.log(data);
               
 
             
             
         })
         
        
        }

    render(){
        

        return (
            <div className="container">
            
            <div className="row">
            <div className="col-md-10">
                <nav className="dash-nav">
                <ul>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to='/'>Home</Link></li>

                </ul>

                   
                </nav>
                <p>Logged in as {this.state.username.toLowerCase().charAt(0).toUpperCase() + this.state.username.slice(1).toLowerCase()}</p> 
                </div>
                </div>
                


                <div className="row">
                <div className="col-md-4 col-lg-4 col-xs-4" id="user-info">
                
                </div>


                </div>

                <div className='row'>
                <div className="col-xs-4 col-md-4 col-lr-4">
                <h3>Letter U WPM <span className="wpm">{!this.state.bool ? 0 : this.state.obj.letterU}</span>
                <Link to="/letteru" className="rere">Retry</Link></h3>
                <br/>
                <br/>
                <h3>Letter R WPM <span className="wpm">{!this.state.bool ? 0 : this.state.obj.letterR}</span> 
                <Link to="/letterr" className="rere">Retry</Link></h3>
                
                
                <br/>
                <br/>
                <h3>Letter E WPM <span className="wpm" id="E">{!this.state.bool ? 0 : this.state.obj.letterE}</span>
                <Link to="/lettere" className="rere">Retry</Link>
                </h3>
                <br/>
                <br/>
                <h3>Letter I WPM <span className="wpm">{!this.state.bool ? 0 : this.state.obj.letterI}</span>
                <Link to="/letteri" className="rere">Retry</Link>
                </h3>
                
                </div>


                <div className='col-md-5' id="stats">
                    <p>LeaderBoard</p>
                    <br/>
                    
                    
                        <StatsComponent />
                    
                </div>


                </div>
                
                
                <br/>
                <br/>

                <h2>AVG <span className="badge">{!this.state.bool ? 0 : this.state.avg.toFixed(2)}</span></h2>
            
            
                
            
            
            </div>
        )
    }


}



export default DashBoardComponent;