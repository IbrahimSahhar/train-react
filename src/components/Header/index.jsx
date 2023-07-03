import React, { Component } from "react";
import imageProfile from "../../images/profile.jpg";
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={imageProfile} alt="profile" />
        <ul>
          <li>
            <a href="home">home</a>
          </li>
          <li>
            <a href="about">about</a>
          </li>
          <li>
            <a href="content">content</a>
          </li>
          <li>
            <a href="ask">ask</a>
          </li>
        </ul>
      </div>
    );
  }
}
