import React, { Component } from "react";

export default class Tasks extends Component {
  state = {
    theme: "dark",
  };

  changeTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };
  render() {
    return (
      <div>
        <div className="task-1">
          <h1> Task 1</h1>
          <button onClick={this.changeTheme}>{this.state.theme}</button>
        </div>
      </div>
    );
  }
}
