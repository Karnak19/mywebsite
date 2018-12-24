import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import logo from "./logo.svg";
import "./App.css";
import Router from "./Router.jsx";

library.add(fab, faFilePdf);

class App extends Component {
   render() {
      return (
         <div className="App">
            <Router />
         </div>
      );
   }
}

export default App;
