// import pages 
import LogInForm from "../pages/LoginForm";
import Landing from "../pages/Landing"
import Dashboard from "../pages/Dashboard"

// define protected routes
const protectedRoutes = [
  { path: "/dashboard", component: Dashboard },
];

// define public routes
const publicRoutes = [
  { path: "/", exact: true, component: Landing },
  { path: "/login", component: LogInForm }
];

// export routes
export { protectedRoutes, publicRoutes };
