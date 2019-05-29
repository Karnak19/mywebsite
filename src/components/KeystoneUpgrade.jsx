import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KeystoneUpgrade = props => {
  const [runs, setRuns] = useState(props.run);

  return runs.num_keystone_upgrades === 1 ? (
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
  );
};

export default KeystoneUpgrade;
