import "../css/SkillBar.css";

function CodingSkill({ codingSkill }) {
  // Calculate progress bar width based on skill level
  // Assuming max skill is 100 for 100% width
  const progressWidth = Math.min(codingSkill, 100);

  return (
    <div className="skill-container">
      <h3>Coding Skill: {codingSkill}</h3>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${progressWidth}%` }}
          title={`Coding Skill: ${codingSkill}`}
        />
      </div>
    </div>
  );
}

export default CodingSkill;
