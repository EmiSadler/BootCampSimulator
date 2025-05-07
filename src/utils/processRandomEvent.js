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

export default processRandomEvent;
