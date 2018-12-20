import React, { Component, Fragment } from "react";

import styles from "./MyCard.module.css";
import myAvatar from "../assets/images/avatar.png";

class MyCard extends Component {
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
                        <a href="#" className="fa-linkedin">
                           Twitter
                        </a>
                     </li>
                     <li>
                        <a href="#" className="fa-instagram">
                           Instagram
                        </a>
                     </li>
                     <li>
                        <a href="#" className="fa-github">
                           Facebook
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
