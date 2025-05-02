import { useState } from "react";
import "../css/SocialBondBar.css";
import { possibleActivities } from "../utils/socializeUtils";

function SocialBondBar({
  socialBonds,
  cohortMembers = [],
  discoveredInfo = {},
}) {
  const [selectedMember, setSelectedMember] = useState(null);

  // Max bond level for 100% width
  const maxBond = 100;

  // Sort bonds by value (highest first) for better visualization
  const sortedBonds = Object.entries(socialBonds).sort((a, b) => b[1] - a[1]);

  // Function to determine relationship status based on bond value
  const getRelationshipStatus = (bondValue) => {
    if (bondValue >= 100) return "Best Friend";
    if (bondValue >= 80) return "Close Friend";
    if (bondValue >= 60) return "Good Friend";
    if (bondValue >= 40) return "Friend";
    if (bondValue >= 1) return "Acquaintance";
    if (bondValue === 0) return "Classmate";
    if (bondValue >= -40) return "Awkward";
    if (bondValue >= -60) return "Tense";
    if (bondValue >= -80) return "Hostile";
    if (bondValue >= -90) return "Enemy";
    return "Nemesis";
  };

  // Function to find cohort member details by name
  const findMemberDetails = (name) => {
    return cohortMembers.find((member) => member.name === name) || { name };
  };

  // Handle member card click
  const handleMemberClick = (name) => {
    const memberDetails = findMemberDetails(name);
    setSelectedMember(memberDetails);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="social-bonds-container">
      <h3>Social Bonds with Classmates ({sortedBonds.length})</h3>

      <div className="bonds-grid">
        {sortedBonds.map(([name, bond]) => {
          const status = getRelationshipStatus(bond);
          const memberDetails = findMemberDetails(name);
          const memberDiscoveredInfo = discoveredInfo[name] || {};
          const isNegative = bond < 0;
          const isPositive = bond > 0;

          return (
            <div
              key={name}
              className={`bond-item ${
                isNegative ? "negative-bond" : isPositive ? "positive-bond" : ""
              }`}
              onClick={() => handleMemberClick(name)}
            >
              <div className="bond-header">
                <span className="bond-name">{name}</span>
                <span
                  className={`bond-value ${
                    isNegative ? "negative" : "positive"
                  }`}
                >
                  {bond}/100
                </span>
              </div>
              <div className="bond-bar">
                <div
                  className={`bond-progress ${
                    isNegative ? "negative" : "positive"
                  }`}
                  style={{ width: `${Math.min(Math.abs(bond), maxBond)}%` }}
                  title={`${name}: ${bond}`}
                />
              </div>
              <div
                className={`relationship-status ${
                  isNegative ? "negative" : "positive"
                }`}
              >
                {status}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for displaying member details */}
      {selectedMember && (
        <div className="member-modal-overlay" onClick={closeModal}>
          <div
            className="member-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`member-modal-header ${
                socialBonds[selectedMember.name] < 0 ? "negative" : "positive"
              }`}
            >
              <h3>{selectedMember.name}</h3>
              <button className="modal-close-btn" onClick={closeModal}>
                ×
              </button>
            </div>

            <div className="member-modal-body">
              {/* Display info based on discovery state */}
              {selectedMember.expertise &&
              discoveredInfo[selectedMember.name]?.expertise ? (
                <div className="member-detail">
                  <span className="detail-label">Expertise:</span>
                  <span className="detail-value">
                    {selectedMember.expertise}
                  </span>
                </div>
              ) : (
                <div className="member-detail undiscovered">
                  <span className="detail-label">Expertise:</span>
                  <span className="detail-value">Unknown</span>
                </div>
              )}

              {selectedMember.personality &&
              discoveredInfo[selectedMember.name]?.personality ? (
                <div className="member-detail">
                  <span className="detail-label">Personality:</span>
                  <span className="detail-value">
                    {selectedMember.personality}
                  </span>
                </div>
              ) : (
                <div className="member-detail undiscovered">
                  <span className="detail-label">Personality:</span>
                  <span className="detail-value">Unknown</span>
                </div>
              )}

              {selectedMember.hobby &&
              discoveredInfo[selectedMember.name]?.hobby ? (
                <div className="member-detail">
                  <span className="detail-label">Hobby:</span>
                  <span className="detail-value">{selectedMember.hobby}</span>
                </div>
              ) : (
                <div className="member-detail undiscovered">
                  <span className="detail-label">Hobby:</span>
                  <span className="detail-value">Unknown</span>
                </div>
              )}

              {selectedMember.background &&
              discoveredInfo[selectedMember.name]?.background ? (
                <div className="member-detail">
                  <span className="detail-label">Background:</span>
                  <span className="detail-value">
                    {selectedMember.background}
                  </span>
                </div>
              ) : (
                <div className="member-detail undiscovered">
                  <span className="detail-label">Background:</span>
                  <span className="detail-value">Unknown</span>
                </div>
              )}

              {/* Show relationship status and bond strength */}
              {socialBonds[selectedMember.name] !== undefined && (
                <>
                  <div className="member-detail">
                    <span className="detail-label">Bond Strength:</span>
                    <span
                      className={`detail-value ${
                        socialBonds[selectedMember.name] < 0
                          ? "negative"
                          : "positive"
                      }`}
                    >
                      {socialBonds[selectedMember.name]}/100
                    </span>
                  </div>
                  <div className="member-detail">
                    <span className="detail-label">Relationship:</span>
                    <span
                      className={`detail-value ${
                        socialBonds[selectedMember.name] < 0
                          ? "negative"
                          : "positive"
                      }`}
                    >
                      {getRelationshipStatus(socialBonds[selectedMember.name])}
                    </span>
                  </div>
                </>
              )}

              {/* Display preferences if relationship is good enough or bad enough */}
              {socialBonds[selectedMember.name] !== undefined &&
                (socialBonds[selectedMember.name] >= 60 ||
                  socialBonds[selectedMember.name] <= -60) &&
                (selectedMember.likes?.length > 0 ||
                  selectedMember.dislikes?.length > 0) && (
                  <div className="member-preferences">
                    <h4>Activity Preferences</h4>
                    <div className="preferences-columns">
                      <div className="preferences-column">
                        <h5>Likes</h5>
                        <ul className="preferences-list likes-list">
                          {selectedMember.likes &&
                          selectedMember.likes.length > 0 ? (
                            selectedMember.likes.map((id) => {
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
                          {selectedMember.dislikes &&
                          selectedMember.dislikes.length > 0 ? (
                            selectedMember.dislikes.map((id) => {
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
      )}
    </div>
  );
}

export default SocialBondBar;
