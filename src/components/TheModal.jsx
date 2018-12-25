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
            <Button color={this.props.color} onClick={this.toggle}>
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
                     margin: 50
                  }}
               >
                  <form
                     method="get"
                     target="_blank"
                     action="/BasileVdevFr.pdf"
                     style={{ padding: 10 }}
                  >
                     <Button color="primary" type="submit" block>
                        <FontAwesomeIcon icon={faFilePdf} size="1x" /> French
                     </Button>
                  </form>
                  <form
                     method="get"
                     target="_blank"
                     action="/BasileVdevEn.pdf"
                     style={{ padding: 10 }}
                  >
                     <Button color="primary" type="submit" block>
                        <FontAwesomeIcon icon={faFilePdf} size="1x" /> English
                     </Button>
                  </form>
               </ModalBody>
            </Modal>
         </div>
      );
   }
}

export default TheModal;
