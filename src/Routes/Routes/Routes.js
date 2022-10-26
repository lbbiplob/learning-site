import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses";
import Blogs from "../../Pages/Blogs/Blogs";
import FAQ from "../../Pages/FAQ/FAQ";
import Register from "../../UserAuthentication/Register/Register"
import Login from "../../UserAuthentication/Login/Login"
import Logout from "../../UserAuthentication/LogOut/LogOut"
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import CoursesDIv from "../../layouts/CoursesDIv";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <CoursesDIv></CoursesDIv>,
        children: [
          {
            path: "/courses",
            element: <Courses></Courses>,
            loader: () => fetch("http://localhost:5000/courses"),
          },
          {
            path: "/courses/:id",
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) =>
            fetch(`http://localhost:5000/course/${params.id}`),
          },
        ],
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/logout",
        element: <Logout></Logout>,
      },
    ],
  },
]);