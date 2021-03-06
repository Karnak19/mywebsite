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
  Card,
  CardText,
  CardTitle,
  CardImg,
  CardImgOverlay,
  Spinner
} from "reactstrap";
import classnames from "classnames";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import ResponsiveLayout from "../layouts/Responsive.layout.jsx";
import Affixes from "../components/theAffixe.jsx";
import MyProgress from "../components/myProgress.jsx";
import MyCharacter from "../components/MyCharacter.jsx";
import styles from "./About.page.module.css";
import KeystoneUpgrade from "../components/KeystoneUpgrade.jsx";

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
        { id: "3", label: "Wild Code School" }
      ],
      raiderIo: [],
      bestRuns: [],
      myUldirProgress: [],
      myBoDProgress: [],
      myEternalPalaceProgress: [],
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
      .all([
        axios.get(
          "https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=mythic_plus_best_runs%3Aall&raid_progression",
          { headers: { Accept: "application/json" } }
        ),
        axios.get(
          "https://raider.io/api/v1/characters/profile?region=eu&realm=hyjal&name=raquette&fields=raid_progression",
          {
            headers: { Accept: "application/json" }
          }
        )
      ])
      .then(
        axios.spread((mplus, progress) => {
          let mPlusRuns = mplus.data["mythic_plus_best_runs"];
          delete mplus.data["mythic_plus_best_runs"];
          this.setState({
            raiderIo: mplus.data,
            bestRuns: mPlusRuns,
            myEternalPalaceProgress:
              progress.data.raid_progression["the-eternal-palace"],
            myUldirProgress: progress.data.raid_progression["uldir"],
            myBoDProgress:
              progress.data.raid_progression["battle-of-dazaralor"],
            isPending: false
          });
        })
      )
      .catch(() => this.setState({ isError: true, isPending: false }));
  }

  render() {
    if (this.state.isPending) {
      return (
        <ResponsiveLayout>
          <section className={styles.container}>
            <Spinner
              color="success"
              style={{ width: "3rem", height: "3rem" }}
            />
          </section>
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
          <TabContent
            activeTab={this.state.activeTab}
            style={{ overflowY: "auto", overflowX: "hidden" }}
          >
            <TabPane id="1" tabId="1" className={styles.content}>
              <Col lg="12" sm="12" xs="12">
                <p>
                  World of Warcraft is a great game. I mostly enjoy the End-game
                  content, particularly{" "}
                  <span href="#" id="pveTooltip">
                    PvE
                  </span>
                  . In End-game PvE, you need a lot of teamwork, to make a
                  20-man team cooperate in the same way. Being selfish does not
                  work in this environment, as every player here will play a
                  huge role to defeat each bosses.
                </p>
              </Col>
              <Col lg="12" sm="12" xs="12" style={{ listStyle: "none" }}>
                <MyCharacter raiderIO={this.state.raiderIo} />
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
                    <MyProgress
                      uldir={this.state.myUldirProgress}
                      bod={this.state.myBoDProgress}
                      crucible={this.state.myEternalPalaceProgress}
                    />
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
                    <Col xs="12" lg={{ size: 6, offset: 3 }} key={i}>
                      <hr />
                      <Card inverse>
                        {this.state.dungeonPics.map((pics, u) => {
                          if (runs.short_name === pics.name) {
                            return (
                              <CardImg
                                style={{ minHeight: "200px" }}
                                src={pics.link}
                                key={u}
                              />
                            );
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

                            <KeystoneUpgrade run={runs} />

                            <li>
                              Affixes :
                              <Affixes run={runs} />
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
            </TabPane>
            <TabPane tabId="2" className={styles.content}>
              <Row>
                <Col sm="12">
                  <h4>Soon</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3" className={styles.content}>
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
          Mythic+ is a recent exciting thing in World of Warcraft. It is a new
          mode of content that offers players an endlessly scaling challenge in
          5-player dungeons. It can be really challenging and good if you don't
          have 19 people to play with ! Depending on the dungeon, the time you
          used to complete it and the key difficulty, it gives you points !
        </UncontrolledTooltip>
        <UncontrolledTooltip placement="bottom" target="raid">
          The term progression mean the number of boss of the actual raid you
          have killed with your group. A raid is a huge 20-man instanced zone
          where there is several bosses (in general between 6 and 14).
        </UncontrolledTooltip>
      </ResponsiveLayout>
    );
  }
}
