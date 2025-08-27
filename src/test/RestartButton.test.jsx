import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RestartButton from "../components/RestartButton";

// Mock window.confirm
const mockConfirm = vi.fn();
global.confirm = mockConfirm;

describe("RestartButton Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders restart button with correct text and title", () => {
    render(<RestartButton />);

    const button = screen.getByRole("button", { name: "Restart" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("title", "Restart Game");
    expect(button).toHaveClass("restart-button");
  });

  it("shows confirmation dialog when clicked", async () => {
    const user = userEvent.setup();
    const mockOnRestart = vi.fn();
    mockConfirm.mockReturnValue(false);

    render(<RestartButton onRestart={mockOnRestart} />);

    const button = screen.getByRole("button", { name: "Restart" });
    await user.click(button);

    expect(mockConfirm).toHaveBeenCalledTimes(1);
    expect(mockConfirm).toHaveBeenCalledWith(
      "Are you sure you want to restart the game? This will delete all your saved progress and start a fresh game from the beginning. This action cannot be undone."
    );
  });

  it("calls onRestart when user confirms", async () => {
    const user = userEvent.setup();
    const mockOnRestart = vi.fn();
    mockConfirm.mockReturnValue(true);

    render(<RestartButton onRestart={mockOnRestart} />);

    const button = screen.getByRole("button", { name: "Restart" });
    await user.click(button);

    expect(mockConfirm).toHaveBeenCalledTimes(1);
    expect(mockOnRestart).toHaveBeenCalledTimes(1);
  });

  it("does not call onRestart when user cancels", async () => {
    const user = userEvent.setup();
    const mockOnRestart = vi.fn();
    mockConfirm.mockReturnValue(false);

    render(<RestartButton onRestart={mockOnRestart} />);

    const button = screen.getByRole("button", { name: "Restart" });
    await user.click(button);

    expect(mockConfirm).toHaveBeenCalledTimes(1);
    expect(mockOnRestart).not.toHaveBeenCalled();
  });

  it("does not crash when onRestart is not provided", async () => {
    const user = userEvent.setup();
    mockConfirm.mockReturnValue(true);

    render(<RestartButton />);

    const button = screen.getByRole("button", { name: "Restart" });

    // Should not throw error
    expect(() => user.click(button)).not.toThrow();
  });
});
