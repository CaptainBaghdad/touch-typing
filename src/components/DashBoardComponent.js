import * as React from 'react';
import {Link} from 'react-router-dom';

class DashBoardComponent extends React.Component{
    state = { 
        redirect: false,
        username: '',
        lastScore: 0,
        scores: [],
        profileURL: ''
    }

    componentDidMount(){
        if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
           window.location  = '/login';
       
       }
           
            let token = localStorage.getItem('token')
            fetch('http://localhost:4000/dashboard', {headers: {
                token: token
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.msg){
              window.location = '/login';

            }
            
        })
    

        
        
    }

    render(){
        

        return (
            <div className="container">
                <nav className="dash-nav">
                <ul>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to='/'>Home</Link></li>

                </ul>


                </nav>
                <p>This is the dashboard page</p>
            </div>
        )
    }


}



export default DashBoardComponent;