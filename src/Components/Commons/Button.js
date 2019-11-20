import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <span>
                <button onClick={this.props.function}>{this.props.name}</button>
            </span>
        );
    }

}


export default Button; 