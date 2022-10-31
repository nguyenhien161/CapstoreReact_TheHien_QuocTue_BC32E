import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Admin from "../pages/admin/Admin";
import Flim from "../pages/admin/Flim";
import Users from "../pages/admin/Users";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
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
        {
          path: "Admin",
          element: <Admin />,
        },
        {
          path: "flim",
          element: <Flim />,
        },
        {
          path: "Users",
          element: <Users />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
