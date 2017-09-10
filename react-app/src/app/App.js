import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";

import PropTypes from "prop-types";

export class App extends React.Component{

    constructor(){
        super();
    }
// ES NeXT [BABEL preset stage-2 that why its working]
    static childContextTypes = {
        appTitle: PropTypes.string
    }

    getChildContext() {
        return {
            appTitle: "React App"
        }
    }

    render(){

        console.log("App render called");
        
        return(

            <div>
                <Header />

				{/* view container */}
				<div>
					{this.props.children}
				</div>

				<Footer year={2017} />
            </div>
        )

    }
}