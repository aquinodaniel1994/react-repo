import React, { Component } from 'react';
import Button from '../../Commons/Button'
class Control extends Component {
  render() {
    return (
      <div>
        {this.props.burger.map((ingredients, index) => {
          return (
            <div key={index} >
              <h3>{ingredients.name}</h3>
              <Button name="Add">Add</Button>
              <Button name="Remove">Add</Button>
            </div>
          )
        })
        }
      </div>
      
    );
  }

}

export default Control; 