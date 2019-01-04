import React from "react";
import {
   TabContent,
   TabPane,
   Nav,
   NavItem,
   NavLink,
   Button,
   Row,
   Col
} from "reactstrap";
import classnames from "classnames";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ResponsiveLayout from "../layouts/Responsive.layout.jsx";
import styles from "./About.page.module.css";

export default class About extends React.Component {
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         activeTab: "1",
         tabs: [
            {
               id: "1",
               label: "World of Warcraft",
               imgLink: "./wow.png",
               bg: ""
            },
            { id: "2", label: "Ice Hockey", imgLink: "" },
            { id: "3", label: "Snowboard", imgLink: "" }
         ]
      };
   }

   toggle(tab) {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   }
   render() {
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
                  {this.state.tabs.map(tabs => (
                     <TabPane
                        id={tabs.label}
                        tabId={tabs.id}
                        className={styles.content}
                        style={{
                           backgroundImage: "../assets/images/alliance.png"
                        }}
                     >
                        <Row>
                           <Col sm="12">
                              <h2>{tabs.label}</h2>
                              <img src={tabs.imgLink} alt="image" />
                           </Col>
                        </Row>
                     </TabPane>
                  ))}
                  {/* <TabPane tabId="1">
                     <Row>
                        <Col sm="12">
                           <h4>WoW</h4>
                        </Col>
                     </Row>
                  </TabPane>
                  <TabPane tabId="2">
                     <Row>
                        <Col sm="12">
                           <h4>Soon</h4>
                        </Col>
                        <Col sm="6" />
                     </Row>
                  </TabPane> */}
               </TabContent>
            </section>
         </ResponsiveLayout>
      );
   }
}
