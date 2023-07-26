import React, { Component } from "react";
import * as yup from "yup";
import Container from "../components/Container";
import { Navigate } from "react-router-dom";
import axios from "axios";

const usernameMessage = "the username is required";

let schema = yup.object().shape({
  username: yup.string().required(usernameMessage),
  email: yup.string().email().required(),
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
    isLoginningOn: false,
    isLoading: false,
    errors: [],
  };
  handelSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema
        .validate(
          {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
          },
          { abortEarly: false }
        )
        .then(() => {
          this.setState({
            randomData: { ...this.state },
            ...initstate,
            isLoading: true,
          });
          axios
            .post("https://jsonplaceholder.typicode.com/users", {
              name: "ibrahim",
              username: this.state.username,
              email: this.state.email,
            })
            .then((response) => {
              // handle success
              console.log(response);
              this.setState({
                isLoginningOn: true,
              });
            })
            .catch((error) => {
              // handle error
              this.setState({
                errors: [error.message],
              });
            })
            .finally(() => {
              // always executed
              this.setState({
                isLoading: false,
              });
            });
        });
    } catch (err) {
      this.setState({
        errors: err.errors,
      });
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
        <section style={{ marginBottom: "1.25rem" }}>
          Errors :
          <span style={{ color: "red" }}>
            {this.state.errors.join(" ,,, ")}
          </span>
        </section>
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
          <button type="submit">
            {this.state.isLoading ? "Loading..." : "Submit"}
          </button>
          <button onClick={(e) => this.handelRandomData(e)}>Random Data</button>
          {this.state.isLoginningOn ? <Navigate to="/about" /> : ""}
        </form>
      </Container>
    );
  }
}
