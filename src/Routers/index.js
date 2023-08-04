import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import PostOne from "../components/PostOne";
import ProtectedRoute from "../components/ProtectedRoute";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const TodoList = React.lazy(() => import("../pages/TodoList"));
const Counters = React.lazy(() => import("../pages/Counters"));
const Products = React.lazy(() => import("../pages/Products"));
const Tasks = React.lazy(() => import("../pages/Tasks"));
const Posts = React.lazy(() => import("../pages/Posts"));
const Form = React.lazy(() => import("../pages/Form"));
const Gifs = React.lazy(() => import("../pages/Gifs"));
const PostsREducer = React.lazy(() => import("../pages/PostsReducer"));

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
