import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App"
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import CastleDetails from "../Pages/CastleDetails/CastleDetails";
import CastleInfo from "../Pages/CastleInfo/CastleInfo";
import PrivateRoute from "./PrivateRoute";
import Castle from "../Pages/Castle/Castle";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/castle/:id",
        element: <CastleInfo></CastleInfo>
      },
      {
        path: "/castle/details/:id",
        element: <PrivateRoute><CastleDetails></CastleDetails></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>
      },
      {
        path: "/castle",
        element: <Castle></Castle>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/settings",
        element: <PrivateRoute><Settings></Settings></PrivateRoute>
      }
      
    ]
  },

])


export default router;