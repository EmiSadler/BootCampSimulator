export function isWeekend(day) {
  const dayOfWeek = (day - 1) % 7;
  return dayOfWeek >= 5; // Return a boolean value
}
