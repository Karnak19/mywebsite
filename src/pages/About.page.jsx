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
   CardTitle,
   CardImg,
   CardImgOverlay
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
            { id: "3", label: "ReactJS", imgLink: "" }
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
         myUldirProgress: [],
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
            console.log(this.state.bestRuns);
         })
         .catch(() => this.setState({ isError: true }));
      axios
         .get(
            "https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=raid_progression",
            { headers: { Accept: "application/json" } }
         )
         .then(response => {
            this.setState({
               myUldirProgress: response.data.raid_progression.uldir,
               isPending: false
            });
         })
         .catch(() => this.setState({ isError: true }));
   }

   render() {
      // const dungeonPics = [
      //    { name: "TD", link: "../assets/images/TD.jpg" },
      //    { name: "FH", link: "../assets/images/FH.jpg" },
      //    { name: "TOS", link: "../assets/images/TOS.jpg" },
      //    { name: "AD", link: "../assets/images/AD.jpg" },
      //    { name: "KR", link: "../assets/images/KR.jpg" },
      //    { name: "ML", link: "../assets/images/ML.jpg" },
      //    { name: "SIEGE", link: "../assets/images/SIEGE.jpg" },
      //    { name: "SOTS", link: "../assets/images/SOTS.jpg" },
      //    { name: "UNDR", link: "../assets/images/UNDR.jpg" },
      //    { name: "WM", link: "../assets/images/WM.jpg" }
      // ];
      if (this.state.isPending) {
         return <ResponsiveLayout>Fancy spinner here</ResponsiveLayout>;
      }
      return (
         <ResponsiveLayout>
            <section className={styles.container}>
               <h1>About me</h1>
               <Nav tabs>
                  {this.state.tabs.map(tabs => (
                     <NavItem className="col-lg-4">
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
                                 style={{ fontSize: "1.4rem" }}
                              >
                                 {this.state.raiderIo.name}
                              </a>
                           </li>
                           <li>
                              <a
                                 href={this.state.raiderIo.profile_url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <img
                                    src={this.state.raiderIo.thumbnail_url}
                                    alt={this.state.raiderIo.name}
                                 />
                              </a>
                           </li>
                           <li>
                              {this.state.raiderIo.race}{" "}
                              {this.state.raiderIo.class}
                           </li>
                           <li>{this.state.raiderIo.faction} proud !</li>
                           <Card body>
                              <CardTitle>
                                 <h4>
                                    <span href="#" id="bfa">
                                       Battle for Azeroth
                                    </span>{" "}
                                    <span href="#" id="raid">
                                       Progression
                                    </span>
                                 </h4>
                              </CardTitle>
                              <CardText>
                                 <Progress
                                    animated
                                    className={styles.progress}
                                    value={
                                       this.state.myUldirProgress
                                          .mythic_bosses_killed
                                    }
                                    max={
                                       this.state.myUldirProgress.total_bosses
                                    }
                                 >
                                    Uldir : {this.state.myUldirProgress.summary}
                                 </Progress>
                              </CardText>
                           </Card>
                           <Card body>
                              <CardTitle>
                                 <h4>
                                    My best{" "}
                                    <span href="#" id="mplus">
                                       Mythic+
                                    </span>{" "}
                                    runs
                                 </h4>
                              </CardTitle>
                              <Row>
                                 {this.state.bestRuns.map((runs, i) => (
                                    <Col
                                       xs="12"
                                       lg={{ size: 8, offset: 2 }}
                                       key={i}
                                    >
                                       <Card inverse>
                                          {this.state.dungeonPics.map(
                                             (pics, u) => {
                                                if (
                                                   runs.short_name === pics.name
                                                ) {
                                                   return (
                                                      <CardImg
                                                         width="100%"
                                                         src={pics.link}
                                                      />
                                                   );
                                                }
                                             }
                                          )}
                                          <CardImgOverlay
                                             className={styles.overlay}
                                          >
                                             <CardTitle>
                                                <a
                                                   href={runs.url}
                                                   target="_blank"
                                                   rel="noopener norefferer"
                                                >
                                                   {runs.dungeon}
                                                   {" +"}
                                                   {runs.mythic_level}
                                                </a>
                                             </CardTitle>
                                             <CardText>
                                                Score : {runs.score}
                                             </CardText>
                                          </CardImgOverlay>
                                       </Card>
                                    </Col>
                                 ))}
                              </Row>
                           </Card>
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
            <UncontrolledTooltip placement="bottom" target="bfa">
               Battle For Azeroth is the lattest version of World of Warcraft,
               released the 08/14/18
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="bottom" target="mplus">
               Mythic+ is a recent exciting thing in World of Warcraft. It is a
               new mode of content that offers players an endlessly scaling
               challenge in 5-player dungeons. It can be really challenging and
               good if you don't have 19 people to play with ! Depending on the
               dungeon, the time you used to complete it and the key difficulty,
               it gives you points !
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="bottom" target="raid">
               The term progression mean the number of boss of the actual raid
               you have killed with your group. A raid is a huge 20-man
               instanced zone where there is several bosses (in general between
               6 and 14).
            </UncontrolledTooltip>
         </ResponsiveLayout>
      );
   }
}
