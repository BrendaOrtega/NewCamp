import React, { Component } from 'react';
import './Button.css';


class TagT  extends Component {
    render(){
        return (

                <button className="tool-tag" > {this.props.text}</button>


        );
    }
}

export default TagT;