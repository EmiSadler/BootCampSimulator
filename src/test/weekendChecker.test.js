import { describe, it, expect } from "vitest";
import { isWeekend } from "../utils/weekendChecker";

describe("isWeekend", () => {
  it.each([1, 2, 3, 4, 5, 8, 12, 15])("day %i is a weekday", (day) => {
    expect(isWeekend(day)).toBe(false);
  });

  it.each([6, 7, 13, 14, 20, 21])("day %i is a weekend", (day) => {
    expect(isWeekend(day)).toBe(true);
  });
});
