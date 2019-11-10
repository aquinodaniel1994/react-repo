import React from 'react';

const NameInput = (props) => {
    return (
        <input onChange={props.changed} value={props.currentName} />
    )
}

export default NameInput; 