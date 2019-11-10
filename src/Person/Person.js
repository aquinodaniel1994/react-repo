import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>i'm {props.name} and i have {props.age}</p>
            <span>{props.children}</span>
        </div>
    )
}

export default person; 