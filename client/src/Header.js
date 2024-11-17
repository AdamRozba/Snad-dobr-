import { useContext } from "react";
import { UserContext } from "./Users/UserProvider.js";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import Button from "react-bootstrap/Button";

function Header() {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="header">
      <button
        className="app-name"
        onClick={() => navigate("/")}
        style={{
          background: "none",
          border: "none",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span>WhatToDo</span>
      </button>
      <div className="user-buttons">
        {userList.map((user) => (
          <Button
            style={{ margin: "5px" }}
            variant="info"
            key={user.id}
            onClick={() => setLoggedInUser(user.id)}
          >
            {user.name}--{(user.id === loggedInUser).toString()}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Header;
