import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calendar from "../components/Calendar";

describe("Calendar Component", () => {
  it("shows the bootcamp day and January of year 1 on day 1", () => {
    render(<Calendar day={1} actionsRemaining={8} onEndDay={() => {}} />);

    expect(screen.getByText("January 1")).toBeInTheDocument();
    expect(screen.getByText("Bootcamp Day: 1")).toBeInTheDocument();
    expect(screen.getByText("Today: Mon")).toBeInTheDocument();
  });

  it("shows remaining actions on a weekday", () => {
    render(<Calendar day={1} actionsRemaining={5} onEndDay={() => {}} />);

    expect(screen.getByText("Actions: 5/8")).toBeInTheDocument();
    expect(screen.queryByText("No Bootcamp")).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("End Day Early");
  });

  it("shows the weekend label instead of actions on a weekend day", () => {
    // Day 1 = Monday, so day 6 = Saturday
    render(<Calendar day={6} actionsRemaining={8} onEndDay={() => {}} />);

    expect(screen.getByText("Today: Sat")).toBeInTheDocument();
    expect(screen.getByText("No Bootcamp")).toBeInTheDocument();
    expect(screen.queryByText(/Actions:/)).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Skip to Monday");
  });

  it("stays in month 1 on day 30, the last day of the month", () => {
    render(<Calendar day={30} actionsRemaining={8} onEndDay={() => {}} />);

    expect(screen.getByText("January 1")).toBeInTheDocument();
  });

  it("moves into month 2 after 30 days", () => {
    render(<Calendar day={31} actionsRemaining={8} onEndDay={() => {}} />);

    expect(screen.getByText("February 1")).toBeInTheDocument();
    expect(screen.getByText("Bootcamp Day: 31")).toBeInTheDocument();
  });

  it("moves into year 2 after 12 months", () => {
    render(<Calendar day={361} actionsRemaining={8} onEndDay={() => {}} />);

    expect(screen.getByText("January 2")).toBeInTheDocument();
  });

  it("highlights the current day of the month", () => {
    render(<Calendar day={5} actionsRemaining={8} onEndDay={() => {}} />);

    const current = document.querySelector(".calendar-day.current");
    expect(current).toHaveTextContent("5");
  });

  it("marks Saturday and Sunday cells as weekend in the grid", () => {
    render(<Calendar day={1} actionsRemaining={8} onEndDay={() => {}} />);

    // Day 1 is Monday, so day-of-month cells 6 and 7 are Sat/Sun
    const saturday = screen.getByText("6", { selector: ".calendar-day" });
    const sunday = screen.getByText("7", { selector: ".calendar-day" });
    expect(saturday).toHaveClass("weekend");
    expect(sunday).toHaveClass("weekend");
  });

  it("calls onEndDay when the button is clicked", async () => {
    const user = userEvent.setup();
    const onEndDay = vi.fn();

    render(<Calendar day={1} actionsRemaining={8} onEndDay={onEndDay} />);
    await user.click(screen.getByRole("button"));

    expect(onEndDay).toHaveBeenCalledTimes(1);
  });
});
