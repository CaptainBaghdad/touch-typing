import React from 'react';

const LogoutComponent = (props) => {
    localStorage.removeItem('token');
    window.location = '/';

}


export default LogoutComponent;