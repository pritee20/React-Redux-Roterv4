import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { App } from "./App";

import CartRoutes from "./cart/Routes";

import Home from "./components/Home";
import About from "./components/About";

//functional Component
export default function Routes(){
    return(
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about"  component={About}/>
                    <CartRoutes />
                </Switch>
            </App>
        </Router>
    )
}