import "../css/EnergyBar.css";

function EnergyBar({ energy }) {
  const totalSegments = 10;
  const filledSegments = Math.ceil((energy / 100) * totalSegments);

  const segments = Array(totalSegments)
    .fill(0)
    .map((_, index) => {
      return index < filledSegments ? "filled" : "empty";
    });

  return (
    <div className="energy-container">
      <p>Energy: {energy}/100</p>
      <div className="energy-bar">
        {segments.map((status, index) => (
          <div
            key={index}
            className={`energy-segment ${status}`}
            title={`${
              status === "filled" ? "Energy available" : "Energy depleted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default EnergyBar;
