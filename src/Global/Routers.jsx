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

export const Routers = (isAuthorized, setIsAuthorized, logOut) => {
  const router = useRoutes([
    {
      index: true,
      element: <Navigate to={"/form"} />,
    },
    {
      path: "/form",
      // element: <Form />,
      element: (
        <>
          {isAuthorized ? (
            <Navigate to="/dashboard" />
          ) : (
            <Form
              setIsAuthorized={setIsAuthorized}
              isAuthorized={isAuthorized}
            />
          )}
        </>
      ),
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute isAuthorized={isAuthorized} logOut={logOut} />,
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
