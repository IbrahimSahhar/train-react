import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import Container from "../components/Container";
import axios from "axios";

const TodoList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Container>
        {loading
          ? "loading"
          : data.map((todo) => {
              return <ListItem key={todo.id} todo={todo} />;
            })}
      </Container>
    </div>
  );
};

export default TodoList;
