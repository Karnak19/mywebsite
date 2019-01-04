import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import styles from "./MyCard.module.css";
import myAvatar from "../assets/images/avatar.png";
import TheModal from "./TheModal.jsx";

class MyCard extends React.Component {
   state = {};
   render() {
      return (
         <Fragment>
            <section className={styles.main}>
               <header>
                  <span className={styles.avatar}>
                     <img src={myAvatar} alt="me" />
                  </span>
                  <h1 className={styles.hone}>Basile Vernouillet</h1>
                  <p>Junior Web Developper</p>
               </header>
               <ul className={styles.buttons}>
                  <li>
                     <Link to="/about">
                        <Button>About me</Button>
                     </Link>
                  </li>

                  <li>
                     <TheModal
                        buttonLabel="Get my CV"
                        color="success"
                        className="col-xs-8"
                     />
                  </li>
               </ul>
               <footer>
                  <ul className={styles.icons}>
                     <li>
                        <a href="https://github.com/Karnak19" target="_blank">
                           <FontAwesomeIcon
                              style={{
                                 marginLeft: "-58px",
                                 marginTop: "14px"
                              }}
                              icon={["fab", "github"]}
                              size="2x"
                           />
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.linkedin.com/in/basile-vernouillet"
                           target="_blank"
                        >
                           <FontAwesomeIcon
                              style={{
                                 marginLeft: "-58px",
                                 marginTop: "14px"
                              }}
                              icon={["fab", "linkedin-in"]}
                              size="2x"
                           />
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.instagram.com/basile_vern/"
                           target="_blank"
                        >
                           <FontAwesomeIcon
                              style={{
                                 marginLeft: "-58px",
                                 marginTop: "14px"
                              }}
                              icon={["fab", "instagram"]}
                              size="2x"
                           />
                        </a>
                     </li>
                  </ul>
               </footer>
            </section>
         </Fragment>
      );
   }
}

export default MyCard;
