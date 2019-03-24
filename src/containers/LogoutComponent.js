import React from 'react';

const LogoutComponent = (props) => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    window.location = '/';

}


export default LogoutComponent;