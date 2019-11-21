import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import BurgerContainer from './BurgerContainer/BurgerContainer';


class App extends Component {
    state = {
        price: 0,
    }
    
    updatePrice = (costToBeAdded, typeMouseEvent) => {
        let newPrice;
        if(typeMouseEvent === "add"){
            newPrice = this.state.price + costToBeAdded;
        }else{
            newPrice = this.state.price - costToBeAdded;
        }

        this.setState({price: newPrice});
    }
   
    render() {
        return (
            <div className="App">
                <NavBar price={this.state.price} />
                <BurgerContainer updatePrice={this.updatePrice}/>
            </div>
        );
    }
}

export default App;
