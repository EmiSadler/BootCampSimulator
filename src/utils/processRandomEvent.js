import { shouldTriggerEvent, getRandomEvent } from "./randomEvents";

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
  setEventMessage,
}) => {
  const dayOfWeek = (day - 1) % 7;
  const isWeekend = dayOfWeek >= 5;

  if (isWeekend) return;

  if (shouldTriggerEvent()) {
    const event = getRandomEvent();

    //actions losts
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
    setEnergy(Math.max(0, Math.min(100, energy + event.effect.energyChange)));
    setCodingSkill(codingSkill + event.effect.skillChange);

    //bonds
    if (event.effect.bondsChange !== 0) {
      if (event.effect.bondsChangeType === "all") {
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

    //event message
    setEventMessage({
      title: event.name,
      description: event.description,
      type: event.type,
    });

    return true;
  }

  return false;
};

export default processRandomEvent;
