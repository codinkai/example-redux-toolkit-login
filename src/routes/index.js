import React from "react";
import { Redirect } from "react-router-dom";

// pages 
import LogInForm from "../pages/LoginForm";
import Dashboard from "../pages/Dashboard"


const protectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];


const publicRoutes = [
  { path: "/login", component: LogInForm }
];

export { protectedRoutes, publicRoutes };
