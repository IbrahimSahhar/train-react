import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import imageProfile from "../../images/profile.jpg";

import "./style.css";

export default class Header extends Component {
  render({ myPage } = this.props) {
    return (
      <div className="header">
        <img className="logo" src={imageProfile} alt="profile" />
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "brown" }
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about">about</NavLink>
          </li>

          <li>
            <NavLink to="todoList">TodoList</NavLink>
          </li>
          <li>
            <NavLink to="counters">
              {({ isActive }) => (isActive ? "Counters Active" : "Counters")}
            </NavLink>
          </li>
          <li>
            <NavLink to="form">Form</NavLink>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          <li>
            <NavLink to="tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="posts">Posts</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
