import React, { Component } from "react";
import Post from "../components/Post";

import { PostsData } from "../mock/Posts";

import Container from "../components/Container";

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Container>
          {PostsData.map((post) => {
            return <Post {...post} />;
          })}
        </Container>
      </div>
    );
  }
}
