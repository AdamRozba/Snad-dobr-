import { useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";
import { useNavigate, createSearchParams } from "react-router-dom";
import "../Styles.css";
import Button from "react-bootstrap/Button";
import { IoTrash } from "react-icons/io5";
import "./WTDOverviewItem.css";

function WTDOverviewItem({ toDoList, handleArchive, handleDelete }) {
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const confirmDelete = (id) => {
    if (window.confirm("Opravdu chcete list smazat?")) {
      handleDelete({ id });
    }
  };

  const handleNavigate = () => {
    navigate({
      pathname: "detail",
      search: createSearchParams({ id: toDoList.id }).toString(),
    });
  };

  return (
    <div className="tile-container" onClick={handleNavigate}>
      <span className="tile-title">{toDoList.name}</span>
      {loggedInUser === toDoList.owner ? (
        <div className="tile-actions">
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              e.stopPropagation();
              handleArchive({ id: toDoList.id });
            }}
          >
            Archivovaný
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.stopPropagation();
              confirmDelete(toDoList.id);
            }}
          >
            <IoTrash />
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default WTDOverviewItem;
