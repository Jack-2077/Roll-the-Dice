import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    const dieNumber = `Die fas fa-dice-${this.props.dieNumber} ${
      this.props.rolling && "rolling"
    }`;
    return (
      <div>
        <i className={dieNumber}></i>
      </div>
    );
  }
}

export default Die;
