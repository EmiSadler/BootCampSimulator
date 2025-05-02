import { useEffect, useState } from "react";
import "../css/EventMessage.css";

function EventMessage({ message, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setVisible(true);
    }
  }, [message]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Allow animation to complete
  };

  if (!message) return null;

  return (
    <div className={`event-message-overlay ${visible ? "visible" : "hidden"}`}>
      <div
        className={`event-message ${message.type} ${
          visible ? "visible" : "hidden"
        }`}
      >
        <div className="event-message-header">
          <h3>{message.title}</h3>
          <button className="event-close-btn" onClick={handleClose}>
            ×
          </button>
        </div>
        <div className="event-message-body">
          <p>{message.description}</p>
        </div>
        <div className="event-message-footer">
          <button onClick={handleClose}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default EventMessage;
