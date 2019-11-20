import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Nav/Navbar';
import BurgerContainer from './Components/BurgerContainer/BurgerContainer';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Navbar />
        <BurgerContainer />
      </div>
    );
  }
}

export default App;
