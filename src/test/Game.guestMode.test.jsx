import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "../pages/GamePage/Game";
import { gameAPI } from "../services/api";

// Login/signup are disabled (no backend database yet - see App.jsx), so
// every player reaches the game as a guest: gameAPI.isLoggedIn() is always
// false and no backend calls should ever be made or required to succeed.
vi.mock("../services/api", () => ({
  gameAPI: {
    isLoggedIn: vi.fn(),
    logout: vi.fn(),
    getCurrentUser: vi.fn(),
    register: vi.fn(),
    login: vi.fn(),
    saveProgress: vi.fn(),
    loadProgress: vi.fn(),
    deleteProgress: vi.fn(),
  },
}));

describe("Game as a guest (no backend)", () => {
  beforeEach(() => {
    gameAPI.isLoggedIn.mockReturnValue(false);
    vi.spyOn(window, "confirm").mockReturnValue(true);
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows a default name instead of a blank one in the welcome header", () => {
    render(<Game onLogout={() => {}} onLogoClick={() => {}} />);

    expect(
      screen.getByText("Welcome to Day 1 of Bootcamp Student!")
    ).toBeInTheDocument();
  });

  it("restarting resets the game locally without calling the backend", async () => {
    const user = userEvent.setup();
    render(<Game onLogout={() => {}} onLogoClick={() => {}} />);

    await user.click(screen.getByRole("button", { name: "Restart" }));

    expect(gameAPI.deleteProgress).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      "Game restarted! Welcome to your fresh bootcamp experience!"
    );
    expect(
      screen.queryByText("Failed to restart game. Please try again.")
    ).not.toBeInTheDocument();
  });

  it("still deletes server-side progress and reports a real failure for a logged-in user", async () => {
    gameAPI.isLoggedIn.mockReturnValue(true);
    gameAPI.deleteProgress.mockResolvedValue(false);
    const user = userEvent.setup();
    render(<Game onLogout={() => {}} onLogoClick={() => {}} />);

    await user.click(screen.getByRole("button", { name: "Restart" }));

    expect(gameAPI.deleteProgress).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith(
      "Failed to restart game. Please try again."
    );
  });
});
