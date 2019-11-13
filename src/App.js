import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from  './CharComponent/CharComponent';
class App extends Component{
  state={
    userInput : '',
  }
  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  }
  
  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1); // rimuove il carattere dall'array
    const updateText = text.join('');
    this.setState({userInput: updateText});

  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent 
        outputChar = {ch} 
        key = {index} 
        clicked = { () => this.deleteCharHandler(index)}
      />;
    });
    return (
      <div className="App">
        <input
          type="text"
          value = {this.state.userInput}
          onChange = {this.inputChangeHandler} 
        />
        <p>
          {this.state.userInput}
        </p>
        <ValidationComponent 
          inputLength={this.state.userInput.length}
        />
        {charList}
      </div>
    );
  }
}

export default App;
