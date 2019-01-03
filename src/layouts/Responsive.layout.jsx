//external dependencis
import React, { Fragment } from "react";

//my import
import NavBar from "../components/TheNavbar.jsx";
import Footer from "../components/TheFooter.jsx";

const ResponsiveLayout = ({ children }) => {
   let getFootItems = () => {
      return [{ label: `© Basile Vernouillet` }, { label: "2019" }];
   };
   return (
      <Fragment>
         {/* <NavBar /> */}
         {children}
         <Footer footItems={getFootItems} />
      </Fragment>
   );
};

export default ResponsiveLayout;
