import React, { Component, Fragment } from "react";

import styles from "./TheFooter.module.css";

export default class TheFooter extends React.Component {
   state = {};

   render() {
      return (
         <Fragment>
            <footer className={styles.footer}>
               <ul className={styles.copyright}>
                  <li>&copy; Basile Vernouillet</li>
                  <li>2018</li>
               </ul>
            </footer>
         </Fragment>
      );
   }
}
