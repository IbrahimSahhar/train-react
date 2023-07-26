import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container";

const Post = ({ id, title }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <ol>
          <li>id : {id}</li>
          <li>title:{title} </li>
          {/* <Link to={`/posts/${id}`}>Show More </Link> */}
          <button onClick={() => navigate(`/posts/${id}`)}>Show More</button>
          <br />
          <br />
        </ol>
      </Container>
    </div>
  );
};

export default Post;
