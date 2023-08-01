import React, { Component } from "react";

export default class listItem extends Component {
  render({ userId, id, title, completed } = this.props.todo) {
    return (
      <ul>
        <li>user id : {userId}</li>
        <li>id : {id}</li>
        <li>title : {title}</li>
        <li>completed : {completed ? "completed" : "not completed"}</li>
        <br />
        <hr />
        <br />
      </ul>
    );
  }
}
