import React from "react";
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
import classnames from "classnames";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            { id: "1", label: "World of Warcraft" },
            { id: "2", label: "Ice Hockey" },
            { id: "3", label: "ReactJS" }
         ],
         raiderIo: [],
         bestRuns: [],
         dungeonPics: [
            { name: "AD", link: "../images/dungeons/AD.jpg" },
            { name: "FH", link: "../images/dungeons/FH.jpg" },
            { name: "KR", link: "../images/dungeons/KR.jpg" },
            { name: "ML", link: "../images/dungeons/ML.jpg" },
            { name: "SIEGE", link: "../images/dungeons/SIEGE.jpg" },
            { name: "SOTS", link: "../images/dungeons/SOTS.jpg" },
            { name: "TD", link: "../images/dungeons/TD.jpg" },
            { name: "TOS", link: "../images/dungeons/TOS.jpg" },
            { name: "UNDR", link: "../images/dungeons/UNDR.jpg" },
            { name: "WM", link: "../images/dungeons/WM.jpg" }
         ],
         affixes: [
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
         ],
         myUldirProgress: [],
         myBoDProgress: [],
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
            "https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=mythic_plus_best_runs%3Aall",
            { headers: { Accept: "application/json" } }
         )
         .then(response => {
            this.setState({
               raiderIo: response.data,
               bestRuns: response.data["mythic_plus_best_runs"],
               isPending: false
            });
         })
         .catch(() => this.setState({ isError: true }));
      axios
         .get(
            "https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=raid_progression",
            { headers: { Accept: "application/json" } }
         )
         .then(response => {
            this.setState({
               myUldirProgress: response.data.raid_progression["uldir"],
               myBoDProgress: response.data.raid_progression["battle-of-dazaralor"],
               isPending: false
            });
         })
         .catch(() => this.setState({ isError: true }));
   }

   render() {
      if (this.state.isPending) {
         return (
            <ResponsiveLayout>
               <Spinner color="success" style={{ width: "3rem", height: "3rem" }} />
            </ResponsiveLayout>
         );
      }
      return (
         <ResponsiveLayout>
            <section className={styles.container}>
               <h1>About me</h1>

               <Nav tabs>
                  {this.state.tabs.map((tabs, i) => (
                     <NavItem className="col-lg-4" key={i}>
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
               </Nav>
               <TabContent activeTab={this.state.activeTab} style={{ overflowY: "auto", overflowX: "hidden" }}>
                  <TabPane id="1" tabId="1" className={styles.content}>
                     <Row>
                        <Col lg="6" sm="4" xs="12">
                           <p>
                              World of Warcraft is a great game. I mostly enjoy the End-game content, particularly{" "}
                              <span href="#" id="pveTooltip">
                                 PvE
                              </span>
                              . In End-game PvE, you need a lot of teamwork, to make a 20-man team cooperate in the same
                              way. Being selfish does not work in this environment, as every player here will play a
                              huge role to defeat each bosses.
                           </p>
                        </Col>
                        <Col lg="6" sm="8" xs="12" style={{ listStyle: "none" }}>
                           <div id="my_char">
                              <h4>My Character :</h4>
                              <li>
                                 <a
                                    href={this.state.raiderIo.profile_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: "1.4rem" }}
                                 >
                                    {this.state.raiderIo.name}
                                 </a>
                              </li>
                              <li>
                                 <a href={this.state.raiderIo.profile_url} target="_blank" rel="noopener noreferrer">
                                    <img src={this.state.raiderIo.thumbnail_url} alt={this.state.raiderIo.name} />
                                 </a>
                              </li>
                              <li>
                                 {this.state.raiderIo.race} {this.state.raiderIo.class}
                              </li>
                              <li>{this.state.raiderIo.faction} proud !</li>
                           </div>
                           <hr />
                           <div id="my_progress">
                              <h4>
                                 <span href="#" id="bfa">
                                    Battle for Azeroth
                                 </span>{" "}
                                 <span href="#" id="raid">
                                    Progression
                                 </span>
                              </h4>
                              <Row>
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
                                       Normal : {this.state.myUldirProgress.normal_bosses_killed} /{" "}
                                       {this.state.myUldirProgress.total_bosses}
                                    </Progress>
                                    <Progress
                                       color="info"
                                       className={styles.progress}
                                       value={this.state.myUldirProgress.heroic_bosses_killed}
                                       max={this.state.myUldirProgress.total_bosses}
                                       style={{ marginTop: "5px" }}
                                    >
                                       Heroic : {this.state.myUldirProgress.heroic_bosses_killed} /{" "}
                                       {this.state.myUldirProgress.total_bosses}
                                    </Progress>
                                    <Progress
                                       color="info"
                                       className={styles.progress}
                                       value={this.state.myUldirProgress.mythic_bosses_killed}
                                       max={this.state.myUldirProgress.total_bosses}
                                       style={{ marginTop: "5px" }}
                                    >
                                       Mythic : {this.state.myUldirProgress.mythic_bosses_killed} /{" "}
                                       {this.state.myUldirProgress.total_bosses}
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
                                       Normal : {this.state.myBoDProgress.normal_bosses_killed} /{" "}
                                       {this.state.myBoDProgress.total_bosses}
                                    </Progress>
                                    <Progress
                                       color="info"
                                       className={styles.progress}
                                       value={this.state.myBoDProgress.heroic_bosses_killed}
                                       max={this.state.myBoDProgress.total_bosses}
                                       style={{ marginTop: "5px" }}
                                    >
                                       Heroic : {this.state.myBoDProgress.heroic_bosses_killed} /{" "}
                                       {this.state.myBoDProgress.total_bosses}
                                    </Progress>
                                    <Progress
                                       color="info"
                                       className={styles.progress}
                                       value={this.state.myBoDProgress.mythic_bosses_killed}
                                       max={this.state.myBoDProgress.total_bosses}
                                       style={{ marginTop: "5px" }}
                                    >
                                       Mythic : {this.state.myBoDProgress.mythic_bosses_killed} /{" "}
                                       {this.state.myBoDProgress.total_bosses}
                                    </Progress>
                                 </Col>
                              </Row>
                           </div>
                           <hr />
                           <div id="my_dungeons">
                              <h4>
                                 My best{" "}
                                 <span href="#" id="mplus">
                                    Mythic+
                                 </span>{" "}
                                 runs
                              </h4>
                              {this.state.bestRuns.map((runs, i) => (
                                 // Loop the best of each dungeons.
                                 <Col xs="12" lg={{ size: 12, offset: 0 }} key={i}>
                                    <hr />
                                    <Card inverse>
                                       {this.state.dungeonPics.map((pics, u) => {
                                          if (runs.short_name === pics.name) {
                                             return <CardImg style={{ minHeight: "200px" }} src={pics.link} />;
                                          }
                                       })}
                                       <CardImgOverlay className={styles.overlay}>
                                          <CardTitle style={{ fontSize: "1.4rem" }}>
                                             {runs.dungeon}
                                             {" +"}
                                             {runs.mythic_level}
                                          </CardTitle>
                                          <CardText>
                                             <li>Score : {runs.score}</li>
                                             {runs.num_keystone_upgrades === 1 ? (
                                                <li>
                                                   Upgraded : <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
                                                </li>
                                             ) : runs.num_keystone_upgrades === 2 ? (
                                                <li>
                                                   Upgraded : <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
                                                   <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
                                                </li>
                                             ) : runs.num_keystone_upgrades === 3 ? (
                                                <li>
                                                   Upgraded : <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
                                                   <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
                                                   <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
                                                </li>
                                             ) : (
                                                <li>Not upgraded</li>
                                             )}
                                             <li>
                                                Affixes :
                                                {runs.affixes.map(runAff => {
                                                   {
                                                      return this.state.affixes.map(aff => {
                                                         return runAff.id === aff.id ? (
                                                            <img src={aff.link} className={styles.affixe} />
                                                         ) : null;
                                                      });
                                                   }
                                                })}
                                             </li>
                                             <li>
                                                <Button
                                                   href={runs.url}
                                                   target="_blank"
                                                   rel="noopener norefferer"
                                                   outline
                                                   color="warning"
                                                   size="sm"
                                                >
                                                   See on Raider.io
                                                </Button>
                                             </li>
                                          </CardText>
                                       </CardImgOverlay>
                                    </Card>
                                 </Col>
                              ))}
                           </div>
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
               Player versus Environment : Fighting monsters (which are bots in fact), alone or in group.
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="bottom" target="bfa">
               Battle For Azeroth is the lattest version of World of Warcraft, released the 08/14/18
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="bottom" target="mplus">
               Mythic+ is a recent exciting thing in World of Warcraft. It is a new mode of content that offers players
               an endlessly scaling challenge in 5-player dungeons. It can be really challenging and good if you don't
               have 19 people to play with ! Depending on the dungeon, the time you used to complete it and the key
               difficulty, it gives you points !
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="bottom" target="raid">
               The term progression mean the number of boss of the actual raid you have killed with your group. A raid
               is a huge 20-man instanced zone where there is several bosses (in general between 6 and 14).
            </UncontrolledTooltip>
         </ResponsiveLayout>
      );
   }
}
