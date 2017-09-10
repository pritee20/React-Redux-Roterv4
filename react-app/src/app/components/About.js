import React, { Component } from 'react';

export default class About extends Component {
    constructor(){
        super();
        //Bad way of codeing
        this.members = ["member 1", "member 2", "member 3","member 4"];
        //this.addMember =  this.addMember.bind(this);
    }
    addMember() {
            //BAD
            //console.log("Add memeber", this.members);
            this.members.push("member" + Math.random());

            //React API call render
            //this.forceUpdate();
    }
    render(){
        console.log("only one time render");
        let title = "About";
        let list = this.members.map((member, index) => <li key={index}>{member}</li>);


        return (
            
            <div>
                <h1>{title}</h1>
                <button onClick={()=>this.addMember()}>Add</button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}