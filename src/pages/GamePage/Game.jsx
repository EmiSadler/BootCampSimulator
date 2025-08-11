import React, { useState, useEffect } from "react";
import EnergyBar from "./EnergyBar";
import CodingSkill from "./CodingSkill";
import SocialBondBar from "./SocialBondBar";
import Calendar from "../../components/Calendar";
import ActionsPanel from "./ActionsPanel";
import CodingPractice from "./CodingPractice";
import SocializeModal from "./SocializeModal";
import StudyPython from "./StudyPython";
import WelcomeMessage from "../../components/WelcomeMessage";
import Logo from "../../components/Logo";
import LogoutButton from "../../components/LogoutButton";
import RestartButton from "../../components/RestartButton";
import EnergyModal from "../../components/EnergyModal";
import DaySummaryModal from "../../components/DaySummaryModal";
import EventMessage from "../../components/EventMessage";
import { gameAPI } from "../../services/api";
import processRandomEvent from "../../utils/processRandomEvent";
import { isWeekend } from "../../utils/weekendChecker";
import {
  pickRandomPersonToSocialize,
  updateBondWithPerson,
  possibleActivities,
} from "../../utils/socializeUtils";
import {
  generateRandomCohort,
  getCohortMemberDetails,
} from "../../utils/cohortUtils";
import codingChallenges from "../../data/codingChallenges";
import "../../css/Game.css";

function Game({ onLogout, onLogoClick }) {
  // All state declarations
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
  const [currentEvent, setCurrentEvent] = useState(null);
  const [lastCodingActivityDay, setLastCodingActivityDay] = useState(1);
  const [username, setUsername] = useState("");

  // SINGLE saveGameProgress function
  const saveGameProgress = async () => {
    if (!gameAPI.isLoggedIn()) return;

    const gameData = {
      day,
      energy,
      coding_skill: codingSkill,
      python_study_level: pythonStudyLevel,
      coding_challenge_level: codingChallengeLevel,
      last_coding_activity_day: lastCodingActivityDay,
      cohort_data: cohortData,
      discovered_info: discoveredInfo,
    };

    try {
      await gameAPI.saveProgress(gameData);
      console.log("Game progress saved successfully");
    } catch (error) {
      console.error("Failed to save game progress:", error);
    }
  };

  // SINGLE useEffect for loading saved game when component mounts
  useEffect(() => {
    const loadSavedGame = async () => {
      try {
        const savedGame = await gameAPI.loadProgress();

        if (savedGame && Object.keys(savedGame).length > 0) {
          setDay(savedGame.day || 1);
          setEnergy(savedGame.energy || 100);
          setCodingSkill(savedGame.coding_skill || 0);
          setPythonStudyLevel(savedGame.python_study_level || 0);
          setCodingChallengeLevel(savedGame.coding_challenge_level || 0);
          setLastCodingActivityDay(savedGame.last_coding_activity_day || 1);

          if (
            savedGame.cohort_data &&
            Object.keys(savedGame.cohort_data).length > 0
          ) {
            setCohortData(savedGame.cohort_data);
          }

          setDiscoveredInfo(savedGame.discovered_info || {});
          console.log("Game progress loaded successfully");
        } else {
          console.log("No saved game found, starting new game");
        }
      } catch (error) {
        console.error("Error loading game progress:", error);
      }
    };

    if (gameAPI.isLoggedIn()) {
      loadSavedGame();
    } else {
      console.log("User not logged in, using default game settings");
    }
  }, []);

  // Auto-save when important state changes
  useEffect(() => {
    if (gameAPI.isLoggedIn() && day > 1) {
      saveGameProgress();
    }
  }, [day, energy, codingSkill, pythonStudyLevel, codingChallengeLevel]);

  // useEffect to fetch current user information
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await gameAPI.getCurrentUser();
        if (user && user.username) {
          setUsername(user.username);
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    if (gameAPI.isLoggedIn()) {
      fetchCurrentUser();
    }
  }, []);

  // Restart game function
  const handleRestartGame = async () => {
    try {
      // Delete saved progress from backend
      const success = await gameAPI.deleteProgress();

      if (success) {
        // Reset all game state to initial values
        setDay(1);
        setEnergy(100);
        setCodingSkill(0);
        setActionsRemaining(8);
        setPythonStudyLevel(0);
        setCodingChallengeLevel(0);
        setLastCodingActivityDay(1);
        setCohortData(generateRandomCohort()); // Generate new cohort
        setDiscoveredInfo({});

        // Reset day summary
        setDaySummary({
          skillGained: 0,
          energyLevel: 100,
          newRelationships: 0,
          bondsImproved: 0,
          challengesCompleted: 0,
          lessonsLearned: 0,
          tip: "",
        });

        // Close any open modals
        setShowCodingPractice(false);
        setShowSocializeModal(false);
        setShowStudyPython(false);
        setShowEnergyModal(false);
        setShowDaySummaryModal(false);
        setCurrentEvent(null);
        setSelectedPerson(null);

        console.log("Game restarted successfully");
        alert("Game restarted! Welcome to your fresh bootcamp experience!");
      } else {
        console.error("Failed to delete progress from server");
        alert("Failed to restart game. Please try again.");
      }
    } catch (error) {
      console.error("Error restarting game:", error);
      alert("An error occurred while restarting the game. Please try again.");
    }
  };

  // Day summary tracking functions
  const trackSkillGain = (amount) => {
    setDaySummary((prev) => ({
      ...prev,
      skillGained: prev.skillGained + amount,
    }));
  };

  const trackBondImprovement = () => {
    setDaySummary((prev) => ({
      ...prev,
      bondsImproved: prev.bondsImproved + 1,
    }));
  };

  const trackNewRelationship = () => {
    setDaySummary((prev) => ({
      ...prev,
      newRelationships: prev.newRelationships + 1,
    }));
  };

  const trackCodingChallenge = () => {
    setDaySummary((prev) => ({
      ...prev,
      challengesCompleted: prev.challengesCompleted + 1,
    }));
  };

  const trackLessonLearned = () => {
    setDaySummary((prev) => ({
      ...prev,
      lessonsLearned: prev.lessonsLearned + 1,
    }));
  };

  // Helper functions
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
    if (isWeekend(day)) {
      alert(
        "It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time."
      );
      return;
    }

    // Only proceed if the player has actions left
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

  // Day progression
  const nextDay = () => {
    // Hide all modals first
    setShowDaySummaryModal(false);
    setShowEnergyModal(false);

    const newDay = day + 1;

    // Apply skill decay before updating the day
    const decayResult = applySkillDecay(newDay);

    setDay(newDay);

    // Reset actions to maximum (8) at the start of a new day
    setActionsRemaining(8);

    if (isWeekend(newDay)) {
      setEnergy(Math.min(energy + 30, 100));
    }

    // Process random events for the new day (only on weekdays)
    if (!isWeekend(newDay)) {
      processRandomEvent({
        day: newDay,
        energy,
        codingSkill,
        actionsRemaining: 8, // Pass the new reset value
        cohortData,
        setEnergy,
        setCodingSkill,
        setActionsRemaining,
        setCohortData,
        setCurrentEvent,
      });
    }

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

  const handleEndDay = () => {
    if (isWeekend(day)) {
      // Calculate current day of week
      const currentDayOfWeek = (day - 1) % 7;
      const daysToSkip = currentDayOfWeek === 5 ? 2 : 1;
      const newDay = day + daysToSkip;

      setDay(newDay);
      setActionsRemaining(8);

      // 75% chance to come back fully refreshed, 25% chance of being tired
      const isFullyRested = Math.random() < 0.75;

      if (isFullyRested) {
        setEnergy(100);
      } else {
        // Create weekend event objects that match the weekday event structure
        const weekendEvents = [
          {
            id: "family_dinner",
            name: "Family Dinner",
            description: "You hosted a big family dinner over the weekend.",
            type: "neutral",
            effect: { energyChange: 0 },
          },
          {
            id: "friend_move",
            name: "Helping a Friend",
            description: "You helped a friend move to a new apartment.",
            type: "neutral",
            effect: { energyChange: 0 },
          },
          {
            id: "pub_shift",
            name: "Extra Work",
            description: "You worked a shift at the local pub for extra money.",
            type: "neutral",
            effect: { energyChange: 0 },
          },
          {
            id: "diy_project",
            name: "DIY Project",
            description:
              "You spent the weekend on a DIY home improvement project.",
            type: "neutral",
            effect: { energyChange: 0 },
          },
          {
            id: "hiking_tired",
            name: "Weekend Hike",
            description: "You went hiking and overdid it a bit.",
            type: "neutral",
            effect: { energyChange: 0 },
          },
          {
            id: "wedding_party",
            name: "Wedding Celebration",
            description:
              "You attended a friend's wedding that went late into the night.",
            type: "neutral",
            effect: { energyChange: 0 },
          },
        ];

        // Special event: Studied coding (gives bonus but still tiring)
        const studiedCoding = Math.random() < 0.3; // 30% chance within the tired outcome

        if (studiedCoding) {
          // Give a coding skill bonus but still tired
          const skillBonus = Math.floor(Math.random() * 6) + 5; // 5-10 skill points
          setCodingSkill(codingSkill + skillBonus);

          // Update last coding activity day since they practiced on the weekend
          setLastCodingActivityDay(newDay);

          // Create a special coding weekend event
          const codingWeekendEvent = {
            id: "weekend_coding",
            name: "Weekend Coding Project",
            description: `You spent the weekend working on a personal coding project. You gained ${skillBonus} coding skill points, but you're starting the week a bit tired.`,
            type: "positive",
            effect: {
              skillChange: skillBonus,
              energyChange: 15,
            },
          };

          setCurrentEvent(codingWeekendEvent);
          setEnergy(Math.min(energy + 15, 70)); // Some recovery but capped at 70
        } else {
          // Random tiring event
          const randomEvent =
            weekendEvents[Math.floor(Math.random() * weekendEvents.length)];
          setCurrentEvent(randomEvent);
          setEnergy(Math.min(energy + 25, 75)); // Some recovery but capped at 75
        }
      }

      applySkillDecay(newDay);
    } else {
      nextDay();
    }
  };

  // Action handlers
  const checkActionsRemaining = () => {
    if (actionsRemaining <= 0) {
      // No actions left, show summary and end day
      const tip = generateDaySummaryTip();
      setDaySummary((prev) => ({
        ...prev,
        tip: tip,
      }));
      setShowDaySummaryModal(true);
      return false;
    }
    return true;
  };

  const handlePracticeCoding = () => {
    if (isWeekend(day)) {
      alert(
        "It's the weekend! No bootcamp today. You can skip to Monday or enjoy your free time."
      );
      return;
    }

    if (!checkActionsRemaining()) return;

    if (energy < 10) {
      setCurrentActivity("coding");
      setShowEnergyModal(true);
      return;
    }

    setShowCodingPractice(true);
  };

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

  const handleSocialize = () => {
    if (isWeekend(day)) {
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

    // If the player is out of actions, show the day summary
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
    if (isWeekend(day)) {
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
    <div className="game-page">
      {/* Header with Logo, Welcome Message, Restart Button, and Logout Button */}
      <div className="game-top-header">
        <Logo onClick={onLogoClick} />
        <WelcomeMessage day={day} username={username} />
        <RestartButton onRestart={handleRestartGame} />
        <LogoutButton onClick={onLogout} />
      </div>

      <div className="game-container">
        <Calendar
          day={day}
          actionsRemaining={actionsRemaining}
          onEndDay={handleEndDay} // Changed from nextDay to handleEndDay for clarity
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

        {currentEvent && (
          <EventMessage
            event={currentEvent}
            onClose={() => setCurrentEvent(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Game;
