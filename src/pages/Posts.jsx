import React, { useEffect } from "react";
import Post from "../components/Post";

import Container from "../components/Container";
import useApi from "../Hooks/useApi";
import HigherOrderLayout from "../components/HigherOrderLayout";

const Posts = (props) => {
  const { get, getData, post, loading } = useApi();
  useEffect(() => {
    get("https://jsonplaceholder.typicode.com/posts");
  }, [get]);
  console.log("data from posts", props.data);

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

export default HigherOrderLayout(Posts);
