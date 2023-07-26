import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import TodoList from "../pages/TodoList";
import Counters from "../pages/Counters";
import Products from "../pages/Products";
import Tasks from "../pages/Tasks";
import Posts from "../pages/Posts";
import Form from "../pages/Form";

import PostOne from "../components/PostOne";
export const Routers = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/todoList",
      element: <TodoList />,
    },
    {
      path: "/counters",
      element: <Counters />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/tasks",
      element: <Tasks />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/posts/:id",
      element: <PostOne />,
    },
    {
      path: "*",
      element: <h1>Page Is Not Found 404</h1>,
    },
  ]);

  return router;
};
