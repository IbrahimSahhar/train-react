import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  state = {
    count: 0,
    amount: 1,
  };

  increment = (e) => {
    this.setState((prev) => ({
      count: prev.count + Number(this.state.amount),
    }));
    this.props.calcTotal(Number(this.state.amount));
  };
  decrement = () => {
    if (this.state.count >= +this.state.amount) {
      this.setState((prev) => ({
        count: prev.count - Number(this.state.amount),
      }));
      this.props.calcTotal(-Number(this.state.amount));
    }
  };

  inputChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  render() {
    return (
      <div className="counter">
        <button className="increment" onClick={this.increment}>
          increment
        </button>
        <h3 className="count">{this.state.count}</h3>
        <button
          className={
            this.state.count > 0 ? "decrement" : "decrement decrement-off "
          }
          onClick={this.decrement}
        >
          decrement
        </button>
        <input type="number" onChange={(e) => this.inputChange(e)} />
      </div>
    );
  }
}
