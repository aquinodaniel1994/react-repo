import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p>{props.name}</p>
            <button onClick={props.deletePerson}>Delete</button>
        </div>
    );
}


export default Person;