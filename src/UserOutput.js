import React from 'react';
import './UserOutput.css';

function UserOutput(props) {
    return( 
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>random</p>    
        </div>      
    );
}

export default UserOutput;