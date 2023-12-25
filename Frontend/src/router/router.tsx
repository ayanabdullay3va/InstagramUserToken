import Login from "./../components/login/login";
import Home from "./../components/home/home";
import Register from "./../components/register/register";
import New from "./../components/NEW/new";
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "#",
    element: <div>Error page</div>,
  },
];
