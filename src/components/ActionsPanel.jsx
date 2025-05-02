function ActionsPanel({ practiceCoding, socialize, rest, studyPython }) {
  return (
    <div className="actions-panel">
      <h3>Daily Actions</h3>
      <div className="actions-buttons">
        <button onClick={studyPython}>Study Python</button>
        <button onClick={practiceCoding}>Practice Coding</button>
        <button onClick={socialize}>Socialize</button>
        <button onClick={rest}>Rest</button>
      </div>
    </div>
  );
}

export default ActionsPanel;
