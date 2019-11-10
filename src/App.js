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

  changeName = (newName) => {
    this.setState({
      person: [
        { name: newName },
        { name: "Caviale" }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeName.bind(this, "bottone")}>Change name</button>
        <Person click={this.changeName.bind(this,"muller")} name={this.state.person[0].name} age={Math.floor(Math.random() * 25)} />
        <Person name={this.state.person[1].name} age={Math.floor(Math.random() * 25)}> props children </Person>
      </div>
    );
  }
}

export default App;
