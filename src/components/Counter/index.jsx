import React, { Component } from "react";
import "./style.css";

export default class Counter extends Component {
  render({ id, count, step, decrement, increment } = this.props) {
    return (
      <div className="counter">
        <button className="increment" onClick={() => increment(id, step)}>
          increment
        </button>
        <h3 className="count">{count}</h3>
        <button
          className={count > 0 ? "decrement" : "decrement decrement-off "}
          onClick={() => decrement(id, step)}
        >
          decrement
        </button>
      </div>
    );
  }
}
