import React, {Component} from 'react';
import Burger from '../Burger/Burger';
import Ingredients from '../Ingredients/Ingredients';

class BurgerContainer extends Component {
    state = {
        ingr: [
            {
                name: 'lettuce',
                quantity: 0,
                price: 2,
            },
            {
                name: 'bacon',
                quantity: 0,
                price: 2,
            },
            {
                name: 'cheese',
                quantity: 0,
                price: 2,
            },
        ],
        price: 0,
    }
    
    render(){
        return (
        
            <div>

                <Burger price={this.state.price}/>

                <Ingredients ingrArray={this.state.ingr} />
            </div>
        );
    }
}

export default BurgerContainer;