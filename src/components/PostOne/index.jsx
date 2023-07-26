import React from "react";
import Container from "../Container";
import { useParams } from "react-router-dom";

import { PostsData } from "../../mock/Posts";

export const PostOne = () => {
  const { id } = useParams();

  const post = PostsData.find((item) => {
    return item.id === Number(id);
  });

  return (
    <div>
      <Container>
        <ol>
          <li>id : {post.id}</li>
          <li>title:{post.title} </li>
          <li>body : {post.body}</li>
          <li>userId :{post.userId} </li>
          <li>tags :{post.tags?.join(" , ")} </li>
          <li>reactions : {post.reactions}</li>
          <br />
          <br />
        </ol>
      </Container>
    </div>
  );
};
