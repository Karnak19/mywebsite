import React, { Fragment, Component } from "react";
import {
   Button,
   TabContent,
   TabPane,
   Nav,
   NavItem,
   NavLink,
   Row,
   Col,
   UncontrolledTooltip,
   Progress,
   Card,
   CardText,
   CardTitle,
   CardImg,
   CardImgOverlay,
   CardBody,
   Spinner
} from "reactstrap";
import axios from "axios";

import styles from "./myProgress.module.css";

class mMyProgress extends Component {
   constructor(props) {
      super(props);
      this.state = {
         myUldirProgress: [],
         myBoDProgress: []
      };
   }

   componentDidMount() {
      this.setState({ isPending: true });
      axios
         .get("https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=raid_progression", {
            headers: { Accept: "application/json" }
         })
         .then(response => {
            this.setState({
               myUldirProgress: response.data.raid_progression["uldir"],
               myBoDProgress: response.data.raid_progression["battle-of-dazaralor"],
               isPending: false
            });
         })
         .catch(() => this.setState({ isError: true }));
   }

   componentDidMount;
   render() {
      return (
         <Fragment>
            <Col lg="6" sm="6" xs="12">
               <hr />
               <CardTitle tag="h3">Uldir</CardTitle>

               <Progress
                  color="info"
                  className={styles.progress}
                  value={this.state.myUldirProgress.normal_bosses_killed}
                  max={this.state.myUldirProgress.total_bosses}
                  style={{ marginTop: "5px" }}
               >
                  Normal : {this.state.myUldirProgress.normal_bosses_killed} / {this.state.myUldirProgress.total_bosses}
               </Progress>
               <Progress
                  color="info"
                  className={styles.progress}
                  value={this.state.myUldirProgress.heroic_bosses_killed}
                  max={this.state.myUldirProgress.total_bosses}
                  style={{ marginTop: "5px" }}
               >
                  Heroic : {this.state.myUldirProgress.heroic_bosses_killed} / {this.state.myUldirProgress.total_bosses}
               </Progress>
               <Progress
                  color="info"
                  className={styles.progress}
                  value={this.state.myUldirProgress.mythic_bosses_killed}
                  max={this.state.myUldirProgress.total_bosses}
                  style={{ marginTop: "5px" }}
               >
                  Mythic : {this.state.myUldirProgress.mythic_bosses_killed} / {this.state.myUldirProgress.total_bosses}
               </Progress>
            </Col>
            <Col lg="6" sm="6" xs="12">
               <hr />
               <CardTitle tag="h3">Battle of Dazar'Alor</CardTitle>

               <Progress
                  color="info"
                  className={styles.progress}
                  value={this.state.myBoDProgress.normal_bosses_killed}
                  max={this.state.myBoDProgress.total_bosses}
                  style={{ marginTop: "5px" }}
               >
                  Normal : {this.state.myBoDProgress.normal_bosses_killed} / {this.state.myBoDProgress.total_bosses}
               </Progress>
               <Progress
                  color="info"
                  className={styles.progress}
                  value={this.state.myBoDProgress.heroic_bosses_killed}
                  max={this.state.myBoDProgress.total_bosses}
                  style={{ marginTop: "5px" }}
               >
                  Heroic : {this.state.myBoDProgress.heroic_bosses_killed} / {this.state.myBoDProgress.total_bosses}
               </Progress>
               <Progress
                  color="info"
                  className={styles.progress}
                  value={this.state.myBoDProgress.mythic_bosses_killed}
                  max={this.state.myBoDProgress.total_bosses}
                  style={{ marginTop: "5px" }}
               >
                  Mythic : {this.state.myBoDProgress.mythic_bosses_killed} / {this.state.myBoDProgress.total_bosses}
               </Progress>
            </Col>
         </Fragment>
      );
   }
}

export default mMyProgress;
