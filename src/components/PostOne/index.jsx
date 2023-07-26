import React, { Component } from "react";

import Container from "../Container";
import { useParams } from "react-router-dom";

import axios from "axios";

const PostOne = () => {
  const { id } = useParams();

  return <PostsDAta id={id} />;
};

export default PostOne;

class PostsDAta extends Component {
  state = {
    data: {},
    isLoading: false,
  };

  async componentDidMount() {
    // Solve one
    // try {
    //   const { data } = await axios.get(`https://dummyjson.com/posts`);
    //   this.setState({ data, isLoading: true });
    // } catch (error) {
    //   console.log(error);
    // }

    // Solve Two
    // fetch("https://dummyjson.com/posts")
    //   .then((response) => response.json)
    //   .then((json) => this.setState({ data: json }))
    //   .catch((err) => console.error(err))
    //   .finally(() => this.setState({ isLoading: false }));

    // Solve Three
    this.setState({
      isLoading: true,
    });
    axios
      .get(`https://dummyjson.com/posts/${this.props.id}`)
      .then((response) => {
        // handle success.

        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <Container>
        {this.state.isLoading ? (
          <h3>loading</h3>
        ) : (
          <ol>
            <li>id : {this.state.data?.id}</li>
            <li>title:{this.state.data?.title} </li>
            <li>body : {this.state.data?.body}</li>
            <li>userId :{this.state.data?.userId} </li>
            <li>tags :{this.state.data?.tags?.join(" , ")} </li>
            <li>reactions : {this.state.data?.reactions}</li>
            <br />
            <br />
          </ol>
        )}
      </Container>
    );
  }
}
