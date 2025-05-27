import { useEffect, useState } from "react";
import "../css/EventMessage.css";

function EventMessage({ event, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (event) {
      setVisible(true);
    }
  }, [event]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Allow animation to complete
  };

  if (!event) return null;

  const { energyChange, skillChange, actionsLost, bondsChange } =
    event.effect || {};

  return (
    <div className={`event-message-overlay ${visible ? "visible" : "hidden"}`}>
      <div
        className={`event-message ${event.type} ${
          visible ? "visible" : "hidden"
        }`}
      >
        <div className="event-message-header">
          <h3>{event.name}</h3>
        </div>

        <div className="event-message-body">
          <p>{event.description}</p>

          <div className="event-effects">
            {energyChange !== 0 && (
              <div
                className={`effect-item ${
                  energyChange > 0 ? "positive" : "negative"
                }`}
              >
                <span className="effect-icon">⚡</span>
                <span className="effect-label">Energy</span>
                <span className="effect-value">
                  {energyChange > 0 ? "+" : ""}
                  {energyChange}
                </span>
              </div>
            )}

            {skillChange !== 0 && (
              <div
                className={`effect-item ${
                  skillChange > 0 ? "positive" : "negative"
                }`}
              >
                <span className="effect-icon">💻</span>
                <span className="effect-label">Coding Skill</span>
                <span className="effect-value">
                  {skillChange > 0 ? "+" : ""}
                  {skillChange}
                </span>
              </div>
            )}

            {actionsLost !== 0 && (
              <div
                className={`effect-item ${
                  actionsLost < 0 ? "positive" : "negative"
                }`}
              >
                <span className="effect-icon">⏱️</span>
                <span className="effect-label">Actions</span>
                <span className="effect-value">
                  {actionsLost < 0
                    ? "+" + Math.abs(actionsLost)
                    : actionsLost === "all"
                    ? "All Lost"
                    : "-" + actionsLost}
                </span>
              </div>
            )}

            {bondsChange !== 0 && (
              <div
                className={`effect-item ${
                  bondsChange > 0 ? "positive" : "negative"
                }`}
              >
                <span className="effect-icon">👥</span>
                <span className="effect-label">
                  {event.effect.bondsChangeType === "all"
                    ? "All Bonds"
                    : "Bond"}
                </span>
                <span className="effect-value">
                  {bondsChange > 0 ? "+" : ""}
                  {bondsChange}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className={`event-message-footer ${event.type}`}>
          <button onClick={handleClose}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default EventMessage;
