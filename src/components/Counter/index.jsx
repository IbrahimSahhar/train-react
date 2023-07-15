import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  state = {
    count: 0,
    amount: 1,
  };

  increment = () => {
    this.setState((prev) => ({ count: prev.count + +this.state.amount }));
  };
  decrement = () => {
    if (this.state.count >= +this.state.amount)
      this.setState((prev) => ({ count: prev.count - +this.state.amount }));
  };

  inputChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  componentDidMount() {
    console.log("mounting");
  }
  componentDidUpdate() {
    console.log("updating");
  }
  componentWillUnmount() {
    console.log("un Mounting");
  }

  render() {
    return (
      <div className="counter">
        <button className="increment" onClick={this.increment}>
          increment
        </button>
        <h3 className="count">{this.state.count}</h3>
        <button className="decrement" onClick={this.decrement}>
          decrement
        </button>
        <input type="number" onChange={(e) => this.inputChange(e)} />
      </div>
    );
  }
}
