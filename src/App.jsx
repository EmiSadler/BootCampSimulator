import { useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import GamePage from "./pages/GamePage/Game";
import LoginPage from "./pages/AuthPages/LoginPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import { gameAPI } from "./services/api";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");

  // Add fallback for isLoggedIn function
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (gameAPI && typeof gameAPI.isLoggedIn === "function") {
      return gameAPI.isLoggedIn();
    }
    // Fallback: check localStorage directly
    return !!localStorage.getItem("access_token");
  });

  const handleStartGame = () => {
    if (isLoggedIn) {
      setCurrentPage("game");
      setGameStarted(true);
    } else {
      setCurrentPage("login");
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("game");
    setGameStarted(true);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    setCurrentPage("game");
    setGameStarted(true);
  };

  const handleLogoClick = () => {
    if (gameStarted) {
      // Simply navigate back to landing page - progress is auto-saved
      setGameStarted(false);
      setCurrentPage("landing");
    }
  };

  const handleLogout = () => {
    if (gameAPI && typeof gameAPI.logout === "function") {
      gameAPI.logout();
    } else {
      localStorage.removeItem("token");
    }
    setIsLoggedIn(false);
    setGameStarted(false);
    setCurrentPage("landing");
  };

  return (
    <div className="App">
      {currentPage === "landing" && (
        <LandingPage
          onStartGame={handleStartGame}
          onLoginClick={() => setCurrentPage("login")}
          onSignupClick={() => setCurrentPage("signup")}
        />
      )}

      {currentPage === "login" && (
        <LoginPage
          onLogin={handleLogin}
          onSignupClick={() => setCurrentPage("signup")}
          onBackClick={() => setCurrentPage("landing")}
        />
      )}

      {currentPage === "signup" && (
        <SignUpPage
          onSignup={handleSignup}
          onLoginClick={() => setCurrentPage("login")}
          onBackClick={() => setCurrentPage("landing")}
        />
      )}

      {currentPage === "game" && (
        <GamePage onLogout={handleLogout} onLogoClick={handleLogoClick} />
      )}
    </div>
  );
}

export default App;
