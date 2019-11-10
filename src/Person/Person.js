import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>i'm {props.name} and i have {props.age}</p>
            <span>{props.children}</span>
        </div>
    )
}

export default person; 