import { possibleActivities } from "../../utils/socializeUtils";
import "../../css/SocialBondBar.css";

function SocialMemberDetails({
  member,
  socialBonds,
  discoveredInfo,
  getRelationshipStatus,
  onClose,
}) {
  const memberDiscoveredInfo = discoveredInfo[member.name] || {};
  const bondValue = socialBonds[member.name] || 0;
  const isNegative = bondValue < 0;

  return (
    <div className="member-modal-overlay" onClick={onClose}>
      <div
        className="member-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`member-modal-header ${
            isNegative ? "negative" : "positive"
          }`}
        >
          <h3>{member.name}</h3>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="member-modal-body">
          {member.expertise && memberDiscoveredInfo.expertise ? (
            <div className="member-detail">
              <span className="detail-label">Expertise:</span>
              <span className="detail-value">{member.expertise}</span>
            </div>
          ) : (
            <div className="member-detail undiscovered">
              <span className="detail-label">Expertise:</span>
              <span className="detail-value">Unknown</span>
            </div>
          )}

          {member.personality && memberDiscoveredInfo.personality ? (
            <div className="member-detail">
              <span className="detail-label">Personality:</span>
              <span className="detail-value">{member.personality}</span>
            </div>
          ) : (
            <div className="member-detail undiscovered">
              <span className="detail-label">Personality:</span>
              <span className="detail-value">Unknown</span>
            </div>
          )}

          {member.hobby && memberDiscoveredInfo.hobby ? (
            <div className="member-detail">
              <span className="detail-label">Hobby:</span>
              <span className="detail-value">{member.hobby}</span>
            </div>
          ) : (
            <div className="member-detail undiscovered">
              <span className="detail-label">Hobby:</span>
              <span className="detail-value">Unknown</span>
            </div>
          )}

          {member.background && memberDiscoveredInfo.background ? (
            <div className="member-detail">
              <span className="detail-label">Background:</span>
              <span className="detail-value">{member.background}</span>
            </div>
          ) : (
            <div className="member-detail undiscovered">
              <span className="detail-label">Background:</span>
              <span className="detail-value">Unknown</span>
            </div>
          )}

          {/* Show relationship status and bond strength */}
          {socialBonds[member.name] !== undefined && (
            <>
              <div className="member-detail">
                <span className="detail-label">Bond Strength:</span>
                <span
                  className={`detail-value ${
                    isNegative ? "negative" : "positive"
                  }`}
                >
                  {bondValue}/100
                </span>
              </div>
              <div className="member-detail">
                <span className="detail-label">Relationship:</span>
                <span
                  className={`detail-value ${
                    isNegative ? "negative" : "positive"
                  }`}
                >
                  {getRelationshipStatus(bondValue)}
                </span>
              </div>
            </>
          )}

          {/* Display preferences if relationship is good enough or bad enough */}
          {socialBonds[member.name] !== undefined &&
            (bondValue >= 60 || bondValue <= -60) &&
            (member.likes?.length > 0 || member.dislikes?.length > 0) && (
              <div className="member-preferences">
                <h4>Activity Preferences</h4>
                <div className="preferences-columns">
                  <div className="preferences-column">
                    <h5>Likes</h5>
                    <ul className="preferences-list likes-list">
                      {member.likes && member.likes.length > 0 ? (
                        member.likes.map((id) => {
                          const activity = possibleActivities.find(
                            (a) => a.id === id
                          );
                          return activity ? (
                            <li
                              key={`like-${id}`}
                              className="preference-item like-item"
                            >
                              {activity.name}
                            </li>
                          ) : null;
                        })
                      ) : (
                        <li className="preference-item empty">
                          No known likes
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="preferences-column">
                    <h5>Dislikes</h5>
                    <ul className="preferences-list dislikes-list">
                      {member.dislikes && member.dislikes.length > 0 ? (
                        member.dislikes.map((id) => {
                          const activity = possibleActivities.find(
                            (a) => a.id === id
                          );
                          return activity ? (
                            <li
                              key={`dislike-${id}`}
                              className="preference-item dislike-item"
                            >
                              {activity.name}
                            </li>
                          ) : null;
                        })
                      ) : (
                        <li className="preference-item empty">
                          No known dislikes
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default SocialMemberDetails;
