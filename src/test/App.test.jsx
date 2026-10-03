import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { gameAPI } from "../services/api";

vi.mock("../services/api", () => ({
  gameAPI: { isLoggedIn: vi.fn(), logout: vi.fn() },
}));

// Stub each page with buttons for the callbacks App passes in, so these
// tests cover App's navigation and login state rather than the pages.
// LandingPage only receives onStartGame: login/signup are disabled (see
// the AUTH_ENABLED flag in App.jsx), so App no longer wires up its own
// login/signup links.
vi.mock("../pages/LandingPage/LandingPage", () => ({
  default: ({ onStartGame }) => (
    <div>
      <h1>Landing page</h1>
      <button onClick={onStartGame}>start game</button>
    </div>
  ),
}));

vi.mock("../pages/AuthPages/LoginPage", () => ({
  default: ({ onLogin, onSignupClick, onBackClick }) => (
    <div>
      <h1>Login page</h1>
      <button onClick={onLogin}>submit login</button>
      <button onClick={onSignupClick}>login to signup</button>
      <button onClick={onBackClick}>login back</button>
    </div>
  ),
}));

vi.mock("../pages/AuthPages/SignUpPage", () => ({
  default: ({ onSignup, onLoginClick, onBackClick }) => (
    <div>
      <h1>Signup page</h1>
      <button onClick={onSignup}>submit signup</button>
      <button onClick={onLoginClick}>signup to login</button>
      <button onClick={onBackClick}>signup back</button>
    </div>
  ),
}));

vi.mock("../pages/GamePage/Game", () => ({
  default: ({ onLogout, onLogoClick }) => (
    <div>
      <h1>Game page</h1>
      <button onClick={onLogout}>logout</button>
      <button onClick={onLogoClick}>logo</button>
    </div>
  ),
}));

const click = (name) => userEvent.click(screen.getByRole("button", { name }));
const expectPage = (title) =>
  expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();

describe("App", () => {
  beforeEach(() => {
    gameAPI.isLoggedIn.mockReturnValue(false);
  });

  it("starts on the landing page", () => {
    render(<App />);

    expectPage("Landing page");
    expect(screen.queryByRole("heading", { name: "Game page" })).toBeNull();
  });

  describe("starting the game", () => {
    it("goes straight to the game for a guest (auth is disabled)", async () => {
      render(<App />);

      await click("start game");

      expectPage("Game page");
    });

    it("goes straight to the game when a token already exists", async () => {
      gameAPI.isLoggedIn.mockReturnValue(true);
      render(<App />);

      await click("start game");

      expectPage("Game page");
    });
  });

  describe("logging out", () => {
    it("clears the token and returns to the landing page", async () => {
      render(<App />);
      await click("start game");

      await click("logout");

      expect(gameAPI.logout).toHaveBeenCalledTimes(1);
      expectPage("Landing page");
    });

    it("can start a new game again afterwards", async () => {
      render(<App />);
      await click("start game");
      await click("logout");

      await click("start game");

      expectPage("Game page");
    });
  });

  describe("clicking the logo in the game", () => {
    it("returns to the landing page without logging out", async () => {
      render(<App />);
      await click("start game");

      await click("logo");

      expectPage("Landing page");
      expect(gameAPI.logout).not.toHaveBeenCalled();
    });
  });
});
