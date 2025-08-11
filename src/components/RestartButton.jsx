import React from "react";
import "../css/RestartButton.css";

function RestartButton({ onRestart }) {
  const handleRestart = () => {
    const confirmed = window.confirm(
      "Are you sure you want to restart the game? This will delete all your saved progress and start a fresh game from the beginning. This action cannot be undone."
    );

    if (confirmed) {
      onRestart();
    }
  };

  return (
    <button
      className="restart-button"
      onClick={handleRestart}
      title="Restart Game"
    >
      Restart
    </button>
  );
}

export default RestartButton;
