import { describe, it, expect } from "vitest";
import { clamp, shuffle } from "../utils/helpers";

describe("clamp", () => {
  it("returns the value when it is inside the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-50, -100, 100)).toBe(-50);
  });

  it("returns the bounds when the value equals them", () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it("caps values above the max and below the min", () => {
    expect(clamp(11, 0, 10)).toBe(10);
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(-101, -100, 100)).toBe(-100);
  });
});

describe("shuffle", () => {
  it("returns a new array with the same items", () => {
    const original = [1, 2, 3, 4, 5, 6];
    const result = shuffle(original);

    expect(result).not.toBe(original);
    expect([...result].sort()).toEqual(original);
  });

  it("does not modify the original array", () => {
    const original = [1, 2, 3, 4, 5, 6];
    shuffle(original);
    expect(original).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("handles empty and single-item arrays", () => {
    expect(shuffle([])).toEqual([]);
    expect(shuffle(["a"])).toEqual(["a"]);
  });
});
