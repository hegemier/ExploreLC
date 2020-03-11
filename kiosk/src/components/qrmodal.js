import React, { useState } from 'react'
import { TranslatorProvider, useTranslate } from "react-translate";
import QRCode from 'react-qr-code';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Qrmodal(props) {
  const [show, setShow] = useState(false); //use React state for the open/close of the modal

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //This modal can be integrated into any page, you simply have to pass in the link as a prop.
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Explore more on your device
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Explore on your device</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <QRCode value = {props.link}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export {Qrmodal}
