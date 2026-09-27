import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EnergyModal from "../components/EnergyModal";

describe("EnergyModal Component", () => {
  it("renders the low energy message", () => {
    render(<EnergyModal onClose={() => {}} onStartNewDay={() => {}} />);

    expect(screen.getByText("Low Energy")).toBeInTheDocument();
    expect(screen.getByText("You're too tired to continue!")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<EnergyModal onClose={onClose} onStartNewDay={() => {}} />);
    await user.click(screen.getByRole("button", { name: "×" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Rest is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<EnergyModal onClose={onClose} onStartNewDay={() => {}} />);
    await user.click(screen.getByRole("button", { name: /Rest/ }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onStartNewDay when End Day is clicked", async () => {
    const user = userEvent.setup();
    const onStartNewDay = vi.fn();

    render(<EnergyModal onClose={() => {}} onStartNewDay={onStartNewDay} />);
    await user.click(screen.getByRole("button", { name: "End Day" }));

    expect(onStartNewDay).toHaveBeenCalledTimes(1);
  });
});
