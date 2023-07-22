import React, { Component } from "react";
import ListItem from "../components/ListItem";

const data = [
  { id: 1, name: "ibrahim", number: "059232313123" },
  { id: 2, name: "sameh", number: "059232313123" },
  { id: 3, name: "dana", number: "059232313123" },
  { id: 4, name: "Lyle", number: "059234213123" },
];

export default class index extends Component {
  state = {
    data: data,
  };
  render() {
    return (
      <div>
        {data.map((todo) => {
          return <ListItem key={todo.id} todo={todo} />;
        })}
      </div>
    );
  }
}
