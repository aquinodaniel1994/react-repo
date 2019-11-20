import React, { Component } from 'react';

class Burger extends Component {
    render() {
        return (
            <span>
                <ul>
                    {this.props.burger.map((ingredient, i)  => {
                    return (<li key={i}>{ingredient.name}, QTY: {ingredient.qty}</li>)
                    })}
                </ul>
            </span>
        );
    }

}


export default Burger; 