import "../css/DaySumm.css";

function DaySummaryModal({ onStartNewDay, daySummary }) {
  return (
    <div className="day-summary-modal-overlay">
      <div className="day-summary-modal">
        <div className="day-summary-header">
          <h3>Day Complete</h3>
        </div>

        <div className="day-summary-body">
          <div className="day-icon">🌙</div>
          <h3>Daily Summary</h3>

          <div className="summary-stats">
            <div className="summary-item">
              <span className="summary-label">Coding Skill Gained:</span>
              <span className="summary-value positive">
                +{daySummary.skillGained}
              </span>
            </div>

            {daySummary.skillDecayed > 0 && (
              <div className="summary-item">
                <span className="summary-label">Coding Skill Lost:</span>
                <span className="summary-value negative">
                  -{daySummary.skillDecayed}
                </span>
              </div>
            )}

            <div className="summary-item">
              <span className="summary-label">Energy Level:</span>
              <span
                className={`summary-value ${
                  daySummary.energyLevel < 30 ? "negative" : "neutral"
                }`}
              >
                {daySummary.energyLevel}/100
              </span>
            </div>

            {daySummary.newRelationships > 0 && (
              <div className="summary-item">
                <span className="summary-label">New Relationships:</span>
                <span className="summary-value positive">
                  +{daySummary.newRelationships}
                </span>
              </div>
            )}

            {daySummary.bondsImproved > 0 && (
              <div className="summary-item">
                <span className="summary-label">Bonds Improved:</span>
                <span className="summary-value positive">
                  +{daySummary.bondsImproved}
                </span>
              </div>
            )}

            {daySummary.challengesCompleted > 0 && (
              <div className="summary-item">
                <span className="summary-label">
                  Coding Challenges Completed:
                </span>
                <span className="summary-value positive">
                  +{daySummary.challengesCompleted}
                </span>
              </div>
            )}

            {daySummary.lessonsLearned > 0 && (
              <div className="summary-item">
                <span className="summary-label">Python Lessons Completed:</span>
                <span className="summary-value positive">
                  +{daySummary.lessonsLearned}
                </span>
              </div>
            )}
          </div>

          <div className="day-tip">
            <strong>Tip:</strong>{" "}
            {daySummary.tip ||
              "Balance your activities and make sure to rest when your energy gets low!"}
          </div>
        </div>

        <div className="day-summary-footer">
          <button className="next-day-button" onClick={onStartNewDay}>
            Start Next Day
          </button>
        </div>
      </div>
    </div>
  );
}

export default DaySummaryModal;
