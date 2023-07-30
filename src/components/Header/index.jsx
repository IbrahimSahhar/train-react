import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import imageProfile from "../../images/profile.jpg";

import "./style.css";

export default class Header extends Component {
  state = {
    fullName: "",
  };
  componentDidMount() {
    const fullName = localStorage.getItem("fullName");
    this.setState({ fullName: fullName });
  }
  render() {
    return (
      <div className="header">
        <img className="logo" src={imageProfile} alt="profile" />
        <p
          style={{
            marginLeft: "1.25rem",
            fontSize: "1.25rem",
          }}
        >
          Hello :
          <span style={{ color: "red", fontWeight: "bold" }}>
            {this.state.fullName}
          </span>
        </p>
        <ul>
          <li>
            <NavLink to="/dashboard">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/about">about</NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/todoList">TodoList</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/counters">
              {({ isActive }) => (isActive ? "Counters Active" : "Counters")}
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/Gifs">Gifs</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/posts">Posts</NavLink>
          </li>
          <li>
            <button
              style={{ padding: "0.3125rem 0.9375rem", cursor: "pointer" }}
              onClick={() => this.props.logOut()}
            >
              Log out
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
