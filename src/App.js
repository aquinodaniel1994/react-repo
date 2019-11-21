import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import BurgerContainer from './Components/BurgerContainer/BurgerContainer';

class App extends Component {
  state = {
    totalPrice: 0
  }

  handlePrice(e){
    let newPrice = this.state.totalPrice + e;
    this.setState({totalPrice: newPrice})
  }

  render() {
    return (
      <div className="App">
        <Navbar totalPrice={this.state.totalPrice}/>
        <BurgerContainer price={this.handlePrice.bind(this)} />
      </div>
    );
  }
}

export default App;
