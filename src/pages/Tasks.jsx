import React, { Component } from "react";
import { H1 } from "../components/Typography";

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
    padding: "10px 20px",
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
    console.log("Typography");
    return (
      <div>
        <div className="task-1">
          <H1> Task 1</H1>
          <button
            style={
              this.state.theme === "dark" ? this.darkStyle : this.lightStyle
            }
            onClick={this.changeTheme}
          >
            {this.state.theme === "dark" ? "light" : "dark"}
          </button>
        </div>
      </div>
    );
  }
}
