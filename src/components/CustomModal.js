import React from "react";
import "../App.css";
import { Button, Modal } from "react-bootstrap";

const CustomModal = props => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.modalHeader}</Modal.Title>{" "}
      </Modal.Header>{" "}
      <Modal.Body>{props.modalMessage}</Modal.Body>{" "}
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.onSelectedYes()}>
          Yes
        </Button>{" "}
        <Button variant="primary" onClick={() => props.onHide()}>
          No
        </Button>{" "}
      </Modal.Footer>{" "}
    </Modal>
  );
};

export default CustomModal;
