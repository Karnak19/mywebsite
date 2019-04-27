import React, { Fragment } from "react";
import { Col, Progress, CardTitle } from "reactstrap";

import styles from "./myProgress.module.css";

const MyProgress = ({ uldir, bod, crucible }) => {
   return (
      <Fragment>
         <Col lg="4" sm="6" xs="12">
            <hr />
            <CardTitle tag="h3">Uldir</CardTitle>

            <Progress
               color="info"
               className={styles.progress}
               value={uldir.normal_bosses_killed}
               max={uldir.total_bosses}
               style={{ marginTop: "5px" }}
            >
               Normal : {uldir.normal_bosses_killed} / {uldir.total_bosses}
            </Progress>
            <Progress
               color="info"
               className={styles.progress}
               value={uldir.heroic_bosses_killed}
               max={uldir.total_bosses}
               style={{ marginTop: "5px" }}
            >
               Heroic : {uldir.heroic_bosses_killed} / {uldir.total_bosses}
            </Progress>
            <Progress
               color="info"
               className={styles.progress}
               value={uldir.mythic_bosses_killed}
               max={uldir.total_bosses}
               style={{ marginTop: "5px" }}
            >
               Mythic : {uldir.mythic_bosses_killed} / {uldir.total_bosses}
            </Progress>
         </Col>
         <Col lg="4" sm="6" xs="12">
            <hr />
            <CardTitle tag="h3">Battle of Dazar'Alor</CardTitle>

            <Progress
               color="info"
               className={styles.progress}
               value={bod.normal_bosses_killed}
               max={bod.total_bosses}
               style={{ marginTop: "5px" }}
            >
               Normal : {bod.normal_bosses_killed} / {bod.total_bosses}
            </Progress>
            <Progress
               color="info"
               className={styles.progress}
               value={bod.heroic_bosses_killed}
               max={bod.total_bosses}
               style={{ marginTop: "5px" }}
            >
               Heroic : {bod.heroic_bosses_killed} / {bod.total_bosses}
            </Progress>
            <Progress
               color="info"
               className={styles.progress}
               value={bod.mythic_bosses_killed}
               max={bod.total_bosses}
               style={{ marginTop: "5px" }}
            >
               Mythic : {bod.mythic_bosses_killed} / {bod.total_bosses}
            </Progress>
         </Col>
         <Col lg={{ size: 4, offset: 0 }} sm={{ size: 6, offset: 3 }} xs={{ size: 12, offset: 0 }}>
            <hr />
            <CardTitle tag="h3">Crucible of Storm</CardTitle>

            <Progress
               color="info"
               className={styles.progress}
               value={crucible.normal_bosses_killed}
               max={crucible.total_bosses}
               style={{ marginTop: "5px" }}
            >
               Normal : {crucible.normal_bosses_killed} / {crucible.total_bosses}
            </Progress>
            <Progress
               color="info"
               className={styles.progress}
               value={crucible.heroic_bosses_killed}
               max={crucible.total_bosses}
               style={{ marginTop: "5px" }}
            >
               Heroic : {crucible.heroic_bosses_killed} / {crucible.total_bosses}
            </Progress>
            <Progress
               color="info"
               className={styles.progress}
               value={crucible.mythic_bosses_killed}
               max={crucible.total_bosses}
               style={{ marginTop: "5px" }}
            >
               Mythic : {crucible.mythic_bosses_killed} / {crucible.total_bosses}
            </Progress>
         </Col>
      </Fragment>
   );
};

export default MyProgress;
