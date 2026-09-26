import { describe, it, expect, vi, afterEach } from "vitest";
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

afterEach(() => {
  vi.restoreAllMocks();
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

  // Fisher-Yates makes one pick per position: position i chooses among i + 1
  // slots. Feeding it every possible combination of picks must give every
  // ordering exactly once, which is what "unbiased" means.
  it.each([3, 4, 5])("gives each ordering of %i items exactly once", (size) => {
    const items = Array.from({ length: size }, (_, index) => index);
    const orderings = new Map();

    const walk = (position, picks) => {
      if (position === 0) {
        const queue = [...picks];
        vi.spyOn(Math, "random").mockImplementation(() => queue.shift());

        const key = shuffle(items).join(",");
        orderings.set(key, (orderings.get(key) || 0) + 1);
        return;
      }

      for (let slot = 0; slot <= position; slot++) {
        // Pick the middle of each slot's range so floor() is unambiguous
        walk(position - 1, [...picks, (slot + 0.5) / (position + 1)]);
      }
    };
    walk(size - 1, []);

    const factorial = Array.from({ length: size }, (_, i) => i + 1).reduce(
      (product, n) => product * n
    );
    expect(orderings.size).toBe(factorial);
    orderings.forEach((count) => expect(count).toBe(1));
  });
});
