import React from "react";
import {
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
   CardTitle
} from "reactstrap";
import classnames from "classnames";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import ResponsiveLayout from "../layouts/Responsive.layout.jsx";
import styles from "./About.page.module.css";

export default class About extends React.Component {
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         tooltipOpen: false,
         activeTab: "1",
         tabs: [
            {
               id: "1",
               label: "World of Warcraft"
            },
            { id: "2", label: "Ice Hockey", imgLink: "" },
            { id: "3", label: "Snowboard", imgLink: "" }
         ],
         raiderIo: [],
         bestRuns: [],
         myProgress: [],
         isPending: false,
         isError: false
      };
   }

   toggle(tab) {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   }

   componentDidMount() {
      this.setState({ isPending: true });
      axios
         .get(
            "https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=mythic_plus_best_runs",
            { headers: { Accept: "application/json" } }
         )
         .then(response => {
            this.setState({
               raiderIo: response.data,
               bestRuns: response.data.mythic_plus_best_runs,
               isPending: false
            });
            console.log(response.data.mythic_plus_best_runs);
         })
         .catch(() => this.setState({ isError: true }));
      axios
         .get(
            "https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=raid_progression",
            { headers: { Accept: "application/json" } }
         )
         .then(response => {
            this.setState({
               myProgress: response.data.raid_progression,
               isPending: false
            });
            console.log(response.data.raid_progression);
         })
         .catch(() => this.setState({ isError: true }));
   }

   render() {
      if (this.state.isPending) {
         return <ResponsiveLayout>Fancy spinner here</ResponsiveLayout>;
      }
      return (
         <ResponsiveLayout>
            <section className={styles.container}>
               <h1>About me</h1>
               <Nav tabs>
                  {this.state.tabs.map(tabs => (
                     <NavItem>
                        <NavLink
                           className={classnames({
                              active: this.state.activeTab === tabs.id
                           })}
                           onClick={() => {
                              this.toggle(tabs.id);
                           }}
                        >
                           {tabs.label}
                        </NavLink>
                     </NavItem>
                  ))}
                  {/* TODO: Fill this. Doing a map on this would be cool */}
               </Nav>
               <TabContent
                  activeTab={this.state.activeTab}
                  style={{ overflowY: "auto", overflowX: "hidden" }}
               >
                  <TabPane id="1" tabId="1" className={styles.content}>
                     <Row>
                        <Col lg="4" sm="12" xs="12">
                           <p>
                              World of Warcraft is a great game. I mostly enjoy
                              the End-game content, particularly{" "}
                              <span href="#" id="pveTooltip">
                                 PvE
                              </span>
                              . In End-game PvE, you need a lot of teamwork, to
                              make a 20-man team cooperate in the same way.
                              Being selfish does not work in this environment,
                              as every player here will play a huge role to
                              defeat each bosses.
                           </p>
                        </Col>
                        <Col
                           lg="8"
                           sm="12"
                           xs="12"
                           style={{ listStyle: "none" }}
                        >
                           <h3>My Character :</h3>
                           <li>
                              <a
                                 href={this.state.raiderIo.profile_url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 {this.state.raiderIo.name}
                              </a>
                           </li>
                           <li>
                              <img
                                 src={this.state.raiderIo.thumbnail_url}
                                 alt={this.state.raiderIo.name}
                              />
                           </li>
                           <li>
                              {this.state.raiderIo.race}{" "}
                              {this.state.raiderIo.class}
                           </li>
                           <li>{this.state.raiderIo.faction} proud !</li>
                           <Progress
                              animated
                              className={styles.progress}
                              value="7"
                              max="8"
                              size="3"
                           >
                              Mythic Uldir : 7/8
                           </Progress>
                           <Row style={{ marginTop: "20px" }}>
                              {this.state.bestRuns.map((runs, i) => (
                                 <Col sm="4" key={i}>
                                    <Card body>
                                       <CardTitle>
                                          <a
                                             href={runs.url}
                                             target="_blank"
                                             rel="noopener norefferer"
                                          >
                                             {runs.dungeon} {runs.mythic_level}
                                          </a>
                                       </CardTitle>
                                       <CardText>Score : {runs.score}</CardText>
                                    </Card>
                                 </Col>
                              ))}
                           </Row>
                        </Col>
                     </Row>
                  </TabPane>
                  <TabPane tabId="2">
                     <Row>
                        <Col sm="12">
                           <h4>Soon</h4>
                        </Col>
                     </Row>
                  </TabPane>
                  <TabPane tabId="3">
                     <Row>
                        <Col sm="12">
                           <h4>Soon</h4>
                        </Col>
                        <Col sm="6" />
                     </Row>
                  </TabPane>
               </TabContent>
            </section>
            <UncontrolledTooltip placement="bottom" target="pveTooltip">
               Player versus Environment : Fighting monsters (which are bots in
               fact), alone or in group.
            </UncontrolledTooltip>
         </ResponsiveLayout>
      );
   }
}
