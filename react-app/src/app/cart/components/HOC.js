
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import store from "../../Store";

class HOC extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            items: store.getState()
        }
    }
    
    componentDidMount() {
        this.unsubscribe =  store.subscribe( () => {
            this.setState({
                items: store.getState()
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    
    render() {
        let Component = this.props.component;
        return (
            <Component items={this.state.items} 
                       dispatch={store.dispatch.bind(store)} />
        )
    }
} 

export default function (Component) {
    return (
        <HOC component={Component} />
    )
}