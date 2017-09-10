
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Checkout extends Component {
     
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        console.log("CArt chekout Called");
        return (
            <div> 
            <h2>Checkout</h2>
            </div>
        )
    }
} 


Checkout.defaultProps = {
    
}

Checkout.propTypes = {
    
}