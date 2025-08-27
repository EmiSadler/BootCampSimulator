import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Logo from "../components/Logo";

describe("Logo Component", () => {
  it("renders logo with correct image and alt text", () => {
    render(<Logo />);

    const logoImage = screen.getByAltText("BootCamp Simulator Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/assets/BootCampSimLogo2.png");
    expect(logoImage).toHaveClass("logo-image");
  });

  it("has correct title attribute for accessibility", () => {
    render(<Logo />);

    const logoImage = screen.getByAltText("BootCamp Simulator Logo");
    expect(logoImage).toHaveAttribute("title", "Click to return to main menu");
  });

  it("calls onClick handler when clicked", async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();

    render(<Logo onClick={mockOnClick} />);

    const logoContainer = screen.getByRole("img").parentElement;
    await user.click(logoContainer);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("does not crash when onClick is not provided", async () => {
    const user = userEvent.setup();

    render(<Logo />);

    const logoContainer = screen.getByRole("img").parentElement;
    await user.click(logoContainer);

    // Should not throw error
    expect(true).toBe(true);
  });

  it("has proper CSS classes applied", () => {
    render(<Logo />);

    const logoContainer = screen.getByRole("img").parentElement;
    expect(logoContainer).toHaveClass("logo-container");
  });
});
