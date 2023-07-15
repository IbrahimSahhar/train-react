import React, { Component } from "react";
import Counter from "../components/Counter";

export default class Counters extends Component {
  state = {
    total: 0,
  };
  render() {
    return (
      <div style={{ padding: "100px" }}>
        <Counter amount="1" />
        <Counter amount="2" />
        <Counter amount="3" />
        <Counter amount="4" />
        <div className="total" style={{ marginTop: "30px", fontSize: "25px" }}>
          Total : <span style={{ color: "red" }}>{this.state.total}</span>
        </div>
      </div>
    );
  }
}
