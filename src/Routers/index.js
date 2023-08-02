import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import TodoList from "../pages/TodoList";
import Counters from "../pages/Counters";
import Products from "../pages/Products";
import Tasks from "../pages/Tasks";
import Posts from "../pages/Posts";
import Form from "../pages/Form";

import PostOne from "../components/PostOne";
import ProtectedRoute from "../components/ProtectedRoute";
import { Gifs } from "../pages/Gifs";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import PostsREducer from "../pages/PostsReducer";

export const Routers = () => {
  const context = useContext(AuthContext);

  const router = useRoutes([
    {
      index: true,
      element: <Navigate to={"/form"} />,
    },
    {
      path: "/form",
      // element: <Form />,
      element: (
        <>{context.isAuthorized ? <Navigate to="/dashboard" /> : <Form />}</>
      ),
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "todoList",
          element: <TodoList />,
        },
        {
          path: "PostsREducer",
          element: <PostsREducer />,
        },
        {
          path: "counters",
          element: <Counters />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
        {
          path: "Gifs",
          element: <Gifs />,
        },

        {
          path: "posts",
          element: <Posts />,
        },
        {
          path: "posts/:id",
          element: <PostOne />,
        },
      ],
    },

    {
      path: "*",
      element: <h1>Page Is Not Found 404</h1>,
    },
  ]);

  return router;
};
