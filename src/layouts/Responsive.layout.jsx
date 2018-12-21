//external dependencis
import React, { Fragment } from "react";

//my import
import NavBar from "../components/TheNavbar.jsx";
// import Footer from "../components/footer/Footer.jsx";

const ResponsiveLayout = ({ children }) => {
   return (
      <Fragment>
         {/* <NavBar /> */}
         {children}
         {/* <Footer /> */}
      </Fragment>
   );
};

export default ResponsiveLayout;
