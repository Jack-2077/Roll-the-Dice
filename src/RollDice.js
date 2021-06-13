import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { dice1: "one", dice2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }

  getRand() {
    let rand = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    return rand;
  }
  roll() {
    this.setState({
      dice1: this.getRand(),
      dice2: this.getRand(),
      rolling: true
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die dieNumber={this.state.dice1} rolling={this.state.rolling} />
          <Die dieNumber={this.state.dice2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling" : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
