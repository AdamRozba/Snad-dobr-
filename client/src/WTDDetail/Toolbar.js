import { useContext, useState } from "react";
import { WTDDetailContext } from "./WTDDetailProvider";
import { UserContext } from "../Users/UserProvider";
import WTDUpdateName from "./WTDNameEdit";
import "../Styles.css";
import Button from "react-bootstrap/Button";
import { MdModeEdit } from "react-icons/md";

function Toolbar() {
  const [show, setShow] = useState(false);
  const { data, handlerMap, showResolved, toggleShowResolved } =
    useContext(WTDDetailContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="toolbar">
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="list-name">{data.name}</span>
        {loggedInUser === data.owner && (
          <Button
            variant="info"
            onClick={() => setShow(true)}
            style={{ marginLeft: "10px" }}
          >
            <MdModeEdit />
          </Button>
        )}
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
          onClick={() => toggleShowResolved()}
        >
          {showResolved ? "Pouze nesplněné" : "Všechny itemy"}
        </Button>
      </div>
      <WTDUpdateName
        show={show}
        handleClose={() => setShow(false)}
        data={data}
        handlerMap={handlerMap}
      />
    </div>
  );
}

export default Toolbar;
