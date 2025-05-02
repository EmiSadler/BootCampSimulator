import possibleCohortMembers from "../data/cohortData";
import { possibleActivities } from "./socializeUtils";

/**
 * Generates a random cohort of bootcamp classmates with preferences
 * @param {number} minSize - Minimum cohort size (default: 5)
 * @param {number} maxSize - Maximum cohort size (default: 10)
 * @returns {object} - Object with cohort member info and bond values
 */
export function generateRandomCohort(minSize = 5, maxSize = 10) {
  // Shuffle the array of possible cohort members
  const shuffledMembers = [...possibleCohortMembers].sort(
    () => 0.5 - Math.random()
  );

  // Generate a random cohort size between minSize and maxSize
  const cohortSize =
    Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

  // Take the first N members based on cohort size
  const selectedMembers = shuffledMembers.slice(0, cohortSize);

  // Generate random likes and dislikes for each cohort member
  const membersWithPreferences = selectedMembers.map((member) => {
    // Create a copy of all possible activity IDs
    const allActivityIds = possibleActivities.map((activity) => activity.id);

    // Shuffle the activity IDs
    const shuffledActivities = [...allActivityIds].sort(
      () => 0.5 - Math.random()
    );

    // Assign 3-5 random likes
    const numLikes = Math.floor(Math.random() * 3) + 3; // 3-5 likes
    const likes = shuffledActivities.slice(0, numLikes);

    // Assign 2-4 random dislikes (from remaining activities)
    const numDislikes = Math.floor(Math.random() * 3) + 2; // 2-4 dislikes
    const dislikes = shuffledActivities.slice(numLikes, numLikes + numDislikes);

    // Return the member with preferences
    return {
      ...member,
      likes,
      dislikes,
    };
  });

  // Create the initial cohort object with all bonds at 0
  const cohort = {};
  membersWithPreferences.forEach((member) => {
    cohort[member.name] = 0;
  });

  return {
    members: membersWithPreferences,
    bonds: cohort,
  };
}

/**
 * Get full details for a cohort member by name
 * @param {string} name - The name of the cohort member
 * @returns {object|null} - The cohort member object or null if not found
 */
export function getCohortMemberDetails(name) {
  return possibleCohortMembers.find((member) => member.name === name) || null;
}

/**
 * Updates the bond with a random cohort member
 * @param {object} currentBonds - Current social bonds object
 * @param {number} bondIncrease - Amount to increase the bond by (default: 10)
 * @returns {object} - Updated bonds and the name of the person whose bond increased
 */
export function socializeWithRandomPerson(currentBonds, bondIncrease = 10) {
  const cohortNames = Object.keys(currentBonds);
  const randomPerson =
    cohortNames[Math.floor(Math.random() * cohortNames.length)];

  const updatedBonds = {
    ...currentBonds,
    [randomPerson]: currentBonds[randomPerson] + bondIncrease,
  };

  return {
    bonds: updatedBonds,
    person: randomPerson,
  };
}
