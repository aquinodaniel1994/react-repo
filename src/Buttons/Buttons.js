import React from 'react';

const btnIngr = (props) => {
    return(
        <span>
            <button type="button" name="add" onClick={(e) => props.handleChangeIngredients(props.ingr, e)}>Add</button>
            <button type="button" name="remove" onClick={(e) => props.handleChangeIngredients(props.ingr, e)}>Remove</button>
        </span>
    );
}

export default btnIngr;