/**
 * Restricts a number to a range
 * @param {number} value - The number to restrict
 * @param {number} min - Lowest allowed value
 * @param {number} max - Highest allowed value
 * @returns {number} - The value, or the nearest bound if it is outside the range
 */
export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Returns a shuffled copy of an array, leaving the original untouched
 * @param {Array} items - The array to shuffle
 * @returns {Array} - A new, shuffled array
 */
export function shuffle(items) {
  return [...items].sort(() => 0.5 - Math.random());
}
