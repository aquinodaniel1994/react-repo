import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons'

class Ingredients extends Component {
    handleAddIngredients = (event, name) => {
        switch (this.props.ingrArray.name === name) {
            case 'lettuce':
                return(
                    this.props.ingrArray.quantity += this.props.ingrArray.quantity;
                    console.log();
                    )
            case 'bacon':
                return this.props.ingrArray.quantity += this.props.ingrArray.quantity;
            case 'cheese':
                return this.props.ingrArray.quantity += this.props.ingrArray.quantity;
            default:
                return ;
        }
    }

    handleRemoveIngredients = (event, name) => {
        alert("remove");
    }

    render() {
        return (
            <div>
                <div>
                    Lettuce:{this.props.ingrArray.name}
                    <Buttons
                        handleAddIngredients={this.handleAddIngredients}
                        handleRemoveIngredients={this.handleRemoveIngredients}
                        name="lettuce"
                    />
                </div>
                {/* <div>
                    Bacon:{this.props.ingrArray.bacon}
                    <Buttons
                        handleAddIngredients={this.handleAddIngredients}
                        handleRemoveIngredients={this.handleRemoveIngredients}
                        name="bacon"
                    />
                </div>
                <div>
                    Cheese:{this.props.ingrArray.cheese}
                    <Buttons
                        handleAddIngredients={this.handleAddIngredients}
                        handleRemoveIngredients={this.handleRemoveIngredients}
                        name="cheese"
                    />
                </div> */}
            </div>
        );
    }
}



export default Ingredients;