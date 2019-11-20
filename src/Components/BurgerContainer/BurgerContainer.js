import React, { Component } from 'react';
import Control from './control/Control';
import Burger from './Burger/Burger';

class BurgerContainer extends Component {
    state = {
        ingr: [
            { name: "Bacon", price: 0.50, qty: 0 },
            { name: "Cheese", price: 0.70, qty: 0 },
            { name: "Mayo", price: 0.25, qty: 0 }
        ]
    }
    render() {
        return (
            <div className="container">
                <Control burger={this.state.ingr} />
                <Burger burger={this.state.ingr}/>
            </div>
        );
    }

}


export default BurgerContainer; 