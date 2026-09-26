import { shouldTriggerEvent, getRandomEvent } from "./randomEvents";
import { isWeekend } from "./weekendChecker";
import { clamp } from "./helpers";
import { clampBond } from "./socializeUtils";

const processRandomEvent = ({
  day,
  energy,
  codingSkill,
  actionsRemaining,
  cohortData,
  setEnergy,
  setCodingSkill,
  setActionsRemaining,
  setCohortData,
  setCurrentEvent,
}) => {
  if (isWeekend(day)) return;

  if (shouldTriggerEvent()) {
    const event = getRandomEvent();

    //actions lost
    if (event.effect.actionsLost === "all") {
      setActionsRemaining(0);
    } else {
      const newActions = Math.max(
        0,
        actionsRemaining - event.effect.actionsLost
      );
      setActionsRemaining(newActions);
    }

    //coding skill
    setEnergy(clamp(energy + event.effect.energyChange, 0, 100));
    setCodingSkill(codingSkill + event.effect.skillChange);

    //bonds
    if (event.effect.bondsChange !== 0) {
      if (event.effect.bondsChangeType === "all") {
        const updatedBonds = {};
        Object.keys(cohortData.bonds).forEach((name) => {
          const currentBond = cohortData.bonds[name];
          updatedBonds[name] = clampBond(currentBond + event.effect.bondsChange);
        });

        setCohortData({
          ...cohortData,
          bonds: updatedBonds,
        });
      }
    }

    //event message
    setCurrentEvent(event);

    return true;
  }

  return false;
};

export default processRandomEvent;
