import { useState } from "react";
import { gameAPI } from "../../services/api";
import "../../css/Authentication.css";

function LoginPage({ onLogin, onSignupClick, onBackClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const success = await gameAPI.login(username, password);
      if (success) {
        onLogin();
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("An error occurred during login");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to BootCamp Simulator</h2>
      {error && <div className="auth-error">{error}</div>}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-button" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="auth-switch">
        <span>Don't have an account? </span>
        <button onClick={onSignupClick} className="link-button">
          Sign Up
        </button>
      </div>

      <button onClick={onBackClick} className="back-button">
        Back to Home
      </button>
    </div>
  );
}

export default LoginPage;
