import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import BurgerContainer from './Components/BurgerContainer/BurgerContainer';

class App extends Component {
  state = {
    totalPrice: 10
  }
  handlePrice(e){
    this.setState(e);
  }

  render() {
    return (
      <div className="App">
        <Navbar totalPrice={this.state.totalPrice}/>
        <BurgerContainer />
      </div>
    );
  }
}

export default App;
