import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import styles from "./TheFooter.module.css";

export default class TheFooter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         footItems: props.footItems()
      };

      this.componentDidMount = () => {
         this.setState({
            footItems: this.props.footItems()
         });
      };
   }

   render() {
      return (
         <Fragment>
            <footer className={styles.footer}>
               <ul className={styles.copyright}>
                  <Link to="/" style={{ color: "white" }}>
                     {this.state.footItems.map((li, i) => (
                        <li key={i}>{li.label}</li>
                     ))}
                  </Link>
               </ul>
            </footer>
         </Fragment>
      );
   }
}
