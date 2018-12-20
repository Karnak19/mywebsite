import React, { Component, Fragment } from "react";

class MyCard extends Component {
   state = {};
   render() {
      return (
         <Fragment>
            <div className="col-lg-4 offset-lg-4">
               <div className="col-lg-12">
                  <h1>Basile Vernouillet</h1>
                  <p>French Web Developper Junior</p>
               </div>
            </div>
         </Fragment>
      );
   }
}

export default MyCard;
