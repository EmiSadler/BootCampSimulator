import React from "react";
import "../css/LogoutButton.css";

function LogoutButton({ onClick }) {
  return (
    <button onClick={onClick} className="logout-button">
      Logout
    </button>
  );
}

export default LogoutButton;
