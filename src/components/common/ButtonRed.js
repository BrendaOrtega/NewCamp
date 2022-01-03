import React, { Component } from 'react';
import './Button.css';


class ButtonRed  extends Component {
    render(){
        return (

            <button style={{marginLeft:"0px"}} className="btn-aply" > {this.props.text}</button>


        );
    }
}

export default ButtonRed;