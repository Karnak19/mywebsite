import React from "react";
import { Alert } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ResponsiveLayout from "../layouts/Responsive.layout.jsx";

const About = () => {
   return (
      <ResponsiveLayout>
         <div>
            <Alert color="success">
               Coming soon...
               <hr />
               <Link to="/" className="alert-link">
                  Go back home !
               </Link>
            </Alert>
         </div>
      </ResponsiveLayout>
   );
};

export default About;
