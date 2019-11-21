import React, { Component } from 'react';

class Burger extends Component {
    render() {
        const burgerLayers = [];
        this.props.ingrArray.forEach((ingrIterator) => {
            for (let i = 0; i < ingrIterator.quantity; i++) {
                burgerLayers.push(<div>{ingrIterator.name}</div>);
            }
        })
        return (
            <div>
                <div>/^^^^\</div>
                {burgerLayers}
                <div>\____/</div>
            </div >
        );
    }

}

export default Burger;