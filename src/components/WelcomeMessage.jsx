import "../css/WelcomeMessage.css";

function WelcomeMessage({ day = 1, username = "Student" }) {
  return (
    <div className="welcome-message">
      <h2>
        Welcome to Day {day} of Bootcamp {username}!
      </h2>
    </div>
  );
}

export default WelcomeMessage;
