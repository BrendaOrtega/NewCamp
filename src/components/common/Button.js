import React, { Component } from 'react';
import './Button.css';


class Button  extends Component {
    render(){
        return (

                <button className="btn-explore" ><span>{this.props.ico}</span> {this.props.text}</button>


        );
    }
}

export default Button;