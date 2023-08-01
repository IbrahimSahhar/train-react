import React, { Component } from "react";
import Container from "../components/Container";

export default class Tasks extends Component {
  state = {
    theme: "dark",
  };

  changeTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  mainStyle = {
    padding: "0.625rem 1.25rem",
    border: "none",
  };

  darkStyle = {
    ...this.mainStyle,
    backgroundColor: "black",
    color: "white",
  };
  lightStyle = {
    ...this.mainStyle,
    backgroundColor: "white",
    color: "black",
  };
  render() {
    return (
      <div>
        <Container>
          <div className="task-1">
            <h1> Task 1</h1>
            <button
              style={
                this.state.theme === "dark" ? this.darkStyle : this.lightStyle
              }
              onClick={this.changeTheme}
            >
              {this.state.theme === "dark" ? "light" : "dark"}
            </button>
          </div>
        </Container>
      </div>
    );
  }
}
