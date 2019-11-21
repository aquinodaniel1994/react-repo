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

    handleChange = (event) => {
        let oldState = this.state;
        event.qty -= 1;
        let indexElement = oldState.ingr.indexOf(event);
        event.qty += 1;
        oldState.ingr[indexElement] = event
        this.setState(oldState);

        /* Update price */  
        this.props.price(event.price);
    }

    render() {
        return (
            <div className="container">
                <Burger burger={this.state.ingr} />
                <Control burger={this.state.ingr} change={this.handleChange} />
            </div>
        );
    }
}


export default BurgerContainer; 