import Modal from "react-bootstrap/Modal";

function ShotModal({ show, img, hidefn }) {
  return (
    <Modal
      centered
      show={show}
      onHide={hidefn}
      className="modal-dialog-centered"
    >
      <Modal.Body>
        <img src={img} alt="shot" className="img-fluid" />
      </Modal.Body>
    </Modal>
  );
}

export default ShotModal;
