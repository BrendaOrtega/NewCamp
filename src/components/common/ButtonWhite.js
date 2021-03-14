import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    let { onClick } = this.props;
    return (
      <button onClick={onClick} className="btn-apply">
        <span>{this.props.ico}</span> {this.props.text}
      </button>
    );
  }
}

export default Button;
