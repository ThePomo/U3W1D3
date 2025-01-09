import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Welcome() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Modal
        show={showModal}
        onHide={handleClose}
        
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to Our Book Shop!</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default Welcome;
