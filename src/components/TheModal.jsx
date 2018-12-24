import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class TheModal extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         modal: false
      };

      this.toggle = this.toggle.bind(this);
   }

   toggle() {
      this.setState({
         modal: !this.state.modal
      });
   }

   render() {
      return (
         <div>
            <Button
               color={this.props.color}
               onClick={this.toggle}
               style={{ fontSize: 30 }}
            >
               {this.props.buttonLabel}
            </Button>
            <Modal
               isOpen={this.state.modal}
               toggle={this.toggle}
               className={this.props.className}
            >
               <ModalHeader toggle={this.toggle}>My CVs</ModalHeader>
               <ModalBody
                  style={{
                     textAlign: "center",
                     margin: 50,
                     flexDirection: "row"
                  }}
               >
                  <form method="get" target="_blank" action="/BasileVdevFr.pdf">
                     <Button type="submit">French CV</Button>
                  </form>
                  <form method="get" target="_blank" action="/BasileVdevEn.pdf">
                     <Button type="submit">English CV</Button>
                  </form>
               </ModalBody>
            </Modal>
         </div>
      );
   }
}

export default TheModal;
