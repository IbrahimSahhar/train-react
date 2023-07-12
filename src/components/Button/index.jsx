import React, { Component } from "react";
import "./style.css";

export default class Button extends Component {
  render({ title, func } = this.props) {
    console.log(func);
    return (
      <div>
        <button className="button-comp" onClick={func}>
          {title}
        </button>
      </div>
    );
  }
}
