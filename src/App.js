import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component{
  state = {
    username : "pippo",
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    const {username} = this.state
    return (
      <div className = "App">
        {/* se aggiungessi in changed={this.usernameChangeHandler} le parentesi potrei eseguire il metodo */}
        <UserInput 
          changed={this.usernameChangeHandler}
          currentName={this.state.username}/> 
        <UserOutput username = {this.state.username} />
        <UserOutput username = {this.state.username} />
        <UserOutput username = {this.state.username} />
      </div>
    );
  }
}

export default App;
