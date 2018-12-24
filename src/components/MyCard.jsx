import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                     <img src={myAvatar} alt="" />
                  </span>
                  <h1>Basile Vernouillet</h1>
                  <p>Junior Web Developper</p>
               </header>
               <footer>
                  {/* TODO: Import npm fontawesome */}
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
                  <TheModal
                     buttonLabel="Get my CVs"
                     color="success"
                     className="col-xs-8"
                  />
                  <a href="/BasileVdev.pdf" download>
                     Get my CV
                  </a>
               </footer>
            </section>
         </Fragment>
      );
   }
}

export default MyCard;
