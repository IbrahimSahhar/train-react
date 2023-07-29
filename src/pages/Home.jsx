import Container from "../components/Container";

import React, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});

  const handelInput = (e) => {
    const { id, value } = e.target;
    setTodo({
      ...todo,
      [id]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({
      id: "",
      username: "",
      body: "",
    });
  };
  return (
    <div>
      <Container>
        <form onSubmit={(e) => handelSubmit(e)}>
          <label htmlFor="id">id</label>
          <input
            type="number"
            id="id"
            required
            onChange={(e) => handelInput(e)}
            value={todo.id}
          />
          <br />
          <br />
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            required
            onChange={(e) => handelInput(e)}
            value={todo.username}
          />
          <br />
          <br />
          <label htmlFor="body">body</label>
          <input
            type="text"
            id="body"
            required
            onChange={(e) => handelInput(e)}
            value={todo.body}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>

        {todos?.map((todo) => {
          return (
            <div>
              <ul>
                <li> id = : {todo.id}</li>
                <li> username = : {todo.username}</li>
                <li> body = : {todo.body}</li>
              </ul>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Home;
