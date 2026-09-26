import { describe, it, expect, vi, afterEach } from "vitest";
import possibleActivities from "../data/socialActivities";
import {
  pickRandomPersonToSocialize,
  updateBondWithPerson,
  calculateBondChange,
} from "../utils/socializeUtils";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("possibleActivities", () => {
  it("has unique ids", () => {
    const ids = possibleActivities.map((activity) => activity.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every activity a positive energy cost and bond increase", () => {
    possibleActivities.forEach((activity) => {
      expect(activity.energyCost).toBeGreaterThan(0);
      expect(activity.bondIncrease).toBeGreaterThan(0);
    });
  });
});

describe("pickRandomPersonToSocialize", () => {
  const bonds = { Ana: 10, Ben: -5 };
  const members = [
    { name: "Ana", hobby: "Chess" },
    { name: "Ben", hobby: "Hiking" },
  ];

  it("returns the member details plus their current bond", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.99);
    expect(pickRandomPersonToSocialize(bonds, members)).toEqual({
      name: "Ben",
      hobby: "Hiking",
      bondValue: -5,
    });
  });

  it("picks the first person when random is 0", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    expect(pickRandomPersonToSocialize(bonds, members).name).toBe("Ana");
  });

  it("falls back to just the name when the member is not in the list", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    expect(pickRandomPersonToSocialize(bonds, [])).toEqual({
      name: "Ana",
      bondValue: 10,
    });
  });
});

describe("updateBondWithPerson", () => {
  it("adds the change to the existing bond", () => {
    expect(updateBondWithPerson({ Ana: 10 }, "Ana", 5)).toEqual({ Ana: 15 });
  });

  it("treats a missing person as a bond of 0", () => {
    expect(updateBondWithPerson({}, "Ana", 8)).toEqual({ Ana: 8 });
  });

  it("allows negative bonds", () => {
    expect(updateBondWithPerson({ Ana: 0 }, "Ana", -12)).toEqual({ Ana: -12 });
  });

  it("caps the bond at 100 and -100", () => {
    expect(updateBondWithPerson({ Ana: 95 }, "Ana", 20).Ana).toBe(100);
    expect(updateBondWithPerson({ Ana: -95 }, "Ana", -20).Ana).toBe(-100);
  });

  it("does not mutate the original bonds or touch other people", () => {
    const original = { Ana: 10, Ben: 20 };
    const updated = updateBondWithPerson(original, "Ana", 5);
    expect(original).toEqual({ Ana: 10, Ben: 20 });
    expect(updated.Ben).toBe(20);
  });
});

describe("calculateBondChange", () => {
  const activity = { id: 3, name: "Play ping pong", bondIncrease: 12 };

  it("gives a 50% bonus for a liked activity", () => {
    const result = calculateBondChange(
      { name: "Ana", likes: [3], dislikes: [] },
      activity
    );
    expect(result.bondChange).toBe(18);
    expect(result.reaction).toBe("like");
    expect(result.message).toBe(
      "Ana's face lit up! They really enjoyed Play ping pong! Your bond increased by 18."
    );
  });

  it("rounds the liked bonus", () => {
    const result = calculateBondChange(
      { name: "Ana", likes: [3] },
      { ...activity, bondIncrease: 7 }
    );
    expect(result.bondChange).toBe(11);
  });

  it("reduces the bond by the full amount for a disliked activity", () => {
    const result = calculateBondChange(
      { name: "Ben", likes: [], dislikes: [3] },
      activity
    );
    expect(result.bondChange).toBe(-12);
    expect(result.reaction).toBe("dislike");
    expect(result.message).toBe(
      "Oops! Ben clearly disliked this activity. Your bond decreased by 12."
    );
  });

  it("uses the base increase for a neutral activity", () => {
    const result = calculateBondChange(
      { name: "Cy", likes: [1], dislikes: [2] },
      activity
    );
    expect(result).toEqual({
      bondChange: 12,
      reaction: "neutral",
      message: "You had a nice time with Cy. Your bond increased by 12.",
    });
  });

  it("treats a person without likes or dislikes as neutral", () => {
    const result = calculateBondChange({ name: "Di" }, activity);
    expect(result.reaction).toBe("neutral");
    expect(result.bondChange).toBe(12);
  });

  it("prefers like over dislike if an id is somehow in both", () => {
    const result = calculateBondChange(
      { name: "Ed", likes: [3], dislikes: [3] },
      activity
    );
    expect(result.reaction).toBe("like");
  });
});
