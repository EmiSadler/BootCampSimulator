import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DaySummaryModal from "../components/DaySummaryModal";

const baseSummary = {
  skillGained: 3,
  skillDecayed: 0,
  energyLevel: 65,
  newRelationships: 0,
  bondsImproved: 0,
  challengesCompleted: 0,
  lessonsLearned: 0,
};

describe("DaySummaryModal Component", () => {
  it("always shows the skill gained and energy level", () => {
    render(<DaySummaryModal daySummary={baseSummary} onStartNewDay={() => {}} />);

    expect(screen.getByText("+3")).toBeInTheDocument();
    expect(screen.getByText("65/100")).toBeInTheDocument();
  });

  it("marks low energy as negative", () => {
    render(
      <DaySummaryModal
        daySummary={{ ...baseSummary, energyLevel: 20 }}
        onStartNewDay={() => {}}
      />
    );

    expect(screen.getByText("20/100")).toHaveClass("negative");
  });

  it("marks healthy energy as neutral", () => {
    render(<DaySummaryModal daySummary={baseSummary} onStartNewDay={() => {}} />);

    expect(screen.getByText("65/100")).toHaveClass("neutral");
  });

  it("hides optional stats that are zero", () => {
    render(<DaySummaryModal daySummary={baseSummary} onStartNewDay={() => {}} />);

    expect(screen.queryByText("Coding Skill Lost:")).not.toBeInTheDocument();
    expect(screen.queryByText("New Relationships:")).not.toBeInTheDocument();
    expect(screen.queryByText("Bonds Improved:")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Coding Challenges Completed:")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Python Lessons Completed:")
    ).not.toBeInTheDocument();
  });

  it("shows each optional stat only when it is greater than zero", () => {
    render(
      <DaySummaryModal
        daySummary={{
          ...baseSummary,
          skillDecayed: 2,
          newRelationships: 1,
          bondsImproved: 4,
          challengesCompleted: 1,
          lessonsLearned: 2,
        }}
        onStartNewDay={() => {}}
      />
    );

    expect(screen.getByText("Coding Skill Lost:")).toBeInTheDocument();
    expect(screen.getByText("-2")).toBeInTheDocument();
    expect(screen.getByText("New Relationships:")).toBeInTheDocument();
    expect(screen.getByText("Bonds Improved:")).toBeInTheDocument();
    expect(screen.getByText("Coding Challenges Completed:")).toBeInTheDocument();
    expect(screen.getByText("Python Lessons Completed:")).toBeInTheDocument();
  });

  it("shows a custom tip when given one, otherwise the default", () => {
    const { rerender } = render(
      <DaySummaryModal
        daySummary={{ ...baseSummary, tip: "Try socializing more." }}
        onStartNewDay={() => {}}
      />
    );
    expect(screen.getByText("Try socializing more.")).toBeInTheDocument();

    rerender(<DaySummaryModal daySummary={baseSummary} onStartNewDay={() => {}} />);
    expect(
      screen.getByText(
        "Balance your activities and make sure to rest when your energy gets low!"
      )
    ).toBeInTheDocument();
  });

  it("calls onStartNewDay when the button is clicked", async () => {
    const user = userEvent.setup();
    const onStartNewDay = vi.fn();

    render(<DaySummaryModal daySummary={baseSummary} onStartNewDay={onStartNewDay} />);
    await user.click(screen.getByRole("button", { name: "Start Next Day" }));

    expect(onStartNewDay).toHaveBeenCalledTimes(1);
  });
});
