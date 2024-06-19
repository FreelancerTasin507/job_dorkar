import React from "react";
import Footer from "../../pages/Footer/Footer";
import { Outlet } from "react-router-dom";
import Menubar from "../../pages/Menubar/Menubar";

const LoginLayout = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
