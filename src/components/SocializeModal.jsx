import { useState, useEffect } from "react";
import "../css/SocializeModal.css";
import {
  possibleActivities,
  calculateBondChange,
} from "../utils/socializeUtils";

function SocializeModal({ person, onComplete, onClose, onDiscoverInfo }) {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activities, setActivities] = useState([]);
  const [discoveredInfo, setDiscoveredInfo] = useState(null);
  const [reaction, setReaction] = useState(null);

  // Generate 4 random activities when the modal opens
  useEffect(() => {
    // Shuffle and pick 4 random activities
    const shuffled = [...possibleActivities].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);
    setActivities(selected);
  }, [person.name]); // Regenerate activities if person changes

  // Determine what information to discover during this interaction
  const determineDiscoveredInfo = (activity) => {
    // Choose one attribute to discover (expertise, personality, hobby, background)
    const possibleAttributes = [
      "expertise",
      "personality",
      "hobby",
      "background",
    ];

    // Filter out attributes that might be more likely to discover based on activity
    let weightedAttributes = [...possibleAttributes];

    // Add weights based on activity type
    if (activity.id === 10 || activity.id === 11) {
      // Discuss politics or coding
      // More likely to discover personality or expertise
      weightedAttributes.push(
        "personality",
        "personality",
        "expertise",
        "expertise"
      );
    } else if (activity.id === 3 || activity.id === 9 || activity.id === 19) {
      // Playing games
      // More likely to discover hobby
      weightedAttributes.push("hobby", "hobby", "personality");
    } else if (activity.id === 12 || activity.id === 15 || activity.id === 18) {
      // Study/coding related
      // More likely to discover expertise or background
      weightedAttributes.push("expertise", "expertise", "background");
    } else if (
      activity.id === 7 ||
      activity.id === 8 ||
      activity.id === 13 ||
      activity.id === 20
    ) {
      // Casual hanging out
      // More likely to discover hobby or personality
      weightedAttributes.push("hobby", "personality");
    }

    // Randomly select an attribute to discover
    const attributeToDiscover =
      weightedAttributes[Math.floor(Math.random() * weightedAttributes.length)];

    // Make sure person has this attribute
    if (person[attributeToDiscover]) {
      return {
        attribute: attributeToDiscover,
        value: person[attributeToDiscover],
      };
    }

    // Fallback if the attribute doesn't exist
    return {
      attribute: "personality",
      value: person.personality || "Mysterious",
    };
  };

  // Handle activity selection
  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);

    // Determine what information will be discovered
    const newDiscovery = determineDiscoveredInfo(activity);
    setDiscoveredInfo(newDiscovery);

    // Calculate bond change based on preferences
    const bondResult = calculateBondChange(person, activity);
    setReaction(bondResult);

    // Complete the socialization with the selected activity
    setTimeout(() => {
      // Pass the discovered info and bond change to the parent component
      onComplete(activity, newDiscovery, bondResult);
    }, 800);
  };

  return (
    <div className="socialize-modal-overlay">
      <div className="socialize-modal-content">
        <div className="socialize-modal-header">
          <h3>Socialize with {person.name}</h3>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="socialize-modal-body">
          <p className="socialize-prompt">
            What would you like to do with {person.name}?
          </p>

          <div className="bond-status">
            Current Bond:{" "}
            <span
              className={
                person.bondValue < 0 ? "negative-bond" : "positive-bond"
              }
            >
              {person.bondValue}
            </span>
          </div>

          <div className="activity-options">
            {activities.map((activity) => {
              return (
                <button
                  key={activity.id}
                  className={`activity-button ${
                    selectedActivity === activity ? "selected" : ""
                  }`}
                  onClick={() => handleActivityClick(activity)}
                  disabled={selectedActivity !== null}
                >
                  <span className="activity-name">{activity.name}</span>
                  <div className="activity-details">
                    <span className="energy-cost">
                      Energy: -{activity.energyCost}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {reaction && (
            <div className={`reaction-message ${reaction.reaction}`}>
              <p>{reaction.message}</p>
              {reaction.reaction === "dislike" && (
                <p className="extra-warning">
                  <strong>Be careful!</strong> Some activities can damage your
                  relationship.
                </p>
              )}
            </div>
          )}

          {discoveredInfo && (
            <div className="discovery-message">
              <p>
                You learned that {person.name}'s {discoveredInfo.attribute} is "
                {discoveredInfo.value}"!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SocializeModal;
