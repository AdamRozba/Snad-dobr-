import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function WTDAddMemberForm({ show, handleClose, userList, handlerMap }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const formData = new FormData(e.target);
          const values = Object.fromEntries(formData);
          handlerMap.addMember({ memberId: values.memberId });
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Přidat člena</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>člen</Form.Label>
          <Form.Select type="select" name="memberId" required>
            {userList.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </Form.Select>
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
            Uložit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default WTDAddMemberForm;
