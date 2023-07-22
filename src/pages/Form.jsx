import React, { Component } from "react";

const initstate = {
  username: "",
  email: "",
  password: "",
};

export default class Form extends Component {
  state = {
    initstate,
    randomData: {
      initstate,
    },
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.setState({ randomData: { ...this.state }, ...initstate });
  };

  handelInput = (e) => {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handelRandomData = (e) => {
    e.preventDefault();
    this.setState({ ...this.state.randomData });
  };
  render() {
    return (
      <form
        onSubmit={(e) => this.handelSubmit(e)}
        style={{ padding: "50px 100px" }}
      >
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          placeholder="user name"
          onChange={(e) => this.handelInput(e)}
          value={this.state.username}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          onChange={(e) => this.handelInput(e)}
          value={this.state.email}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          onChange={(e) => this.handelInput(e)}
          value={this.state.password}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <button onClick={(e) => this.handelRandomData(e)}>Random Data</button>
      </form>
    );
  }
}
