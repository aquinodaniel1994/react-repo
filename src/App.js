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
  deleteElement = (indexElement) =>  {
    const persons = [...this.state.person];
    persons.splice(indexElement, 1);
    this.setState({ person: persons });
  }
  render() {
    return (
      <div className="App">
        {this.state.person.map((person, index) => {
          return (<Person key={index} name={person.name} deletePerson={this.deleteElement.bind(this, index)} />)
        })}
      </div>
    );
  }
}

export default App;
