/**
 * Collection of random events that can occur during the bootcamp
 * Each event has a name, description, and effect
 */

export const randomEvents = [
  // Negative events
  {
    id: "sick_day",
    name: "Sick Day",
    description:
      "You woke up with a terrible cold and can barely get out of bed.",
    type: "negative",
    rarity: "rare", // 5% chance
    effect: {
      actionsLost: "all",
      energyChange: -20,
      skillChange: 0,
      bondsChange: 0,
    },
  },
  {
    id: "train_delay",
    name: "Train Delay",
    description: "Signal failures have caused major delays on your commute.",
    type: "negative",
    rarity: "uncommon", // 10% chance
    effect: {
      actionsLost: 2,
      energyChange: -5,
      skillChange: 0,
      bondsChange: 0,
    },
  },
  {
    id: "computer_issues",
    name: "Computer Issues",
    description: "Your laptop battery died and you forgot your charger.",
    type: "negative",
    rarity: "common", // 15% chance
    effect: {
      actionsLost: 2,
      energyChange: -10,
      skillChange: 0,
      bondsChange: 0,
    },
  },
  {
    id: "bad_sleep",
    name: "Restless Night",
    description: "You had trouble sleeping last night. You feel tired.",
    type: "negative",
    rarity: "common", // 15% chance
    effect: {
      actionsLost: 0,
      energyChange: -15,
      skillChange: 0,
      bondsChange: 0,
    },
  },
  {
    id: "missed_alarm",
    name: "Missed Alarm",
    description: "You slept through your alarm and had to rush to class.",
    type: "negative",
    rarity: "uncommon", // 10% chance
    effect: {
      actionsLost: 3,
      energyChange: -10,
      skillChange: 0,
      bondsChange: 0,
    },
  },
  {
    id: "cohort_fallout",
    name: "An Argument breaks out among the cohort over a project.",
    description:
      "The cohort is divided over the best approach to a project. Tensions are high.",
    type: "negative",
    rarity: "uncommon", // 10% chance
    effect: {
      actionsLost: 0,
      energyChange: -5,
      skillChange: 0,
      bondsChange: -10, // Bonus to all social bonds
      bondsChangeType: "all",
    },
  },
  {
    id: "internet_outage",
    name: "Internet Outage",
    description:
      "Your internet connection is unstable today. Video calls keep dropping and pushing code to GitHub is a nightmare.",
    type: "negative",
    rarity: "uncommon", // 10% chance
    effect: {
      actionsLost: 2,
      energyChange: -10,
      skillChange: 0,
      bondsChange: 0,
    },
  },
  {
    id: "difficult_assignment",
    name: "Particularly Difficult Assignment",
    description:
      "Today's coding assignment is especially challenging. Your brain hurts from the mental gymnastics required.",
    type: "negative",
    rarity: "common", // 15% chance
    effect: {
      actionsLost: 0,
      energyChange: -15,
      skillChange: 2, // Small skill gain despite the struggle
      bondsChange: 0,
    },
  },
  {
    id: "instructor_absence",
    name: "Instructor Calls in Sick",
    description:
      "Your instructor is out sick today. The substitute isn't as familiar with the material, making today's lesson confusing.",
    type: "negative",
    rarity: "rare", // 5% chance
    effect: {
      actionsLost: 0,
      energyChange: -10,
      skillChange: -3, // Small skill loss
      bondsChange: 3, // Small bond gain (students help each other out)
      bondsChangeType: "all",
    },
  },

  // Positive events
  {
    id: "sunny_day_drinks",
    name: "After-School Drinks",
    description:
      "It's a beautiful sunny day and the whole cohort goes for drinks after class.",
    type: "positive",
    rarity: "common", // 15% chance
    effect: {
      actionsLost: 0,
      energyChange: -5,
      skillChange: 0,
      bondsChange: 15, // Bonus to all social bonds
      bondsChangeType: "all",
    },
  },
  {
    id: "coding_breakthrough",
    name: "Coding Breakthrough",
    description:
      "Something clicked in your brain! You now understand a concept that was confusing you.",
    type: "positive",
    rarity: "uncommon", // 10% chance
    effect: {
      actionsLost: 0,
      energyChange: 0,
      skillChange: 8,
      bondsChange: 0,
    },
  },
  {
    id: "free_coffee",
    name: "Free Coffee",
    description:
      "A local coffee shop was giving out free samples near the bootcamp.",
    type: "positive",
    rarity: "common", // 15% chance
    effect: {
      actionsLost: 0,
      energyChange: 15,
      skillChange: 0,
      bondsChange: 0,
    },
  },
  {
    id: "productive_morning",
    name: "Productive Morning",
    description: "You woke up early and feel exceptionally refreshed today.",
    type: "positive",
    rarity: "uncommon", // 10% chance
    effect: {
      actionsLost: -1, // Gain an extra action
      energyChange: 10,
      skillChange: 0,
      bondsChange: 0,
    },
  },
  {
    id: "group_project",
    name: "Successful Group Project",
    description:
      "Your team completed a mini-project with flying colors! Everyone's excited.",
    type: "positive",
    rarity: "rare", // 5% chance
    effect: {
      actionsLost: 0,
      energyChange: 0,
      skillChange: 5,
      bondsChange: 10,
      bondsChangeType: "all",
    },
  },
  {
    id: "inspirational_speaker",
    name: "Guest Speaker Visit",
    description:
      "A successful tech entrepreneur visited your bootcamp today and shared inspiring stories. You feel motivated!",
    type: "positive",
    rarity: "rare", // 5% chance
    effect: {
      actionsLost: 0,
      energyChange: 20,
      skillChange: 3,
      bondsChange: 5,
      bondsChangeType: "all",
    },
  },
  {
    id: "debugging_win",
    name: "Debugging Victory",
    description:
      "You fixed a bug that had been plaguing your code for days. The relief and satisfaction are tremendous!",
    type: "positive",
    rarity: "common", // 15% chance
    effect: {
      actionsLost: -1, // Gain an extra action from the efficiency
      energyChange: 5,
      skillChange: 5,
      bondsChange: 0,
    },
  },
  {
    id: "mentorship_opportunity",
    name: "Mentorship Session",
    description:
      "A senior developer volunteered to mentor your cohort today, providing valuable industry insights and tips.",
    type: "positive",
    rarity: "uncommon", // 10% chance
    effect: {
      actionsLost: 0,
      energyChange: 5,
      skillChange: 7,
      bondsChange: 3,
      bondsChangeType: "all",
    },
  },
];

/**
 * Determines whether a random event should trigger
 * @param {number} chance - Percentage chance (0-100) of an event triggering
 * @returns {boolean} - Whether an event should trigger
 */
export function shouldTriggerEvent(chance = 30) {
  return Math.random() * 100 < chance;
}

/**
 * Gets a random event based on rarity weights
 * @returns {object} - Random event object
 */
export function getRandomEvent() {
  // Define rarity weights (higher = more common)
  const rarityWeights = {
    common: 3,
    uncommon: 2,
    rare: 1,
  };

  // Calculate weighted pool of events
  const eventPool = [];

  randomEvents.forEach((event) => {
    // Add the event to the pool multiple times based on its rarity weight
    const weight = rarityWeights[event.rarity] || 1;
    for (let i = 0; i < weight; i++) {
      eventPool.push(event);
    }
  });

  // Pick a random event from the weighted pool
  const randomIndex = Math.floor(Math.random() * eventPool.length);
  return eventPool[randomIndex];
}
