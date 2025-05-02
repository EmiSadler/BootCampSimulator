import "../css/EnergyModal.css";

function EnergyModal({ onClose, onStartNewDay }) {
  return (
    <div className="energy-modal-overlay">
      <div className="energy-modal">
        <div className="energy-modal-header">
          <h3>Low Energy</h3>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="energy-modal-body">
          <div className="energy-icon">⚡</div>
          <p>You're too tired to continue!</p>
          <p className="energy-message">
            Your energy is too low for this activity. Would you like to rest or
            end the day?
          </p>
        </div>
        <div className="energy-modal-footer">
          <button className="rest-button" onClick={onClose}>
            Rest (+20 Energy)
          </button>
          <button className="end-day-button" onClick={onStartNewDay}>
            End Day
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnergyModal;
