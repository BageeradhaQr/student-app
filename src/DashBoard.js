import React from 'react';
//import Login from './Login';

const DashBoard = () => {
return(
    <div>
        Welcome to the Dashboard 
        {localStorage.getItem('user-info')};
    </div>
)

}

export default DashBoard;