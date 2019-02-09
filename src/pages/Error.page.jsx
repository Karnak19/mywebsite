import React from "react";
import { Alert } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ResponsiveLayout from "../layouts/Responsive.layout.jsx";

const Error = () => {
   return (
      <ResponsiveLayout>
         <div>
            <Alert color="danger">
               404 : not found.
               <hr />
               <Link to="/" className="alert-link">
                  Go back home !
               </Link>
            </Alert>
         </div>
      </ResponsiveLayout>
   );
};

export default Error;
