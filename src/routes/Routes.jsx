import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "services",
          element: <Services></Services>,
        },
        {
          path: "/addJob",
          element: <AddJob></AddJob>,
        },
        {
          path: "/MyJobs",
          element: <MyJobs></MyJobs>,
        },
        // {
        //   path: "services/:id",
        //   element: (
        //     <PrivateRoute>
        //       <ServiceDetails></ServiceDetails>
        //     </PrivateRoute>
        //   ),
        // },
        // {
        //   path: "login",
        //   element: <Login></Login>,
        // },
        // {
        //   path: "register",
        //   element: <Register></Register>,
        // },
      ],
    },
  ]);
  
  export default router;