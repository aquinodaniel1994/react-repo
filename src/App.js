import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: "Aldo" },
      { name: "Giovanni" },
      { name: "Giacomo" },
    ]
  }
  render() {
    return (
      <div className="App">
        {this.state.person.map(person => {
          return (<Person name={person.name} />)
        })}
      </div>
    );
  }
}

export default App;
