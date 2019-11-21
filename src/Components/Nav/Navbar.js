import React, {Component} from 'react'; 
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <span>{this.props.totalPrice}€</span>
            </div>
        );
    }

}


export default Navbar; 