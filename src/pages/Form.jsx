import React, { Component } from "react";
import * as yup from "yup";
import Container from "../components/Container";

const usernameMessage = "the username is required";

let schema = yup.object().shape({
  username: yup.string().required(usernameMessage),
  email: yup.string().email(),
  password: yup.string().required().min(8).max(20),
});

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
  handelSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema
        .validate({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        })
        .then(() => {
          this.setState({ randomData: { ...this.state }, ...initstate });
        });
    } catch (err) {
      console.log(err.message);
    }
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
      <Container>
        <form onSubmit={(e) => this.handelSubmit(e)}>
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
      </Container>
    );
  }
}
