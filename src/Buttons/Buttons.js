import React from 'react';

const btnIngr = (props) => {
    return(
        <div>
            <button type="button" onClick={() => props.handleAddIngredients(props.name)}>Add</button>
            <button type="button" onClick={() => props.handleRemoveIngredients(props.name)}>Remove</button>
        </div>
    );
}

export default btnIngr;