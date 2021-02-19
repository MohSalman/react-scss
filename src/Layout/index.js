import React from "react";
import DefaultLayout from "./DefaultLayout/DefaultLayout";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <div className="main-wrapper">
      <Header />
      <DefaultLayout />
      <Footer />
    </div>
  );
};

export default Layout;
