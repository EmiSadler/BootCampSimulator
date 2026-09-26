import { describe, it, expect, vi, afterEach } from "vitest";
import possibleCohortMembers from "../data/cohortData";
import possibleActivities from "../data/socialActivities";
import { generateRandomCohort } from "../utils/cohortUtils";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("generateRandomCohort", () => {
  it("makes a cohort within the default 5-10 size range", () => {
    for (let i = 0; i < 50; i++) {
      const { members } = generateRandomCohort();
      expect(members.length).toBeGreaterThanOrEqual(5);
      expect(members.length).toBeLessThanOrEqual(10);
    }
  });

  it("respects custom min and max sizes", () => {
    for (let i = 0; i < 20; i++) {
      expect(generateRandomCohort(3, 3).members).toHaveLength(3);
    }
  });

  it("only uses real members, without repeats", () => {
    const names = possibleCohortMembers.map((member) => member.name);
    const { members } = generateRandomCohort(10, 10);
    const picked = members.map((member) => member.name);

    expect(new Set(picked).size).toBe(picked.length);
    picked.forEach((name) => expect(names).toContain(name));
  });

  it("keeps each member's profile and adds likes and dislikes", () => {
    const { members } = generateRandomCohort();
    members.forEach((member) => {
      const source = possibleCohortMembers.find((m) => m.name === member.name);
      expect(member).toMatchObject({
        name: source.name,
        expertise: source.expertise,
        personality: source.personality,
        hobby: source.hobby,
        background: source.background,
      });
    });
  });

  it("gives 3-5 likes and 2-4 dislikes that never overlap", () => {
    const validIds = possibleActivities.map((activity) => activity.id);

    for (let i = 0; i < 30; i++) {
      generateRandomCohort().members.forEach(({ likes, dislikes }) => {
        expect(likes.length).toBeGreaterThanOrEqual(3);
        expect(likes.length).toBeLessThanOrEqual(5);
        expect(dislikes.length).toBeGreaterThanOrEqual(2);
        expect(dislikes.length).toBeLessThanOrEqual(4);

        expect(likes.filter((id) => dislikes.includes(id))).toEqual([]);
        [...likes, ...dislikes].forEach((id) =>
          expect(validIds).toContain(id)
        );
      });
    }
  });

  it("starts every bond at 0, keyed by member name", () => {
    const { members, bonds } = generateRandomCohort();

    expect(Object.keys(bonds).sort()).toEqual(
      members.map((member) => member.name).sort()
    );
    Object.values(bonds).forEach((bond) => expect(bond).toBe(0));
  });

  it("does not modify the shared member data", () => {
    const before = JSON.stringify(possibleCohortMembers);
    generateRandomCohort();
    expect(JSON.stringify(possibleCohortMembers)).toBe(before);
  });
});
