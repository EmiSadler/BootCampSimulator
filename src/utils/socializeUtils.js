import { clamp } from "./helpers";

// Bonds can go negative (enemies) but are capped at -100 and +100
export const clampBond = (bond) => clamp(bond, -100, 100);

/**
 * Picks a random person from the cohort to socialize with
 * @param {object} cohortBonds - The social bonds object
 * @param {object[]} cohortMembers - Cohort member details, matched to bonds by name
 * @returns {object} - The selected person's info plus their current bondValue
 */
export function pickRandomPersonToSocialize(cohortBonds, cohortMembers) {
  const cohortNames = Object.keys(cohortBonds);
  const randomPersonName =
    cohortNames[Math.floor(Math.random() * cohortNames.length)];

  // Get full person details if available
  const personDetails = cohortMembers.find(
    (member) => member.name === randomPersonName
  ) || { name: randomPersonName };

  return {
    ...personDetails,
    bondValue: cohortBonds[randomPersonName],
  };
}

/**
 * Updates the bond with a person based on a selected activity
 * @param {object} socialBonds - Current social bonds object
 * @param {string} personName - Name of the person to update bond with
 * @param {number} bondChange - Amount to change the bond by (can be negative)
 * @returns {object} - Updated bonds object
 */
export function updateBondWithPerson(socialBonds, personName, bondChange) {
  const currentBond = socialBonds[personName] || 0;

  return {
    ...socialBonds,
    [personName]: clampBond(currentBond + bondChange),
  };
}

/**
 * Determines bond change based on person's preferences
 * @param {object} person - Person object with likes and dislikes
 * @param {object} activity - Activity object with id and bondIncrease
 * @returns {object} - Information about the bond change and reaction
 */
export function calculateBondChange(person, activity) {
  const likes = person.likes || [];
  const dislikes = person.dislikes || [];

  let bondChange = activity.bondIncrease;
  let reaction = "neutral";
  let message = "";

  // Check if this is a liked activity
  if (likes.includes(activity.id)) {
    bondChange = Math.round(activity.bondIncrease * 1.5); // 50% bonus for more impact
    reaction = "like";
    message = `${person.name}'s face lit up! They really enjoyed ${activity.name}! Your bond increased by ${bondChange}.`;
  }
  // Check if this is a disliked activity
  else if (dislikes.includes(activity.id)) {
    bondChange = -Math.round(activity.bondIncrease * 1.0);
    reaction = "dislike";
    message = `Oops! ${
      person.name
    } clearly disliked this activity. Your bond decreased by ${Math.abs(
      bondChange
    )}.`;
  }
  // Neutral reaction
  else {
    message = `You had a nice time with ${person.name}. Your bond increased by ${bondChange}.`;
  }

  return {
    bondChange,
    reaction,
    message,
  };
}
