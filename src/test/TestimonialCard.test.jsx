import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TestimonialCard from "../pages/LandingPage/TestimonialCard";

describe("TestimonialCard Component", () => {
  it("renders the review, name and role", () => {
    render(
      <TestimonialCard
        review="Great course!"
        name="Jess T."
        role="Junior Developer"
        avatar="JT"
      />
    );

    expect(screen.getByText("Great course!")).toBeInTheDocument();
    expect(screen.getByText("Jess T.")).toBeInTheDocument();
    expect(screen.getByText("Junior Developer")).toBeInTheDocument();
    expect(screen.getByText("JT")).toBeInTheDocument();
  });

  it("shows a 5-star rating", () => {
    render(<TestimonialCard review="r" name="n" role="r" avatar="a" />);

    expect(screen.getByText("★★★★★")).toBeInTheDocument();
  });

  // .testimonial-author is styled as the flex row (display: flex;
  // align-items: center) meant to hold the avatar and name/role side by
  // side - it has to actually contain them, not sit empty beside them.
  it("puts the avatar and author info inside the testimonial-author row", () => {
    render(
      <TestimonialCard
        review="Great course!"
        name="Jess T."
        role="Junior Developer"
        avatar="JT"
      />
    );

    const authorRow = document.querySelector(".testimonial-author");
    expect(authorRow).toContainElement(screen.getByText("JT"));
    expect(authorRow).toContainElement(screen.getByText("Jess T."));
    expect(authorRow).toContainElement(screen.getByText("Junior Developer"));
  });
});
