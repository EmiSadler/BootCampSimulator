import codingChallenges from "../data/codingChallenges";

const includesAll = (code, ...snippets) =>
  snippets.every((snippet) => code.includes(snippet));

const includesAny = (code, ...snippets) =>
  snippets.some((snippet) => code.includes(snippet));

// One entry per challenge id (see src/data/codingChallenges.js). `check`
// returns true when the submitted code looks like a valid solution, and
// `error` is shown when it doesn't.
const verifiers = {
  // Sum Two Numbers
  1: {
    check: (code) => includesAny(code, "return a + b", "return b + a"),
    error: "The function doesn't return the correct value.",
  },

  // Greet User
  2: {
    check: (code) =>
      code.includes("return") &&
      includesAny(code, "Hello", "hello") &&
      code.includes("name") &&
      includesAny(code, "+", 'f"'),
    error: "The function doesn't return the correct greeting.",
  },

  // String Reversal
  3: {
    check: (code) =>
      includesAny(code, "return text[::-1]", "''.join(reversed("),
    error: "The function doesn't reverse the string correctly.",
  },

  // Even or Odd
  4: {
    check: (code) =>
      includesAny(code, "return number % 2 == 0", "return not number % 2"),
    error: "The function doesn't correctly identify even numbers.",
  },

  // Convert Temperature
  5: {
    check: (code) =>
      includesAll(code, "return", "+ 32") &&
      includesAny(code, "celsius * 9/5", "celsius * (9/5)"),
    error: "The function doesn't convert temperature correctly.",
  },

  // Calculate Average
  6: {
    check: (code) => code.includes("return sum(numbers) / len(numbers)"),
    error: "The function doesn't calculate the average correctly.",
  },

  // Multiply Strings
  7: {
    check: (code) => code.includes("return text * times"),
    error: "The function doesn't repeat the string correctly.",
  },

  // Count Words
  8: {
    check: (code) =>
      code.includes("return len(sentence.split())") ||
      includesAll(code, "split()", "len(", "return"),
    error: "The function doesn't count words correctly.",
  },

  // Largest Number
  9: {
    check: (code) =>
      code.includes("return max(numbers)") ||
      includesAll(code, "max =", "return max") ||
      includesAll(code, "largest =", "return largest"),
    error: "The function doesn't find the largest number correctly.",
  },

  // Count Vowels
  10: {
    check: (code) =>
      includesAny(code, "vowels", "aeiou") &&
      includesAny(
        code,
        "count += 1",
        "count = count + 1",
        "count+=1",
        "count++",
        "count = len"
      ),
    error: "The function doesn't count vowels correctly.",
  },

  // Reverse Words
  11: {
    check: (code) =>
      includesAll(code, "split", "join", "[::-1]") ||
      includesAll(code, "split", "reversed", "join"),
    error: "The function doesn't reverse words correctly.",
  },

  // FizzBuzz
  12: {
    check: (code) =>
      includesAll(
        code,
        "if number % 3 == 0 and number % 5 == 0",
        "return 'FizzBuzz'",
        "return 'Fizz'",
        "return 'Buzz'"
      ),
    error: "The function doesn't implement FizzBuzz correctly.",
  },

  // Remove Duplicates
  13: {
    check: (code) =>
      includesAll(code, "seen = set()", "if item not in seen") ||
      includesAll(code, "result = []", "not in result") ||
      code.includes("list(dict.fromkeys"),
    error: "The function doesn't remove duplicates correctly.",
  },

  // List Filtering
  14: {
    check: (code) =>
      includesAll(code, "return [", "for", "if", ">=") ||
      includesAll(code, "filter", "lambda"),
    error: "The function doesn't filter the list correctly.",
  },

  // Title Case Converter
  15: {
    check: (code) =>
      includesAll(code, "split", "capitalize", "join") ||
      includesAll(code, "split", "title()"),
    error: "The function doesn't convert to title case correctly.",
  },

  // Dictionary Creation
  16: {
    check: (code) =>
      code.includes("dict(zip(") ||
      includesAll(code, "{", "for", "in zip("),
    error: "The function doesn't create a dictionary correctly.",
  },

  // Palindrome Check
  17: {
    check: (code) =>
      code.includes("text == text[::-1]") ||
      includesAll(code, "reversed(", "join") ||
      includesAll(code, "for", "reversed"),
    error: "The function doesn't check palindromes correctly.",
  },

  // Find Missing Number
  18: {
    check: (code) =>
      includesAll(
        code,
        "n = len(numbers) + 1",
        "expected_sum",
        "actual_sum",
        "return expected_sum - actual_sum"
      ) || includesAll(code, "range", "set", "difference"),
    error: "The function doesn't find the missing number correctly.",
  },

  // Anagram Check
  19: {
    check: (code) =>
      code.includes("sorted(str1.lower()) == sorted(str2.lower())") ||
      includesAll(code, "Counter", "str1", "str2") ||
      includesAll(code, "sort", "join", "=="),
    error: "The function doesn't check anagrams correctly.",
  },

  // Prime Number Checker
  20: {
    check: (code) =>
      includesAll(code, "for", "range", "number % i == 0") ||
      includesAll(code, "while", "number % i == 0"),
    error: "The function doesn't check for prime numbers correctly.",
  },

  // Flatten Nested List
  21: {
    check: (code) =>
      includesAll(code, "if isinstance(item, list)", "recursion") ||
      includesAny(
        code,
        "flatten_list(item)",
        "from itertools import chain",
        "from collections import Iterable"
      ),
    error: "The function doesn't flatten the nested list correctly.",
  },

  // Common Elements
  22: {
    check: (code) =>
      code.includes("set(list1) & set(list2)") ||
      includesAll(code, "intersection", "set") ||
      includesAll(code, "for", "if", "in", "list1", "list2"),
    error: "The function doesn't find common elements correctly.",
  },
};

/**
 * Verifies if the submitted code provides the correct solution for a given challenge
 * @param {number} challengeId - The ID of the challenge
 * @param {string} code - The user's submitted code
 * @returns {object} - Result containing output and whether the solution is correct
 */
export function verifySolution(challengeId, code) {
  if (!Object.hasOwn(verifiers, challengeId)) {
    return { output: "Error: Unknown challenge.", isCorrect: false };
  }

  const verifier = verifiers[challengeId];

  if (verifier.check(code)) {
    const challenge = codingChallenges.find(({ id }) => id === challengeId);
    return { output: challenge.expectedOutput, isCorrect: true };
  }

  return { output: `Error: ${verifier.error}`, isCorrect: false };
}
