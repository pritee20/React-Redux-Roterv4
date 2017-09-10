import React from "react";
import { render } from "react-dom";

//bootstrapping

//bring react into html page

import Routes from "./app/Routes";
import store from "./app/Store";

render(<Routes />, document.getElementById('root'));