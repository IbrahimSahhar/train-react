import React, { Component } from "react";
import Counter from "../components/Counter";

export default class Counters extends Component {
  state = {
    total: 0,
  };
  getTotal = (countValue) => {
    if (this.state.total >= 0)
      this.setState((prev) => ({ total: prev.total + countValue }));
  };
  render() {
    return (
      <div style={{ padding: "100px" }}>
        <Counter calcTotal={this.getTotal} />

        <Counter calcTotal={this.getTotal} />

        <Counter calcTotal={this.getTotal} />

        <Counter calcTotal={this.getTotal} />
        <div className="total" style={{ marginTop: "30px", fontSize: "25px" }}>
          Total : <span style={{ color: "red" }}>{this.state.total}</span>
        </div>
      </div>
    );
  }
}
