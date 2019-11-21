import React, { Component } from 'react';
import './Burger.css'
class Burger extends Component {
    render() {
        return (
            <span>
                {this.props.burger.map((ingredient, i) => {
                    return (<div key={i} className={ingredient.name}>{ingredient.name}, QTY: {ingredient.qty}</div>)
                })}
            </span>
        );
    }

}

export default Burger; 