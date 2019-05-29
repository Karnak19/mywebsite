import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./TheFooter.module.css";

const TheFooter = props => {
  const [footItems, setFootItems] = useState(props.footItems());

  return (
    <Fragment>
      <footer className={styles.footer}>
        <ul className={styles.copyright}>
          <Link to="/" style={{ color: "white" }}>
            {footItems.map((li, i) => (
              <li key={i}>{li.label}</li>
            ))}
          </Link>
        </ul>
      </footer>
    </Fragment>
  );
};

export default TheFooter;
