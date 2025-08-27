import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogoutButton from "../components/LogoutButton";

describe("LogoutButton Component", () => {
  it("renders logout button with correct text and styling", () => {
    render(<LogoutButton />);

    const button = screen.getByRole("button", { name: "Logout" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("logout-button");
  });

  it("calls onClick handler when clicked", async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();

    render(<LogoutButton onClick={mockOnClick} />);

    const button = screen.getByRole("button", { name: "Logout" });
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("does not crash when onClick is not provided", async () => {
    const user = userEvent.setup();

    render(<LogoutButton />);

    const button = screen.getByRole("button", { name: "Logout" });

    // Should not throw error
    expect(() => user.click(button)).not.toThrow();
  });

  it("is accessible with proper button role", () => {
    render(<LogoutButton />);

    const button = screen.getByRole("button", { name: "Logout" });
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });
});
