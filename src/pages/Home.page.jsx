import React, { Component } from "react";

import ResponsiveLayout from "../layouts/Responsive.layout.jsx";
import Carte from "../components/MyCard.jsx";

const Home = () => (
   <ResponsiveLayout>
      <div className="row">
         <Carte />
      </div>
   </ResponsiveLayout>
);

export default Home;
