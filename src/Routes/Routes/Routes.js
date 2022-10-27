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
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import ChackOut from "../../Pages/ChackOut/ChackOut";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import DownLoadPdf from "../../Pages/DownloadPdf/DownLoadPdf";
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
            loader: () =>
              fetch("https://backend-assingment-10.vercel.app/courses"),
          },
          {
            path: "/courses/:id",
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) =>
              fetch(
                `https://backend-assingment-10.vercel.app/course/${params.id}`
              ),
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
        path: "/downloadpdf",
        element: <DownLoadPdf></DownLoadPdf>,
      },
      {
        path: "/ww",
        element: <DownLoadPdf></DownLoadPdf>,
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
      {
        path: "/chackout/:id",
        element: (
          <PrivetRoutes>
            {" "}
            <ChackOut></ChackOut>{" "}
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://backend-assingment-10.vercel.app/course/${params.id}`),
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);