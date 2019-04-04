import React, { Fragment } from "react";

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
