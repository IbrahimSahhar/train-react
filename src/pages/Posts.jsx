import React, { Component } from "react";
import Post from "../components/Post";

import Container from "../components/Container";
import axios from "axios";

export default class Posts extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        // handle success
        this.setState({ data: response.data.posts });
      })
      .catch((error) => {
        // handle error
        // console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }
  render() {
    return (
      <div>
        <Container>
          {this.state.data?.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </Container>
      </div>
    );
  }
}
