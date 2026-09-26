import possibleCohortMembers from "../data/cohortData";
import { possibleActivities } from "./socializeUtils";
import { shuffle } from "./helpers";

/**
 * Generates a random cohort of bootcamp classmates with preferences
 * @param {number} minSize - Minimum cohort size (default: 5)
 * @param {number} maxSize - Maximum cohort size (default: 10)
 * @returns {object} - Object with cohort member info and bond values
 */
export function generateRandomCohort(minSize = 5, maxSize = 10) {
  // Shuffle the array of possible cohort members
  const shuffledMembers = shuffle(possibleCohortMembers);

  // Generate a random cohort size between minSize and maxSize
  const cohortSize =
    Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

  // Take the first N members based on cohort size
  const selectedMembers = shuffledMembers.slice(0, cohortSize);

  // Generate random likes and dislikes for each cohort member
  const membersWithPreferences = selectedMembers.map((member) => {
    // Shuffle all possible activity IDs
    const shuffledActivities = shuffle(
      possibleActivities.map((activity) => activity.id)
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
