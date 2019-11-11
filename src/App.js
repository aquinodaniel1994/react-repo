import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    name: "ciccio",
    showPerson: false
  }

  togglePerson = () => {
    this.setState({showPerson: !this.state.showPerson })
  }



  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          <Person name={this.state.name} />
        </div>
      )
    }

    return (
      <div className="App" >
        <button type="button" onClick={this.togglePerson}>Toggle Person</button>
        {person}
      </div>
    );
  }
}

export default App;
