import React from "react";
import { Outlet } from "react-router-dom";
import Menubar from "../../pages/Menubar/Menubar";
import Footer from "../../pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
