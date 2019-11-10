import React, { Component } from 'react';
import NameInput from './NameInput/NameInput';
import './App.css';
import NameOutoput from './NameOutput/NameOutput';

class App extends Component {
  state = {
    name: 'ciccio'
  }

  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <NameInput changed={this.nameChangeHandler} currentName={this.state.name} />
        <NameOutoput name={this.state.name} />
      </div>
    );
  }
}

export default App;
