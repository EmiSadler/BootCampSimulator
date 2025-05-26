import { useState } from "react";
import Game from "./components/Game";
import LandingPage from "./components/LandingPage";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleLogoClick = () => {
    // Prompt the user if they want to leave the game
    const confirmExit = window.confirm(
      "Are you sure you want to leave the game and return to the main menu? Your progress will not be saved."
    );

    // If they confirm, return to landing page
    if (confirmExit) {
      setGameStarted(false);
    }
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <LandingPage onStartGame={handleStartGame} />
      ) : (
        <div className="game-layout">
          <div className="game-logo-container" onClick={handleLogoClick}>
            <img
              src="/assets/BootCampSimLogo2.png"
              alt="BootCamp Simulator Logo"
              className="game-logo-large"
              title="Click to return to main menu"
            />
          </div>
          <div className="game-content">
            <h1>Bootcamp Simulator</h1>
            <Game />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
