import * as React from 'react';
import {Link} from 'react-router-dom';
import '../css/dashboard.css';

class DashBoardComponent extends React.Component{
    state = { 
        redirect: false,
        username: '',
        lastScore: 0,
        scores: [],
        profileURL: '',
        obj: {}
    }

    componentDidMount(){
        console.log(`localStorage on componentDidMount ${localStorage.getItem('token')}`);
        this.handleMount()
    

        
        
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
             console.log(`This is the dashboard promise response ${data.name}`);
             console.log(`This is the data response object ${data.letterR}`);
             this.setState({
                 username: localStorage.getItem('name'),
                 obj: data.data
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
                </div>
                </div>

                <div className="row">
                <div className="col-md-4 col-lg-4 col-xs-4" id="user-info">
                <p>Logged in as {this.state.username.charAt(0).toUpperCase() + this.state.username.slice(1)}</p>
                </div>


                </div>

                <div className='row'>
                <div className="col-xs-4 col-md-4 col-lr-4">
                <h3>Letter U WPM {this.state.obj.letterU}</h3>
                <br/>
                <br/>
                <h3>Letter R WPM {this.state.obj.letterR}</h3>
                </div>
                </div>
            </div>
        )
    }


}



export default DashBoardComponent;