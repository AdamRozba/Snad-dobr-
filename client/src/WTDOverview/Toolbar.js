import "../Styles.css";
import { useState } from "react";
import WTDCreateShoppingListForm from "./WTDAddShoppingList.js";
import Button from "react-bootstrap/Button";

function Toolbar({ handleCreate, showArchived, setShowArchived }) {
  const [show, setShow] = useState(false);

  return (
    <div className="toolbar">
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="success" onClick={() => setShow(true)}>
          Vytvořit
        </Button>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="list-name">Seznam Listů</span>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outline-secondary"
          onClick={() => setShowArchived((current) => !current)}
        >
          {showArchived ? "Ukázat aktivní" : "Ukázat archivované"}
        </Button>
      </div>
      <WTDCreateShoppingListForm
        show={show}
        handleClose={() => setShow(false)}
        handlerMap={{ createShoppingList: handleCreate }}
      />
    </div>
  );
}

export default Toolbar;
