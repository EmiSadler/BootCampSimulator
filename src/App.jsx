import { useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import GamePage from "./pages/GamePage/Game";
import LoginPage from "./pages/AuthPages/LoginPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import { gameAPI } from "./services/api";

// Login/signup are temporarily disabled: there is no backend database to
// store accounts or saved games against yet, so everyone plays as a guest.
// Flip this back to true once auth has somewhere to persist to - the rest
// of the login/signup flow below is left in place for that.
const AUTH_ENABLED = false;

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(() => gameAPI.isLoggedIn());

  const handleStartGame = () => {
    setCurrentPage(AUTH_ENABLED && !isLoggedIn ? "login" : "game");
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
        <LandingPage onStartGame={handleStartGame} />
      )}

      {AUTH_ENABLED && currentPage === "login" && (
        <LoginPage
          onLogin={handleAuthSuccess}
          onSignupClick={() => setCurrentPage("signup")}
          onBackClick={() => setCurrentPage("landing")}
        />
      )}

      {AUTH_ENABLED && currentPage === "signup" && (
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
