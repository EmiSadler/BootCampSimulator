import { useState, useEffect } from "react";
import EnergyBar from "./EnergyBar";
import CodingSkill from "./CodingSkill";
import SocialBondBar from "./SocialBondBar";
import Calendar from "./Calendar";
import ActionsPanel from "./ActionsPanel";
import CodingPractice from "./CodingPractice";
import SocializeModal from "./SocializeModal";
import StudyPython from "./StudyPython";
import EnergyModal from "./EnergyModal";
import {
  pickRandomPersonToSocialize,
  updateBondWithPerson,
  possibleActivities,
} from "../utils/socializeUtils";
import {
  generateRandomCohort,
  getCohortMemberDetails,
} from "../utils/cohortUtils";
import "../css/Game.css";
import codingChallenges from "../data/codingChallenges";
import { shouldTriggerEvent, getRandomEvent } from "../utils/randomEvents";

function Game() {
  // Add new state for the energy modal
  const [showEnergyModal, setShowEnergyModal] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);

  // Generate random cohort on initial render
  const [socialBonds, setSocialBonds] = useState(() => {
    // Get cohort data from the utility function
    const cohortData = generateRandomCohort();
    return cohortData.bonds;
  });

  const [energy, setEnergy] = useState(100);
  const [codingSkill, setCodingSkill] = useState(0);
  const [day, setDay] = useState(1);
  const [actionsRemaining, setActionsRemaining] = useState(8);
  const [showCodingPractice, setShowCodingPractice] = useState(false);
  const [showSocializeModal, setShowSocializeModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [cohortData, setCohortData] = useState(() => generateRandomCohort());
  const [discoveredInfo, setDiscoveredInfo] = useState({});
  const [codingChallengeLevel, setCodingChallengeLevel] = useState(0);
  const [showStudyPython, setShowStudyPython] = useState(false);
  const [pythonStudyLevel, setPythonStudyLevel] = useState(0);
  const [eventMessage, setEventMessage] = useState(null);

  // Update the performAction function to prompt the user instead of auto-advancing

  const performAction = (action) => {
    // Calculate if current day is a weekend
    const dayOfWeek = (day - 1) % 7;
    const isWeekend = dayOfWeek >= 5;

    if (isWeekend) {
      alert(
        "It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time."
      );
      return;
    }

    if (actionsRemaining > 0) {
      action();

      // Reduce actions remaining
      setActionsRemaining(actionsRemaining - 1);

      // If no actions remain, prompt the user to start a new day
      if (actionsRemaining === 1) {
        const startNewDay = window.confirm(
          "You've used all your actions for today. Would you like to end the day now?"
        );

        if (startNewDay) {
          nextDay();
        }
      }
    } else {
      alert("You've used all your actions for today!");
    }
  };

  const practiceCoding = () => {
    if (energy >= 10) {
      setCodingSkill(codingSkill + 5);
      setEnergy(energy - 10);
    } else {
      alert("You're too tired! You need to rest.");
      return; // Don't count as an action if they can't do it
    }
  };

  const socialize = () => {
    if (energy >= 5) {
      const cohortNames = Object.keys(socialBonds);
      const randomPerson =
        cohortNames[Math.floor(Math.random() * cohortNames.length)];
      setSocialBonds({
        ...socialBonds,
        [randomPerson]: socialBonds[randomPerson] + 10,
      });
      setEnergy(energy - 5);
    } else {
      alert("You're too tired! You need to rest.");
      return; // Don't count as an action if they can't do it
    }
  };

  const rest = () => {
    setEnergy(Math.min(energy + 20, 100));
  };

  const nextDay = () => {
    const newDay = day + 1;
    setDay(newDay);

    // Calculate day of week (0-6, where 0 is Monday in our bootcamp calendar)
    const dayOfWeek = (newDay - 1) % 7;
    const isWeekend = dayOfWeek >= 5; // 5 = Saturday, 6 = Sunday

    // If it's a weekend, no actions are available
    // If it's a weekday, reset to 8 actions
    setActionsRemaining(isWeekend ? 0 : 8);

    // If it's a weekend, automatically recover more energy
    if (isWeekend) {
      setEnergy(Math.min(energy + 30, 100));
    }

    // Clear any previous event message
    setEventMessage(null);

    // Process random events for the new day (only on weekdays)
    if (!isWeekend) {
      processRandomEvent();
    }
  };

  // Update the handleEndDay function to include random weekend events

  const handleEndDay = () => {
    // Calculate if current day is a weekend
    const dayOfWeek = (day - 1) % 7;
    const isWeekend = dayOfWeek >= 5;

    if (isWeekend) {
      // Skip to Monday
      const daysToSkip = dayOfWeek === 5 ? 2 : 1; // Skip 2 days if Saturday, 1 if Sunday
      const newDay = day + daysToSkip;
      setDay(newDay);
      setActionsRemaining(8); // Reset actions for Monday

      // 75% chance to come back fully refreshed, 25% chance of being tired
      const isFullyRested = Math.random() < 0.75;

      if (isFullyRested) {
        // Player is fully refreshed
        setEnergy(100);
      } else {
        // Player is tired from weekend activities
        // Generate a random weekend event
        const weekendEvents = [
          "You hosted a big family dinner over the weekend.",
          "You helped a friend move to a new apartment.",
          "You worked a shift at the local pub for extra money.",
          "You spent the weekend on a DIY home improvement project.",
          "You went hiking and overdid it a bit.",
          "You attended a friend's wedding that went late into the night.",
        ];

        // Special event: Studied coding (gives bonus but still tiring)
        const studiedCoding = Math.random() < 0.3; // 30% chance within the tired outcome

        if (studiedCoding) {
          // Give a coding skill bonus but still tired
          const skillBonus = Math.floor(Math.random() * 6) + 5; // 5-10 skill points
          setCodingSkill(codingSkill + skillBonus);
          alert(
            `You spent the weekend working on a personal coding project. You gained ${skillBonus} coding skill points, but you're starting the week a bit tired.`
          );
          setEnergy(Math.min(energy + 15, 70)); // Some recovery but capped at 70
        } else {
          // Random tiring event
          const randomEvent =
            weekendEvents[Math.floor(Math.random() * weekendEvents.length)];
          alert(`${randomEvent} You're starting the week a bit tired.`);
          setEnergy(Math.min(energy + 25, 75)); // Some recovery but capped at 75
        }
      }
    } else {
      // Just end the current day
      nextDay();
    }
  };

  // Wrapper functions to use with performAction
  const handlePracticeCoding = () => {
    // First check if it's a weekend
    const dayOfWeek = (day - 1) % 7;
    const isWeekend = dayOfWeek >= 5;

    if (isWeekend) {
      alert(
        "It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time."
      );
      return;
    }

    // Then check if we have enough energy
    if (energy < 10) {
      // Instead of an alert, show the energy modal
      setCurrentActivity("coding");
      setShowEnergyModal(true);
      return;
    }

    // Open the coding practice modal
    setShowCodingPractice(true);
  };

  // Update the handleCodingComplete function
  const handleCodingComplete = () => {
    // Only update stats if the modal is actually shown
    if (showCodingPractice) {
      setCodingSkill(codingSkill + 5);
      setEnergy(Math.max(0, energy - 10));
      setActionsRemaining(actionsRemaining - 1);

      // Increment the coding challenge level for next time
      setCodingChallengeLevel((prevLevel) => {
        // Cap at the maximum number of challenges
        const nextLevel = prevLevel + 1;
        // If we've completed all challenges, loop back to a slightly harder version
        if (nextLevel >= codingChallenges.length) {
          return 0; // Loop back to the beginning
        }
        return nextLevel;
      });

      // If no actions remain, prompt to advance to the next day
      if (actionsRemaining === 1) {
        setTimeout(() => {
          const startNewDay = window.confirm(
            "You've used all your actions for today. Would you like to end the day now?"
          );

          if (startNewDay) {
            nextDay();
          }
        }, 500);
      }

      // Close the modal after completion
      setShowCodingPractice(false);
    }
  };

  // Replace the handleSocialize function with this updated version
  const handleSocialize = () => {
    // First check if it's a weekend
    const dayOfWeek = (day - 1) % 7;
    const isWeekend = dayOfWeek >= 5;

    if (isWeekend) {
      alert(
        "It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time."
      );
      return;
    }

    // Get the minimum energy cost from all possible activities
    const minEnergyCost = Math.min(
      ...possibleActivities.map((a) => a.energyCost)
    );

    // Check if we have enough energy for the minimum social activity
    if (energy < minEnergyCost) {
      // Show energy modal instead of alert
      setCurrentActivity("socialize");
      setShowEnergyModal(true);
      return;
    }

    // Pick a random person to socialize with
    const person = pickRandomPersonToSocialize(
      cohortData.bonds,
      cohortData.members
    );
    setSelectedPerson(person);
    setShowSocializeModal(true);
  };

  // Update the handleSocializeComplete function
  const handleSocializeComplete = (activity, discoveredInfo, bondResult) => {
    if (selectedPerson && activity) {
      // Double-check if the player has enough energy for this activity
      if (energy >= activity.energyCost) {
        // Update the bond with this person using the calculated bond change
        const updatedBonds = updateBondWithPerson(
          cohortData.bonds,
          selectedPerson.name,
          bondResult.bondChange // This can be positive or negative
        );

        // Update the cohort data
        setCohortData({
          ...cohortData,
          bonds: updatedBonds,
        });

        // Update discovered information if provided
        if (discoveredInfo) {
          setDiscoveredInfo((prevState) => {
            const personInfo = prevState[selectedPerson.name] || {};
            return {
              ...prevState,
              [selectedPerson.name]: {
                ...personInfo,
                [discoveredInfo.attribute]: true,
              },
            };
          });
        }

        // Reduce energy
        setEnergy(Math.max(0, energy - activity.energyCost));

        // Use up an action
        setActionsRemaining(actionsRemaining - 1);

        // If no actions remain, prompt to advance to the next day
        if (actionsRemaining === 1) {
          setTimeout(() => {
            const startNewDay = window.confirm(
              "You've used all your actions for today. Would you like to end the day now?"
            );

            if (startNewDay) {
              nextDay();
            }
          }, 500);
        }
      } else {
        // Show alert and close the modal if there's not enough energy
        alert("You don't have enough energy for this activity!");
      }
    }

    // Close the modal
    setTimeout(() => {
      setShowSocializeModal(false);
      setSelectedPerson(null);
    }, 1500);
  };

  const handleRest = () => {
    setEnergy(Math.min(energy + 20, 100));
    setActionsRemaining(actionsRemaining - 1);
    setShowEnergyModal(false);

    // If resting gives enough energy for the activity, allow it to continue
    if (currentActivity === "coding" && energy + 20 >= 10) {
      setShowCodingPractice(true);
    } else if (currentActivity === "study" && energy + 20 >= 5) {
      setShowStudyPython(true);
    } else if (currentActivity === "socialize" && energy + 20 >= 3) {
      // Assuming 3 is the minimum energy for socializing
      handleSocialize();
    }
  };

  const handleStudyPython = () => {
    // First check if it's a weekend
    const dayOfWeek = (day - 1) % 7;
    const isWeekend = dayOfWeek >= 5;

    if (isWeekend) {
      alert(
        "It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time."
      );
      return;
    }

    // Study Python takes less energy than practice coding
    if (energy < 5) {
      // Show energy modal instead of alert
      setCurrentActivity("study");
      setShowEnergyModal(true);
      return;
    }

    // Open the study Python modal
    setShowStudyPython(true);
  };

  const handleStudyComplete = () => {
    if (showStudyPython) {
      // Studying gives less skill than practice but uses less energy
      setCodingSkill(codingSkill + 3);
      setEnergy(Math.max(0, energy - 5));
      setActionsRemaining(actionsRemaining - 1);

      // Increment the Python study level for next time
      setPythonStudyLevel((prevLevel) => {
        // Cap at the maximum number of lessons
        const nextLevel = prevLevel + 1;
        // If we've completed all lessons, loop back to beginning
        if (nextLevel >= 12) {
          return 0;
        }
        return nextLevel;
      });

      // If no actions remain, prompt to advance to the next day
      if (actionsRemaining === 1) {
        setTimeout(() => {
          const startNewDay = window.confirm(
            "You've used all your actions for today. Would you like to end the day now?"
          );

          if (startNewDay) {
            nextDay();
          }
        }, 500);
      }

      // Close the modal
      setShowStudyPython(false);
    }
  };

  const processRandomEvent = () => {
    // Only trigger events on weekdays (not weekends)
    const dayOfWeek = (day - 1) % 7;
    const isWeekend = dayOfWeek >= 5;

    if (isWeekend) return;

    // Check if an event should trigger (30% chance by default)
    if (shouldTriggerEvent()) {
      const event = getRandomEvent();

      // Show an alert box for the random event
      alert(`${event.name}: ${event.description}`);

      // Apply event effects
      if (event.effect.actionsLost === "all") {
        // Lose all actions for the day
        setActionsRemaining(0);
      } else {
        // Lose (or gain) a specific number of actions
        const newActions = Math.max(
          0,
          actionsRemaining - event.effect.actionsLost
        );
        setActionsRemaining(newActions);
      }

      // Apply energy changes
      setEnergy(Math.max(0, Math.min(100, energy + event.effect.energyChange)));

      // Apply coding skill changes
      setCodingSkill(codingSkill + event.effect.skillChange);

      // Apply social bond changes
      if (event.effect.bondsChange !== 0) {
        if (event.effect.bondsChangeType === "all") {
          // Apply to all cohort members
          const updatedBonds = {};
          Object.keys(cohortData.bonds).forEach((name) => {
            const currentBond = cohortData.bonds[name];
            const newBond = Math.max(
              -100,
              Math.min(100, currentBond + event.effect.bondsChange)
            );
            updatedBonds[name] = newBond;
          });

          setCohortData({
            ...cohortData,
            bonds: updatedBonds,
          });
        }
      }

      // Set event message (still keep the modal for visual appeal)
      setEventMessage({
        title: event.name,
        description: event.description,
        type: event.type,
      });
    }
  };

  return (
    <div className="game-container">
      <Calendar
        day={day}
        actionsRemaining={actionsRemaining}
        onEndDay={handleEndDay} // Changed from nextDay to handleEndDay
      />

      <div className="stats-panel">
        <EnergyBar energy={energy} />
        <CodingSkill codingSkill={codingSkill} />
        <SocialBondBar
          socialBonds={cohortData.bonds}
          cohortMembers={cohortData.members}
          discoveredInfo={discoveredInfo}
        />
      </div>

      <div className="actions-container">
        <ActionsPanel
          practiceCoding={handlePracticeCoding}
          socialize={handleSocialize}
          studyPython={handleStudyPython}
          rest={handleRest}
        />
      </div>

      {showCodingPractice && (
        <CodingPractice
          onComplete={handleCodingComplete}
          onClose={() => setShowCodingPractice(false)}
          currentLevel={codingChallengeLevel}
        />
      )}

      {showSocializeModal && selectedPerson && (
        <SocializeModal
          person={selectedPerson}
          onComplete={handleSocializeComplete}
          onClose={() => setShowSocializeModal(false)}
        />
      )}

      {showStudyPython && (
        <StudyPython
          onComplete={handleStudyComplete}
          onClose={() => setShowStudyPython(false)}
          currentLevel={pythonStudyLevel}
        />
      )}

      {/* Add the energy modal */}
      {showEnergyModal && (
        <EnergyModal onClose={handleRest} onStartNewDay={handleEndDay} />
      )}
    </div>
  );
}

export default Game;
