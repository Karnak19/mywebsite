import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const TheModal = props => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Button color={props.color} onClick={() => setModal(!modal)}>
        {props.buttonLabel}
      </Button>
      <Modal
        isOpen={modal}
        toggle={() => setModal(!modal)}
        className={props.className}
      >
        <ModalHeader toggle={() => setModal(!modal)}>My CVs</ModalHeader>
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
};

export default TheModal;
