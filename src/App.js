import React, { Component } from 'react';
import './App.css';

const Title = (props) => {
  return (<h1>Title: {props.text}</h1>)
}
Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing proprs: ${propName}`)
    }
    if (props[propName].length < 10) {
      return new Error(`${propName} is short`)
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title  text="test"/>
        <Title text="12345678901" />
        <Title />
      </div>
    );
  }
}

export default App;
