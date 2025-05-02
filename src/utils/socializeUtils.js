// List of possible social activities
export const possibleActivities = [
  { id: 1, name: "Chat over a cup of tea", energyCost: 3, bondIncrease: 8 },
  { id: 2, name: "Go for coffee", energyCost: 5, bondIncrease: 10 },
  { id: 3, name: "Play ping pong", energyCost: 8, bondIncrease: 12 },
  { id: 4, name: "Send memes", energyCost: 2, bondIncrease: 6 },
  { id: 5, name: "Do yoga together", energyCost: 7, bondIncrease: 11 },
  { id: 6, name: "Go for a walk", energyCost: 6, bondIncrease: 10 },
  {
    id: 7,
    name: "Get candy from the convenience store",
    energyCost: 4,
    bondIncrease: 7,
  },
  { id: 8, name: "Hangout in the chill room", energyCost: 3, bondIncrease: 7 },
  { id: 9, name: "Play video games", energyCost: 6, bondIncrease: 12 },
  { id: 10, name: "Discuss politics", energyCost: 7, bondIncrease: 9 },
  { id: 11, name: "Discuss coding", energyCost: 5, bondIncrease: 10 },
  { id: 12, name: "Study together", energyCost: 8, bondIncrease: 11 },
  { id: 13, name: "Grab lunch together", energyCost: 6, bondIncrease: 12 },
  { id: 14, name: "Attend a meetup", energyCost: 9, bondIncrease: 14 },
  { id: 15, name: "Work on a side project", energyCost: 10, bondIncrease: 15 },
  { id: 16, name: "Give them a coding tip", energyCost: 3, bondIncrease: 8 },
  { id: 17, name: "Share a funny coding meme", energyCost: 2, bondIncrease: 6 },
  { id: 18, name: "Help debug their code", energyCost: 8, bondIncrease: 14 },
  { id: 19, name: "Play chess", energyCost: 5, bondIncrease: 9 },
  { id: 20, name: "Get bubble tea", energyCost: 4, bondIncrease: 8 },
];

/**
 * Picks a random person from the cohort to socialize with
 * @param {object} cohortBonds - The social bonds object
 * @returns {object} - The selected person's info
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
  const newBond = currentBond + bondChange;

  // Bonds can go negative (enemies) but are capped at -100 and +100
  const cappedBond = Math.max(-100, Math.min(100, newBond));

  return {
    ...socialBonds,
    [personName]: cappedBond,
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
