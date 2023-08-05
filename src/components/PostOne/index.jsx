import React, { Component, useEffect } from "react";

import Container from "../Container";
import { useParams } from "react-router-dom";

import useApi from "../../Hooks/useApi";

const PostOne = () => {
  const { id } = useParams();
  const { get, getData, loading } = useApi();
  useEffect(() => {
    get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(getData);
  }, [get, getData, id]);

  return <PostsDAta id={id} getData={getData} loading={loading} />;
};

export default PostOne;

class PostsDAta extends Component {
  render({ getData, loading } = this.props) {
    return (
      <Container>
        {loading ? (
          <h3>loading</h3>
        ) : (
          <ol>
            <li>id : {getData.id}</li>
            <li>title:{getData.title} </li>
            <li>body : {getData.body}</li>
            <li>userId :{getData.userId} </li>
            <li>tags :{getData.tags?.join(" , ")} </li>
            <li>reactions : {getData.reactions}</li>
            <br />
            <br />
          </ol>
        )}
      </Container>
    );
  }
}
