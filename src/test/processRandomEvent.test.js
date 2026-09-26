import { describe, it, expect, vi, beforeEach } from "vitest";
import processRandomEvent from "../utils/processRandomEvent";
import { shouldTriggerEvent, getRandomEvent } from "../utils/randomEvents";

vi.mock("../utils/randomEvents", () => ({
  shouldTriggerEvent: vi.fn(),
  getRandomEvent: vi.fn(),
}));

const makeEvent = (effect = {}) => ({
  id: "test_event",
  name: "Test Event",
  effect: {
    actionsLost: 0,
    energyChange: 0,
    skillChange: 0,
    bondsChange: 0,
    ...effect,
  },
});

describe("processRandomEvent", () => {
  let params;

  beforeEach(() => {
    params = {
      day: 1,
      energy: 50,
      codingSkill: 10,
      actionsRemaining: 5,
      cohortData: { members: [{ name: "Ana" }], bonds: { Ana: 0, Ben: 95 } },
      setEnergy: vi.fn(),
      setCodingSkill: vi.fn(),
      setActionsRemaining: vi.fn(),
      setCohortData: vi.fn(),
      setCurrentEvent: vi.fn(),
    };
    shouldTriggerEvent.mockReturnValue(true);
  });

  const run = (effect) => {
    getRandomEvent.mockReturnValue(makeEvent(effect));
    return processRandomEvent(params);
  };

  describe("when nothing triggers", () => {
    it("returns false and changes nothing", () => {
      shouldTriggerEvent.mockReturnValue(false);

      expect(processRandomEvent(params)).toBe(false);
      expect(getRandomEvent).not.toHaveBeenCalled();
      expect(params.setEnergy).not.toHaveBeenCalled();
      expect(params.setCurrentEvent).not.toHaveBeenCalled();
    });
  });

  describe("on weekends", () => {
    it.each([6, 7, 13, 14])("skips events on day %i", (day) => {
      params.day = day;

      expect(processRandomEvent(params)).toBeUndefined();
      expect(shouldTriggerEvent).not.toHaveBeenCalled();
      expect(params.setCurrentEvent).not.toHaveBeenCalled();
    });

    it.each([1, 5, 8, 12])("can trigger on weekday %i", (day) => {
      params.day = day;

      expect(run()).toBe(true);
    });
  });

  describe("when an event triggers", () => {
    it("returns true and reports the event", () => {
      const event = makeEvent();
      getRandomEvent.mockReturnValue(event);

      expect(processRandomEvent(params)).toBe(true);
      expect(params.setCurrentEvent).toHaveBeenCalledWith(event);
    });

    it("sets actions to 0 when all actions are lost", () => {
      run({ actionsLost: "all" });
      expect(params.setActionsRemaining).toHaveBeenCalledWith(0);
    });

    it("subtracts lost actions", () => {
      run({ actionsLost: 2 });
      expect(params.setActionsRemaining).toHaveBeenCalledWith(3);
    });

    it("never drops actions below 0", () => {
      run({ actionsLost: 9 });
      expect(params.setActionsRemaining).toHaveBeenCalledWith(0);
    });

    it("gives an extra action when actionsLost is negative", () => {
      run({ actionsLost: -1 });
      expect(params.setActionsRemaining).toHaveBeenCalledWith(6);
    });

    it("applies the energy change", () => {
      run({ energyChange: -20 });
      expect(params.setEnergy).toHaveBeenCalledWith(30);
    });

    it("clamps energy to 0..100", () => {
      run({ energyChange: -80 });
      expect(params.setEnergy).toHaveBeenLastCalledWith(0);

      run({ energyChange: 80 });
      expect(params.setEnergy).toHaveBeenLastCalledWith(100);
    });

    it("applies the coding skill change, including negative changes", () => {
      run({ skillChange: 8 });
      expect(params.setCodingSkill).toHaveBeenLastCalledWith(18);

      run({ skillChange: -3 });
      expect(params.setCodingSkill).toHaveBeenLastCalledWith(7);
    });

    it("applies an 'all' bonds change to every cohort member", () => {
      run({ bondsChange: 3, bondsChangeType: "all" });

      expect(params.setCohortData).toHaveBeenCalledWith({
        members: params.cohortData.members,
        bonds: { Ana: 3, Ben: 98 },
      });
    });

    it("clamps bonds to -100..100", () => {
      run({ bondsChange: 15, bondsChangeType: "all" });
      expect(params.setCohortData.mock.calls[0][0].bonds.Ben).toBe(100);

      params.setCohortData.mockClear();
      params.cohortData.bonds = { Ana: -95 };
      run({ bondsChange: -10, bondsChangeType: "all" });
      expect(params.setCohortData.mock.calls[0][0].bonds.Ana).toBe(-100);
    });

    it("does not touch bonds when bondsChange is 0", () => {
      run({ bondsChange: 0 });
      expect(params.setCohortData).not.toHaveBeenCalled();
    });

    it("does not touch bonds when the change type is not 'all'", () => {
      run({ bondsChange: 5 });
      expect(params.setCohortData).not.toHaveBeenCalled();
    });

    it("does not mutate the existing cohort bonds", () => {
      run({ bondsChange: 5, bondsChangeType: "all" });
      expect(params.cohortData.bonds).toEqual({ Ana: 0, Ben: 95 });
    });
  });
});
