import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventMessage from "../components/EventMessage";

const mockEvent = {
  name: "Test Event",
  description: "This is a test event description",
  type: "positive",
  effect: {
    energyChange: 10,
    skillChange: 5,
    actionsLost: 0,
    bondsChange: 0,
  },
};

const mockNegativeEvent = {
  name: "Negative Event",
  description: "This is a negative event",
  type: "negative",
  effect: {
    energyChange: -15,
    skillChange: -5,
    actionsLost: 2,
    bondsChange: -10,
  },
};

describe("EventMessage Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders nothing when no event is provided", () => {
    render(<EventMessage />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders event message with correct content", () => {
    render(<EventMessage event={mockEvent} />);

    expect(screen.getByText("Test Event")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test event description")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Continue" })
    ).toBeInTheDocument();
  });

  it("displays positive energy change correctly", () => {
    render(<EventMessage event={mockEvent} />);

    const energyEffect = screen.getByText("+10");
    expect(energyEffect).toBeInTheDocument();
    expect(energyEffect.closest(".effect-item")).toHaveClass("positive");
  });

  it("displays negative effects correctly", () => {
    render(<EventMessage event={mockNegativeEvent} />);

    expect(screen.getByText("-15")).toBeInTheDocument(); // Energy
    expect(screen.getByText("-5")).toBeInTheDocument(); // Skill
    expect(screen.getByText("-2")).toBeInTheDocument(); // Actions
    expect(screen.getByText("-10")).toBeInTheDocument(); // Bonds
  });

  it("displays skill change when present", () => {
    render(<EventMessage event={mockEvent} />);

    expect(screen.getByText("Coding Skill")).toBeInTheDocument();
    expect(screen.getByText("+5")).toBeInTheDocument();
  });

  it("calls onClose when Continue button is clicked", async () => {
    const user = userEvent.setup();
    const mockOnClose = vi.fn();

    render(<EventMessage event={mockEvent} onClose={mockOnClose} />);

    const continueButton = screen.getByRole("button", { name: "Continue" });
    await user.click(continueButton);

    // Wait for the timeout to complete
    await waitFor(
      () => {
        expect(mockOnClose).toHaveBeenCalledTimes(1);
      },
      { timeout: 500 }
    );
  });

  it('handles actions lost as "all"', () => {
    const eventWithAllActionsLost = {
      ...mockEvent,
      effect: {
        ...mockEvent.effect,
        actionsLost: "all",
      },
    };

    render(<EventMessage event={eventWithAllActionsLost} />);

    expect(screen.getByText("All Lost")).toBeInTheDocument();
  });

  it("does not display effects when values are 0", () => {
    const eventWithZeroEffects = {
      ...mockEvent,
      effect: {
        energyChange: 0,
        skillChange: 0,
        actionsLost: 0,
        bondsChange: 0,
      },
    };

    render(<EventMessage event={eventWithZeroEffects} />);

    expect(screen.queryByText("Energy")).not.toBeInTheDocument();
    expect(screen.queryByText("Coding Skill")).not.toBeInTheDocument();
    expect(screen.queryByText("Actions")).not.toBeInTheDocument();
    expect(screen.queryByText("Bond")).not.toBeInTheDocument();
  });

  it("applies correct CSS classes based on event type", () => {
    render(<EventMessage event={mockEvent} />);

    const eventMessage = screen.getByRole("button").closest(".event-message");
    expect(eventMessage).toHaveClass("positive");
  });

  it("shows proper effect icons", () => {
    render(<EventMessage event={mockEvent} />);

    expect(screen.getByText("⚡")).toBeInTheDocument(); // Energy icon
    expect(screen.getByText("💻")).toBeInTheDocument(); // Coding skill icon
  });

  it("handles bond changes with proper labeling", () => {
    const eventWithBondChange = {
      ...mockEvent,
      effect: {
        energyChange: 0,
        skillChange: 0,
        actionsLost: 0,
        bondsChange: 5,
        bondsChangeType: "all",
      },
    };

    render(<EventMessage event={eventWithBondChange} />);

    expect(screen.getByText("All Bonds")).toBeInTheDocument();
    // Check for the bond change value specifically in the bond section
    const bondSection = screen.getByText("All Bonds").closest(".effect-item");
    expect(bondSection).toContainHTML("+5");
  });
});
