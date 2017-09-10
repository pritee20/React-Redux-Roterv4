import React, { Component } from 'react';

export default class Home extends Component {
    render(){
        let title = "Home";
        return (
            <div>
                <h1>{title}</h1>
                <p>Welcome to product app</p>
                {/* Comment Here*/}
            </div>
        )
    }
}