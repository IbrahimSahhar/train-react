import React, { Component } from "react";
import * as yup from "yup";
import Container from "../components/Container";
import { Navigate } from "react-router-dom";
import axios from "axios";

let schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default class Form extends Component {
  state = {
    username: "",
    password: "",
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
            password: this.state.password,
          },
          { abortEarly: false }
        )
        .then(({ username, password }) => {
          this.setState({
            isLoading: true,
          });
          axios
            .post("https://dummyjson.com/auth/login", {
              username,
              password,
            })
            .then((response) => {
              if (response.status === 200) {
                console.log(response);
                this.props.setIsAuthorized(true);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem(
                  "fullName",
                  `${response.data.username} ${response.data.lastName}`
                );
              }

              // handle success
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
                username: "",
                password: "",
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
          <label htmlFor="username">User name</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={(e) => this.handelInput(e)}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e) => this.handelInput(e)}
          />
          <br />
          <br />
          <button type="submit">
            {this.state.isLoading ? "Loading..." : "Submit"}
          </button>
          {this.state.isAuthorized ? <Navigate to="/dashboard" /> : ""}
        </form>
      </Container>
    );
  }
}
