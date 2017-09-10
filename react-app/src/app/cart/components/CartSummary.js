
import React from "react";
import PropTypes from "prop-types";

export default function CartSummary(props, context) { 
     console.log("CArt Summary Called");
        return (
            <div> 
            <h2>{context.appTitle}Cart Summary - [{props.amount}]</h2>
            </div>
        )
} 

CartSummary.contextTypes = {
    appTitle: PropTypes.string
}
CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}