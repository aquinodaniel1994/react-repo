import React, {Component} from 'react';
import Burger from '../Burger/Burger';
import Ingredients from '../Ingredients/Ingredients';

class BurgerContainer extends Component {
    state = {
        ingr: [
            {
                name: 'lettuce',
                quantity: 0,
                price: 2.20,
            },
            {
                name: 'bacon',
                quantity: 0,
                price: 3.70,
            },
            {
                name: 'cheese',
                quantity: 0,
                price: 4.15,
            },
        ]
        
    }

    handleQuantityChangeIngredients = (ingredient, mouseEvent) => {
        let oldState = this.state;
        let indexToBeRemoved = oldState.ingr.indexOf(ingredient);
        if(mouseEvent.target.name === "add"){
            ingredient.quantity += 1;
        }else{
            ingredient.quantity -= 1;
        }
        oldState.ingr[indexToBeRemoved] = ingredient;
        this.setState(oldState);
        this.props.updatePrice(ingredient.price, mouseEvent.target.name);
    }


    render(){
        return (
            <div>
                <Burger ingrArray={this.state.ingr}/>
                <Ingredients 
                    ingrArray={this.state.ingr}
                    changeIngredients={this.handleQuantityChangeIngredients}
                />
            </div>
        );
    }
}

export default BurgerContainer;