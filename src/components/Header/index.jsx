import React, { Component } from "react";
import imageProfile from "../../images/profile.jpg";
import "./style.css";

export default class Header extends Component {
  render({ myPage } = this.props) {
    return (
      <div className="header">
        <img className="logo" src={imageProfile} alt="profile" />
        <ul>
          <li className={myPage == "home" ? "active" : ""}>
            <a href="home">home</a>
          </li>
          <li className={myPage == "about" ? "active" : ""}>
            <a href="about">about</a>
          </li>
          <li className={myPage == "content" ? "active" : ""}>
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
