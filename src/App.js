import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    person: [
      { name: "daniel" },
      { name: "gianni" }
    ]
  };

  changeName = () => {
    this.setState({
      person: [
        { name: "Ciccio" },
        { name: "Caviale" }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeName}>Change name</button>
        <Person name={this.state.person[0].name} age={Math.floor(Math.random() * 25)} />
        <Person name={this.state.person[1].name} age={Math.floor(Math.random() * 25)}> props children </Person>
      </div>
    );
  }
}

export default App;
