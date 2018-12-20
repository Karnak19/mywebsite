import React from "react";
import {
   BrowserRouter as Router,
   Route,
   Redirect,
   Switch
} from "react-router-dom";

import Home from "./pages/Home.page.jsx";
import Error from "./pages/Error.page.jsx";

export default function({ login }) {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Home} />
            <Route component={Error} />
         </Switch>
      </Router>
   );
}
