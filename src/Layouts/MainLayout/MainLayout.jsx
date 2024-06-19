import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Menubar from "../../pages/Menubar/Menubar";
import Footer from "../../pages/Footer/Footer";
import Loader from "../../Loader/Loader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Menubar></Menubar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default MainLayout;
