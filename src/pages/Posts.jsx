import React, { useEffect } from "react";
import Post from "../components/Post";

import Container from "../components/Container";
import useApi from "../Hooks/useApi";

const Posts = () => {
  const { get, getData, post, postData, loading } = useApi();
  useEffect(() => {
    get("https://jsonplaceholder.typicode.com/posts");
    console.log(getData);
  }, []);

  console.log(postData);
  return (
    <div>
      <Container>
        <button
          onClick={() =>
            post("https://jsonplaceholder.typicode.com/posts", {
              title: "Dave watched as the forest burned up on the hill.",
            })
          }
        >
          submit
        </button>
        {loading
          ? "loading"
          : getData?.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
      </Container>
    </div>
  );
};

export default Posts;
