import React, { Component } from "react";
import Counter from "../components/Counter";

export default class Counters extends Component {
  state = {
    total: 0,
    isTrue: true,
  };

  render() {
    return (
      <div style={{ padding: "100px" }}>
        <div className="total" style={{ marginTop: "30px", fontSize: "25px" }}>
          Total : <span style={{ color: "red" }}>{this.state.total}</span>
        </div>
        {this.state.isTrue ? <Counter /> : ""}
        <button
          style={{ marginTop: "20px" }}
          onClick={() => {
            this.setState({ isTrue: false });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}
