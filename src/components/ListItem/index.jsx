import React, { Component } from "react";

export default class listItem extends Component {
  render({ id, name, number } = this.props.todo) {
    return (
      <div>
        <li>
          id : {id} || name :{name} || number : {number}{" "}
        </li>
      </div>
    );
  }
}
