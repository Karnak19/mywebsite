import React, { Component } from "react";

class MyCharacter extends Component {
   constructor(props) {
      super(props);
      this.state = {
         raiderIo: this.props.raiderIO
      };
   }
   render() {
      return (
         <div id="my_char">
            <h4>My Character :</h4>
            <li>
               <a href={this.state.raiderIo.profile_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.4rem" }}>
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
      );
   }
}

export default MyCharacter;
