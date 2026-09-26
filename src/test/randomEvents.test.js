import { describe, it, expect, vi, afterEach } from "vitest";
import {
  randomEvents,
  shouldTriggerEvent,
  getRandomEvent,
} from "../utils/randomEvents";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("randomEvents data", () => {
  it("has unique ids", () => {
    const ids = randomEvents.map((event) => event.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every event a valid type, rarity and complete effect", () => {
    randomEvents.forEach((event) => {
      expect(["positive", "negative"]).toContain(event.type);
      expect(["common", "uncommon", "rare"]).toContain(event.rarity);
      expect(event.name).toBeTruthy();
      expect(event.description).toBeTruthy();

      const { actionsLost, energyChange, skillChange, bondsChange } =
        event.effect;
      expect(actionsLost === "all" || typeof actionsLost === "number").toBe(
        true
      );
      expect(typeof energyChange).toBe("number");
      expect(typeof skillChange).toBe("number");
      expect(typeof bondsChange).toBe("number");
    });
  });

  it("only sets bondsChangeType when bonds actually change", () => {
    randomEvents.forEach((event) => {
      if (event.effect.bondsChangeType) {
        expect(event.effect.bondsChange).not.toBe(0);
        expect(event.effect.bondsChangeType).toBe("all");
      }
    });
  });
});

describe("shouldTriggerEvent", () => {
  it("triggers when the roll is below the chance (default 30)", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.29);
    expect(shouldTriggerEvent()).toBe(true);
  });

  it("does not trigger when the roll is at or above the chance", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.3);
    expect(shouldTriggerEvent()).toBe(false);
  });

  it("respects a custom chance", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);
    expect(shouldTriggerEvent(60)).toBe(true);
    expect(shouldTriggerEvent(50)).toBe(false);
  });

  it("never triggers at 0% and always triggers at 100%", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    expect(shouldTriggerEvent(0)).toBe(false);
    vi.spyOn(Math, "random").mockReturnValue(0.999999);
    expect(shouldTriggerEvent(100)).toBe(true);
  });
});

describe("getRandomEvent", () => {
  const weights = { common: 3, uncommon: 2, rare: 1 };
  const poolSize = randomEvents.reduce(
    (total, event) => total + weights[event.rarity],
    0
  );

  it("returns an event from the list", () => {
    expect(randomEvents).toContain(getRandomEvent());
  });

  it("weights events 3:2:1 for common:uncommon:rare", () => {
    // Walk the whole weighted pool once, one slot per roll.
    const counts = {};
    for (let slot = 0; slot < poolSize; slot++) {
      vi.spyOn(Math, "random").mockReturnValue((slot + 0.5) / poolSize);
      const event = getRandomEvent();
      counts[event.id] = (counts[event.id] || 0) + 1;
    }

    randomEvents.forEach((event) => {
      expect(counts[event.id]).toBe(weights[event.rarity]);
    });
  });

  it("can reach the first and last events in the list", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    expect(getRandomEvent()).toBe(randomEvents[0]);
    vi.spyOn(Math, "random").mockReturnValue(0.999999);
    expect(getRandomEvent()).toBe(randomEvents[randomEvents.length - 1]);
  });
});
