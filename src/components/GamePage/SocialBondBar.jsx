import { useState } from "react";
import "../../css/SocialBondBar.css";
import SocialMemberDetails from "./SocialMemberDetails";

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

  return (
    <div className="social-bonds-container">
      <h3>Classmates ({sortedBonds.length})</h3>

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

      {/* Render the SocialMemberDetails component when a member is selected */}
      {selectedMember && (
        <SocialMemberDetails
          member={selectedMember}
          socialBonds={socialBonds}
          discoveredInfo={discoveredInfo}
          getRelationshipStatus={getRelationshipStatus}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}

export default SocialBondBar;
