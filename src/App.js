import React, { Component } from 'react';
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
        {this.state.person.map((person, index) => {
          return (<Person key={index} name={person.name} />)
        })}
      </div>
    );
  }
}

export default App;
