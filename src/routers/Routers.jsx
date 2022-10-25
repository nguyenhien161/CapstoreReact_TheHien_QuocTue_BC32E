import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "appLogin",
          element: <Register />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
