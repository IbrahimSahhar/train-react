import React, { Component } from "react";
import Header from "../components/Header";
import Container from "../components/Container";

export default class About extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <Header myPage="about" />
        <Container>
          <button
            onClick={() => {
              this.setState((prev) => ({
                count: prev.count + 1,
              }));
            }}
          >
            add
          </button>
          <span className="count">{this.state.count}</span>
        </Container>
      </div>
    );
  }
}
