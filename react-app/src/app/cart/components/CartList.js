
import React from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default function CartList(props) { 
        console.log("CArt List Called");
        let items = props.items;

        let rows = items.map ( item => (
            <CartItem item={item}
                      key={item.id}
                      onRemove = {props.onRemove}
                      onUpdate = {props.onUpdate}
            />
        ))

        return (
            <div> 
            <h2>Cart List</h2>

            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>
                {rows}
                </tbody>
            </table>
            </div>
        )
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}