import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class TheFooter extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         affixes: [
            { id: "2", link: "../images/skit.jpg" },
            { id: "3", link: "../images/volc.jpg" },
            { id: "4", link: "../images/necro.jpg" },
            { id: "5", link: "../images/teem.jpg" },
            { id: "6", link: "../images/raging.jpg" },
            { id: "7", link: "../images/bolst.jpg" },
            { id: "8", link: "../images/sang.jpg" },
            { id: "9", link: "../images/tyra.jpg" },
            { id: "10", link: "../images/forti.jpg" },
            { id: "11", link: "../images/burst.jpg" },
            { id: "12", link: "../images/griev.jpg" },
            { id: "13", link: "../images/expl.jpg" },
            { id: "14", link: "../images/quak.jpg" },
            { id: "117", link: "../images/reap.jpg" }
         ]
      };
   }

   render() {
      return (
         <Fragment>
            {this.state.affixes.map((pics, u) => {
               if (runs.affixes === pics.name) {
                  return <img style={{ minHeight: "200px" }} src={pics.link} />;
               }
            })}
         </Fragment>
      );
   }
}
