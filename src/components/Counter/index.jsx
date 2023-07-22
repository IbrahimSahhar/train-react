import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button
          className="increment"
          onClick={() => this.props.increment(this.props.id, this.props.step)}
        >
          increment
        </button>
        <h3 className="count">{this.props.count}</h3>
        <button
          className={
            this.props.count > 0 ? "decrement" : "decrement decrement-off "
          }
          onClick={() => this.props.decrement(this.props.id, this.props.step)}
        >
          decrement
        </button>
      </div>
    );
  }
}
