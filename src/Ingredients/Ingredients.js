import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons'

class Ingredients extends Component {
    render() {
        const listItems = this.props.ingrArray.map((ingrIterator) =>
            <p align="center" key={ingrIterator.name}>
                {ingrIterator.name}  
                <Buttons
                    handleChangeIngredients={this.props.changeIngredients}
                    ingr={ingrIterator}
                />  
            </p>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}



export default Ingredients;