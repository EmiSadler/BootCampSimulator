import { useState, useEffect } from "react";
import EnergyBar from "./GamePage/EnergyBar";
import CodingSkill from "./GamePage/CodingSkill";
import SocialBondBar from "./GamePage/SocialBondBar";
import Calendar from "./Calendar";
import ActionsPanel from "./GamePage/ActionsPanel";
import CodingPractice from "./GamePage/CodingPractice";
import SocializeModal from "./GamePage/SocializeModal";
import StudyPython from "./GamePage/StudyPython";
import EnergyModal from "./EnergyModal";
import DaySummaryModal from "./DaySummaryModal";
import processRandomEvent from "../utils/processRandomEvent";
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
  const [showEnergyModal, setShowEnergyModal] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [showDaySummaryModal, setShowDaySummaryModal] = useState(false);
  const [daySummary, setDaySummary] = useState({
    skillGained: 0,
    energyLevel: 100,
    newRelationships: 0,
    bondsImproved: 0,
    challengesCompleted: 0,
    lessonsLearned: 0,
    tip: "",
  });

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
  const [lastCodingActivityDay, setLastCodingActivityDay] = useState(1); // Start at day 1

  // Create a function to track skill gains
  const trackSkillGain = (amount) => {
    setDaySummary((prev) => ({
      ...prev,
      skillGained: prev.skillGained + amount,
    }));
  };

  // Create a function to track bond improvements
  const trackBondImprovement = () => {
    setDaySummary((prev) => ({
      ...prev,
      bondsImproved: prev.bondsImproved + 1,
    }));
  };

  // Track new relationships discovered
  const trackNewRelationship = () => {
    setDaySummary((prev) => ({
      ...prev,
      newRelationships: prev.newRelationships + 1,
    }));
  };

  // Track coding challenges completed
  const trackCodingChallenge = () => {
    setDaySummary((prev) => ({
      ...prev,
      challengesCompleted: prev.challengesCompleted + 1,
    }));
  };

  // Track lessons learned
  const trackLessonLearned = () => {
    setDaySummary((prev) => ({
      ...prev,
      lessonsLearned: prev.lessonsLearned + 1,
    }));
  };

  // Add this helper function after your other tracking functions
  const generateDaySummaryTip = () => {
    if (energy < 30) {
      return "Try to rest more during the day to keep your energy up!";
    } else if (daySummary.skillGained < 5) {
      return "Focus more on studying and coding practice to improve your skills faster.";
    } else if (daySummary.bondsImproved === 0) {
      return "Don't forget to socialize with your classmates to build relationships!";
    } else {
      return "Great job balancing your activities today!";
    }
  };

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

    // Only proceed if we have actions left
    if (actionsRemaining <= 0) {
      setShowDaySummaryModal(true);
      return;
    }

    // Execute the action
    action();

    // Update energy level in summary
    setDaySummary((prev) => ({
      ...prev,
      energyLevel: energy,
    }));
  };

  const applySkillDecay = (currentDay) => {
    // Only apply decay if it's been more than 1 day since last coding activity
    const daysSinceActivity = currentDay - lastCodingActivityDay;

    if (daysSinceActivity > 1) {
      // Calculate decay amount: 1 point per day of inactivity, but never below zero
      const decayAmount = Math.min(codingSkill, daysSinceActivity);

      if (decayAmount > 0) {
        setCodingSkill((prevSkill) => Math.max(0, prevSkill - decayAmount));

        return {
          occurred: true,
          amount: decayAmount,
        };
      }
    }

    return {
      occurred: false,
      amount: 0,
    };
  };

  const nextDay = () => {
    // Hide all modals first
    setShowDaySummaryModal(false);
    setShowEnergyModal(false);

    const newDay = day + 1;

    // Apply skill decay before updating the day
    const decayResult = applySkillDecay(newDay);

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

    // Reset day summary for the new day - add decay info if applicable
    setDaySummary({
      skillGained: 0,
      energyLevel: energy,
      newRelationships: 0,
      bondsImproved: 0,
      challengesCompleted: 0,
      lessonsLearned: 0,
      skillDecayed: decayResult.occurred ? decayResult.amount : 0,
      tip: decayResult.occurred
        ? `You lost ${decayResult.amount} coding skill points due to lack of practice.`
        : "",
    });
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

          // Update last coding activity day since they practiced on the weekend
          setLastCodingActivityDay(newDay);

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

      // Apply skill decay after weekend
      applySkillDecay(newDay);
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

  // Then update the handleCodingComplete function
  const handleCodingComplete = () => {
    // Only update stats if the modal is actually shown
    if (showCodingPractice) {
      // Add skill points and track progress
      setCodingSkill(codingSkill + 5);
      trackSkillGain(5);
      trackCodingChallenge();

      // Update last coding activity day
      setLastCodingActivityDay(day);

      // Reduce energy
      setEnergy(Math.max(0, energy - 10));

      // IMPORTANT: Only reduce actions here since we know the action succeeded
      const newActionsRemaining = actionsRemaining - 1;
      setActionsRemaining(newActionsRemaining);

      // Update the challenge level
      setCodingChallengeLevel((prevLevel) => {
        const nextLevel = prevLevel + 1;
        if (nextLevel >= codingChallenges.length) {
          return 0;
        }
        return nextLevel;
      });

      // Check if we're out of actions AFTER updating actionsRemaining
      if (newActionsRemaining <= 0) {
        // Update energy in the summary
        setDaySummary((prev) => ({
          ...prev,
          energyLevel: Math.max(0, energy - 10),
        }));

        const tip = generateDaySummaryTip();

        setDaySummary((prev) => ({
          ...prev,
          tip: tip,
        }));

        setShowDaySummaryModal(true);
      }

      // Close the modal
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

    // Check if player has enough energy for the minimum social activity
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

  const handleSocializeComplete = (activity, discoveredInfo, bondResult) => {
    // First, prevent the function from executing if the modal is not shown
    if (!showSocializeModal || !selectedPerson || !activity) return;

    // Immediately close the modal to prevent multiple triggers
    setShowSocializeModal(false);

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

      // Track bond improvement if positive
      if (bondResult.bondChange > 0) {
        trackBondImprovement();
      }

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
        trackNewRelationship();
      }

      // Reduce energy
      setEnergy(Math.max(0, energy - activity.energyCost));

      const newActionsRemaining = actionsRemaining - 1;
      setActionsRemaining(newActionsRemaining);

      // If no actions remain, show the day summary modal
      if (newActionsRemaining <= 0) {
        setDaySummary((prev) => ({
          ...prev,
          energyLevel: Math.max(0, energy - activity.energyCost),
        }));
        setShowDaySummaryModal(true);
      }
    } else {
      // Show alert if there's not enough energy
      alert("You don't have enough energy for this activity!");
    }

    // Reset the selected person state - do this immediately, not in a timeout
    setSelectedPerson(null);
  };

  const handleRest = () => {
    // Increase energy
    setEnergy(Math.min(energy + 20, 100));

    // Reduce actions
    const newActionsRemaining = actionsRemaining - 1;
    setActionsRemaining(newActionsRemaining);

    // Close energy modal
    setShowEnergyModal(false);

    // If we're out of actions, show the day summary
    if (newActionsRemaining <= 0) {
      setDaySummary((prev) => ({
        ...prev,
        energyLevel: Math.min(energy + 20, 100),
        tip: "Great job taking time to rest!",
      }));

      setTimeout(() => {
        setShowDaySummaryModal(true);
      }, 100);
    }

    // Reset current activity
    setCurrentActivity(null);
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

  // Update the handleStudyComplete function with similar logic
  const handleStudyComplete = () => {
    if (showStudyPython) {
      // Studying gives less skill than practice but uses less energy
      setCodingSkill(codingSkill + 3);
      trackSkillGain(3);
      trackLessonLearned();

      // Update last coding activity day
      setLastCodingActivityDay(day);

      // Reduce energy
      setEnergy(Math.max(0, energy - 5));

      // IMPORTANT: Only reduce actions here
      const newActionsRemaining = actionsRemaining - 1;
      setActionsRemaining(newActionsRemaining);

      // Increment the Python study level
      setPythonStudyLevel((prevLevel) => {
        const nextLevel = prevLevel + 1;
        if (nextLevel >= 29) {
          return 0;
        }
        return nextLevel;
      });

      // Check if player is out of actions AFTER updating actionsRemaining
      if (newActionsRemaining <= 0) {
        // Update energy level in summary
        setDaySummary((prev) => ({
          ...prev,
          energyLevel: Math.max(0, energy - 5),
        }));

        // Generate tip
        let tip = generateDaySummaryTip();

        // Update the tip
        setDaySummary((prev) => ({
          ...prev,
          tip: tip,
        }));

        // Show the modal BEFORE closing the study modal
        setTimeout(() => {
          setShowDaySummaryModal(true);
        }, 100);
      }

      // Close the modal
      setShowStudyPython(false);
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
        <CodingSkill
          codingSkill={codingSkill}
          daysSinceActivity={day - lastCodingActivityDay}
        />
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

      {showEnergyModal && (
        <EnergyModal onClose={handleRest} onStartNewDay={handleEndDay} />
      )}

      {showDaySummaryModal && (
        <DaySummaryModal
          onStartNewDay={() => {
            setShowDaySummaryModal(false);
            handleEndDay();
          }}
          daySummary={daySummary}
        />
      )}
    </div>
  );
}

export default Game;
