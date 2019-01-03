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

// const About = () => {
//    return (
//       <ResponsiveLayout>
//          <section className={styles.container}>
//             <h1>What do I love ?</h1>
//          </section>
//       </ResponsiveLayout>
//    );
// };

// export default About;

export default class About extends React.Component {
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         activeTab: "1",
         tabs: [
            { id: "1", label: "World of Warcraft" },
            { id: "2", label: "Ice Hockey" }
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
               <h1>What do I love ?</h1>
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
               <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                     <Row>
                        <Col sm="12">
                           <h4>Soon</h4>
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
                  </TabPane>
               </TabContent>
            </section>
         </ResponsiveLayout>
      );
   }
}
