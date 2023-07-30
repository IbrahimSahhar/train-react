import React, { useEffect, useState } from "react";
import Post from "../components/Post";

import Container from "../components/Container";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        // handle success
        setData(response.data.posts);
      })
      .catch((error) => {
        // handle error
        // console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }, []);

  return (
    <div>
      <Container>
        {data?.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </Container>
    </div>
  );
};

export default Posts;
