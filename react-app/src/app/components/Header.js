
import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

export default class Header extends Component {
    constructor(props, context) {
        super(props, context)

    }

    render() {
        console.log("render Called");
        return (
            <div>
                <NavLink to="/"
                    exact
                    className="button"
                    activeClassName="success"
                >
                    Home
                </NavLink>
                <NavLink to="/cart"
                
                    className="button"
                    activeClassName="success"
                >
                    Cart
                </NavLink>
                <NavLink to="/products"
                    className="button"
                    activeClassName="success"
                >
                    Products
                </NavLink>
                <NavLink to="/about" 
                    className="button"
                    activeClassName="success"
                >
                    About
                </NavLink>

            </div>
        );
    }
}
