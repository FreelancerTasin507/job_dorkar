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
        {
          path: "services/:id",
          element: (
            <PrivateRoute>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
          ),
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  
  export default router;