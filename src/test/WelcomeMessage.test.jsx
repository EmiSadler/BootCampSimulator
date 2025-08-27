import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WelcomeMessage from "../components/WelcomeMessage";

describe("WelcomeMessage Component", () => {
  it("renders welcome message with default values", () => {
    render(<WelcomeMessage />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Welcome to Day 1 of Bootcamp Student!");
  });

  it("renders welcome message with custom day", () => {
    render(<WelcomeMessage day={5} />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Welcome to Day 5 of Bootcamp Student!");
  });

  it("renders welcome message with custom username", () => {
    render(<WelcomeMessage username="Alice" />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Welcome to Day 1 of Bootcamp Alice!");
  });

  it("renders welcome message with both custom day and username", () => {
    render(<WelcomeMessage day={10} username="Bob" />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Welcome to Day 10 of Bootcamp Bob!");
  });

  it("has proper CSS class applied", () => {
    render(<WelcomeMessage />);

    const container = screen.getByRole("heading").parentElement;
    expect(container).toHaveClass("welcome-message");
  });

  it("handles edge case values gracefully", () => {
    render(<WelcomeMessage day={0} username="" />);

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Welcome to Day 0 of Bootcamp !");
  });
});
