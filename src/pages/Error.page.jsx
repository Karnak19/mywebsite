import React from "react";
import { Alert } from "reactstrap";

import ResponsiveLayout from "../layouts/Responsive.layout.jsx";

const Error = () => {
   return (
      <ResponsiveLayout>
         <div>
            <Alert color="danger">
               404 : not found.
               <hr />
               <a href="/" className="alert-link">
                  Go back home !
               </a>
            </Alert>
         </div>
      </ResponsiveLayout>
   );
};

export default Error;
