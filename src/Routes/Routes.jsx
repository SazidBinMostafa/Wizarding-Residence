import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App"
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import HouseDetails from "../Pages/HouseDetails/HouseDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/house/:id",
          element: <HouseDetails></HouseDetails>
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
            path: "/about",
            element: <About></About>
        },
        {
            path: "/contact-us",
            element: <ContactUs></ContactUs>
        }
      ]
    },
    
  ])


export default router;