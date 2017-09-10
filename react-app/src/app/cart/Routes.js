
import React from "react";

import {Route, 
        Switch,
        } from "react-router-dom";

        
import Cart 
        from "./components/Cart";

 
export default function Routes(props) {
    return (
       <Route path="/cart">
       {Cart}
       </Route>
    )
}


