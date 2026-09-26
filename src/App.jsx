import { useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import GamePage from "./pages/GamePage/Game";
import LoginPage from "./pages/AuthPages/LoginPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import { gameAPI } from "./services/api";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(() => gameAPI.isLoggedIn());

  const handleStartGame = () => {
    setCurrentPage(isLoggedIn ? "game" : "login");
  };

  // Used for both a successful login and a successful signup
  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage("game");
  };

  const handleLogoClick = () => {
    // Simply navigate back to landing page - progress is auto-saved
    if (currentPage === "game") {
      setCurrentPage("landing");
    }
  };

  const handleLogout = () => {
    gameAPI.logout();
    setIsLoggedIn(false);
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
          onLogin={handleAuthSuccess}
          onSignupClick={() => setCurrentPage("signup")}
          onBackClick={() => setCurrentPage("landing")}
        />
      )}

      {currentPage === "signup" && (
        <SignUpPage
          onSignup={handleAuthSuccess}
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
