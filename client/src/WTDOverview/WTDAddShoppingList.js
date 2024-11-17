import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function WTDCreateShoppingListForm({ show, handleClose, handlerMap }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const formData = new FormData(e.target);
          const values = Object.fromEntries(formData);
          if (handlerMap && handlerMap.createShoppingList) {
            handlerMap.createShoppingList(values.name);
          }
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Vytvořit list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Název listu</Form.Label>
          <Form.Control type="text" maxLength={100} name="name" required />
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            variant="outline-secondary"
            onClick={handleClose}
          >
            Zavřít
          </Button>
          <Button variant="success" type="submit">
            Vytvořit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default WTDCreateShoppingListForm;
