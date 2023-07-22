import React, { Component } from "react";
import Counter from "../components/Counter";
const counters = [
  { id: 1, count: 0, step: 1 },
  { id: 2, count: 0, step: 2 },
  { id: 3, count: 0, step: 4 },
  { id: 4, count: 0, step: 8 },
];

export default class Counters extends Component {
  state = {
    counters,
    total: 0,
  };
  onIncrement = (id, step = 1) => {
    this.setState((prev) => {
      return {
        counters: prev.counters.map((counter) =>
          counter.id === id
            ? { ...counter, count: counter.count + step }
            : counter
        ),
      };
    });
  };

  onDecrement = (id, step = 1) => {
    this.setState((prev) => {
      return {
        counters: prev.counters.map((counter) =>
          counter.id === id && counter.count >= step
            ? { ...counter, count: counter.count - step }
            : counter
        ),
      };
    });
  };

  componentDidUpdate() {
    this.setState((prev) => {
      const newTotal = prev.counters.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0
      );
      if (prev.total !== newTotal) {
        return { total: newTotal };
      }
    });
  }

  render() {
    return (
      <div style={{ padding: "100px" }}>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            {...counter}
            increment={this.onIncrement}
            decrement={this.onDecrement}
          />
        ))}
        <div className="total">{this.state.total}</div>
      </div>
    );
  }
}
