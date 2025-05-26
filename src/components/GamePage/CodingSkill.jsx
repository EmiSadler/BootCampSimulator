import "../../css/SkillBar.css";

function CodingSkill({ codingSkill, daysSinceActivity = 0 }) {
  // Calculate progress bar width based on skill level
  // Assuming max skill is 100 for 100% width
  const progressWidth = Math.min(codingSkill, 100);

  // Show warning if it's been more than 1 day since last coding activity
  const showDecayWarning = daysSinceActivity > 1;

  return (
    <div className="skill-container">
      <div className="skill-header">
        <h3>Coding Skill: {codingSkill}</h3>
        {showDecayWarning && (
          <span className="decay-warning">
            ⚠️ Skills decay without practice
          </span>
        )}
      </div>
      <div className="skill-bar">
        <div
          className={`skill-progress ${showDecayWarning ? "decay-risk" : ""}`}
          style={{ width: `${progressWidth}%` }}
          title={`Coding Skill: ${codingSkill}`}
        />
      </div>
    </div>
  );
}

export default CodingSkill;
