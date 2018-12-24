import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

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
               // style={{ width: 300 }}
            >
               <ModalHeader toggle={this.toggle}>My CVs</ModalHeader>
               <ModalBody
                  style={{
                     textAlign: "center",
                     margin: 50
                  }}
               >
                  <form
                     method="get"
                     target="_blank"
                     action="/BasileVdevFr.pdf"
                     style={{ margin: 10 }}
                  >
                     <Button type="submit">
                        <FontAwesomeIcon icon={faFilePdf} size="1x" /> French CV
                     </Button>
                  </form>
                  <form
                     method="get"
                     target="_blank"
                     action="/BasileVdevEn.pdf"
                     style={{ margin: 10 }}
                  >
                     <Button type="submit">
                        <FontAwesomeIcon icon={faFilePdf} size="1x" /> English
                        CV
                     </Button>
                  </form>
               </ModalBody>
            </Modal>
         </div>
      );
   }
}

export default TheModal;
