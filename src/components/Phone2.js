import React, { Component } from "react";

import '../App.css';
const androidInitialText = "android text";


class Phone1 extends Component {

    render(){
        return(
            <div className="phone-block">
                <div className="android">{this.props.message}</div> 
            </div>)
    }

}

export default Phone1;