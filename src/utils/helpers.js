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
 * Returns a shuffled copy of an array, leaving the original untouched.
 * Uses a Fisher-Yates shuffle so every ordering is equally likely.
 * @param {Array} items - The array to shuffle
 * @returns {Array} - A new, shuffled array
 */
export function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
