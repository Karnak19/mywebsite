import React from "react";

const MyCharacter = props => {
   return (
      <div id="my_char">
         <h4>My Character :</h4>
         <li>
            <a href={props.raiderIO.profile_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.4rem" }}>
               {props.raiderIO.name}
            </a>
         </li>
         <li>
            <a href={props.raiderIO.profile_url} target="_blank" rel="noopener noreferrer">
               <img src={props.raiderIO.thumbnail_url} alt={props.raiderIO.name} />
            </a>
         </li>
         <li>
            {props.raiderIO.race} {props.raiderIO.class}
         </li>
         <li>{props.raiderIO.faction} proud !</li>
      </div>
   );
};

export default MyCharacter;
