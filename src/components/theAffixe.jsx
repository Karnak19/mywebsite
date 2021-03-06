import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { UncontrolledTooltip } from "reactstrap";

import styles from "./theAffixe.module.css";

const TheAffixes = props => {
  const [affixes, setAffixes] = useState([
    { id: 2, link: "../images/affixes/skit.jpg" },
    { id: 3, link: "../images/affixes/volc.jpg" },
    { id: 4, link: "../images/affixes/necro.jpg" },
    { id: 5, link: "../images/affixes/teem.jpg" },
    { id: 6, link: "../images/affixes/raging.jpg" },
    { id: 7, link: "../images/affixes/bolst.jpg" },
    { id: 8, link: "../images/affixes/sang.jpg" },
    { id: 9, link: "../images/affixes/tyra.jpg" },
    { id: 10, link: "../images/affixes/forti.jpg" },
    { id: 11, link: "../images/affixes/burst.jpg" },
    { id: 12, link: "../images/affixes/griev.jpg" },
    { id: 13, link: "../images/affixes/expl.jpg" },
    { id: 14, link: "../images/affixes/quak.jpg" },
    { id: 117, link: "../images/affixes/reap.jpg" }
  ]);
  const [run, setRun] = useState(props.run);
  return (
    <Fragment>
      {run.affixes.map(runAff => {
        {
          return affixes.map((aff, i) => {
            const affixId = `affix${runAff.id}-${i}-${Math.ceil(
              Math.random() * 10000
            )}`;
            return runAff.id === aff.id ? (
              <Fragment key={i}>
                <a href={`https://wowhead.com/affix=` + runAff.id}>
                  <img src={aff.link} className={styles.affixe} id={affixId} />
                </a>
                <UncontrolledTooltip placement="top" target={affixId}>
                  {runAff.description}
                </UncontrolledTooltip>
                {/* ENDING BUG ZONE */}
              </Fragment>
            ) : null;
          });
        }
      })}
    </Fragment>
  );
};

export default TheAffixes;
