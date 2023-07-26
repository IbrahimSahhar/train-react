import React, { Component } from "react";
import imageProfile from "../../images/profile.jpg";

import { Link } from "react-router-dom";
import "./style.css";

export default class Header extends Component {
  render({ myPage } = this.props) {
    return (
      <div className="header">
        <img className="logo" src={imageProfile} alt="profile" />
        <ul>
          <li className={myPage === "home" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={myPage === "about" ? "active" : ""}>
            <Link to="about">about</Link>
          </li>

          <li className={myPage === "todoList" ? "active" : ""}>
            <Link to="todoList">TodoList</Link>
          </li>
          <li className={myPage === "counters" ? "active" : ""}>
            <Link to="counters">Counters</Link>
          </li>
          <li className={myPage === "form" ? "active" : ""}>
            <Link to="form">Form</Link>
          </li>
          <li className={myPage === "products" ? "active" : ""}>
            <Link to="products">Products</Link>
          </li>
          <li className={myPage === "tasks" ? "active" : ""}>
            <Link to="tasks">Tasks</Link>
          </li>
          <li className={myPage === "posts" ? "active" : ""}>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </div>
    );
  }
}
