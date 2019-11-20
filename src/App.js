import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import BurgerContainer from './BurgerContainer/BurgerContainer';


class App extends Component {
    
    render() {
        return (
            <div className="App">
                <NavBar />
                <BurgerContainer />
            </div>
        );
    }
}

export default App;
