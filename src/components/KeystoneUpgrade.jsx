import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class KeystoneUpgrade extends Component {
   constructor(props) {
      super(props);
      this.state = {
         runs: this.props.run
      };
   }
   render() {
      return this.state.runs.num_keystone_upgrades === 1 ? (
         <li>
            Upgraded : <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
         </li>
      ) : this.state.runs.num_keystone_upgrades === 2 ? (
         <li>
            Upgraded : <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
            <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
         </li>
      ) : this.state.runs.num_keystone_upgrades === 3 ? (
         <li>
            Upgraded : <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
            <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
            <FontAwesomeIcon icon={["fas", "star"]} color="yellow" />
         </li>
      ) : (
         <li>Not upgraded</li>
      );
   }
}

export default KeystoneUpgrade;
