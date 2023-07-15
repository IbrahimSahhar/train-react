import React, { Component } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import { H1, H2, H3, H4, H5, H6, P, Span } from "../components/Typography";

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

          <div style={{ margin: "20px 0" }}>Typography</div>
          <H1>Title with h1</H1>
          <H2>Title with h2</H2>
          <H3>Title with h3</H3>
          <H4>Title with h4</H4>
          <H5>Title with h5</H5>
          <H6>Title with h6</H6>
          <P>Title with paragraph</P>
          <Span>Title with span</Span>
        </Container>
      </div>
    );
  }
}
