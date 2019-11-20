import React, { Component } from 'react';
import Button from '../../Commons/Button'
import { fileURLToPath } from 'url';
class Control extends Component {

  addElement = (element) => {
    element.qty += 1;
    this.props.change(element)
  }

  removeElement = (element) => {
    element.qty -= 1;
    this.props.change(element)
  }

  render() {
    return (
      <div>
        {this.props.burger.map((ingredients, index) => {
          return (
            <div key={index} >
              <h3>{ingredients.name}</h3>
              <Button name="Add" function={this.addElement.bind(this, ingredients)}>Add</Button>
              <Button name="Remove" function={this.removeElement.bind(this, ingredients)}>Remove</Button>
            </div>
          )
        })
        }
      </div>

    );
  }

}

export default Control; 