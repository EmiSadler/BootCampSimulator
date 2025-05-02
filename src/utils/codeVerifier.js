/**
 * Verifies if the submitted code provides the correct solution for a given challenge
 * @param {number} challengeId - The ID of the challenge
 * @param {string} code - The user's submitted code
 * @returns {object} - Result containing output and whether the solution is correct
 */
export function verifySolution(challengeId, code) {
  let simulatedOutput = "";
  let correctSolution = false;

  switch (challengeId) {
    case 1: // Sum Two Numbers
      if (code.includes("return a + b") || code.includes("return b + a")) {
        simulatedOutput = "8";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't return the correct value.";
      }
      break;

    case 2: // Greet User
      if (
        code.includes("return") &&
        (code.includes("Hello") || code.includes("hello")) &&
        code.includes("name") &&
        (code.includes("+") || code.includes('f"'))
      ) {
        simulatedOutput = "Hello, Alex!";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't return the correct greeting.";
      }
      break;

    case 3: // String Reversal
      if (
        code.includes("return text[::-1]") ||
        code.includes("''.join(reversed(")
      ) {
        simulatedOutput = "olleh";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't reverse the string correctly.";
      }
      break;

    case 4: // Even or Odd
      if (
        code.includes("return number % 2 == 0") ||
        code.includes("return not number % 2")
      ) {
        simulatedOutput = "True";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't correctly identify even numbers.";
      }
      break;

    case 5: // Convert Temperature
      if (
        (code.includes("return") &&
          code.includes("celsius * 9/5") &&
          code.includes("+ 32")) ||
        (code.includes("return") &&
          code.includes("celsius * (9/5)") &&
          code.includes("+ 32"))
      ) {
        simulatedOutput = "77.0";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't convert temperature correctly.";
      }
      break;

    case 6: // Calculate Average
      if (code.includes("return sum(numbers) / len(numbers)")) {
        simulatedOutput = "12.5";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't calculate the average correctly.";
      }
      break;

    case 7: // Multiply Strings
      if (code.includes("return text * times")) {
        simulatedOutput = "abcabcabc";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't repeat the string correctly.";
      }
      break;

    case 8: // Count Words
      if (
        code.includes("return len(sentence.split())") ||
        (code.includes("split()") &&
          code.includes("len(") &&
          code.includes("return"))
      ) {
        simulatedOutput = "6";
        correctSolution = true;
      } else {
        simulatedOutput = "Error: The function doesn't count words correctly.";
      }
      break;

    case 9: // Largest Number
      if (
        code.includes("return max(numbers)") ||
        (code.includes("max =") && code.includes("return max")) ||
        (code.includes("largest =") && code.includes("return largest"))
      ) {
        simulatedOutput = "14";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't find the largest number correctly.";
      }
      break;

    case 10: // Count Vowels
      if (
        (code.includes("vowels") || code.includes("aeiou")) &&
        (code.includes("count += 1") ||
          code.includes("count = count + 1") ||
          code.includes("count+=1") ||
          code.includes("count++") ||
          code.includes("count = len"))
      ) {
        simulatedOutput = "3";
        correctSolution = true;
      } else {
        simulatedOutput = "Error: The function doesn't count vowels correctly.";
      }
      break;

    case 11: // Reverse Words
      if (
        (code.includes("split") &&
          code.includes("join") &&
          code.includes("[::-1]")) ||
        (code.includes("split") &&
          code.includes("reversed") &&
          code.includes("join"))
      ) {
        simulatedOutput = "olleH dlrow";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't reverse words correctly.";
      }
      break;

    case 12: // FizzBuzz
      if (
        code.includes("if number % 3 == 0 and number % 5 == 0") &&
        code.includes("return 'FizzBuzz'") &&
        code.includes("return 'Fizz'") &&
        code.includes("return 'Buzz'")
      ) {
        simulatedOutput = "FizzBuzz";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't implement FizzBuzz correctly.";
      }
      break;

    case 13: // Remove Duplicates
      if (
        (code.includes("seen = set()") &&
          code.includes("if item not in seen")) ||
        (code.includes("result = []") && code.includes("not in result")) ||
        code.includes("list(dict.fromkeys")
      ) {
        simulatedOutput = "[1, 2, 3, 4, 5]";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't remove duplicates correctly.";
      }
      break;

    case 14: // List Filtering
      if (
        (code.includes("return [") &&
          code.includes("for") &&
          code.includes("if") &&
          code.includes(">=")) ||
        (code.includes("filter") && code.includes("lambda"))
      ) {
        simulatedOutput = "[6, 7, 9]";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't filter the list correctly.";
      }
      break;

    case 15: // Title Case Converter
      if (
        (code.includes("split") &&
          code.includes("capitalize") &&
          code.includes("join")) ||
        (code.includes("split") && code.includes("title()"))
      ) {
        simulatedOutput = "Python Programming Is Fun";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't convert to title case correctly.";
      }
      break;

    case 16: // Dictionary Creation
      if (
        code.includes("dict(zip(") ||
        (code.includes("{") && code.includes("for") && code.includes("in zip("))
      ) {
        simulatedOutput = "{'a': 1, 'b': 2, 'c': 3}";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't create a dictionary correctly.";
      }
      break;

    case 17: // Palindrome Check
      if (
        code.includes("text == text[::-1]") ||
        (code.includes("reversed(") && code.includes("join")) ||
        (code.includes("for") && code.includes("reversed"))
      ) {
        simulatedOutput = "True";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't check palindromes correctly.";
      }
      break;

    case 18: // Find Missing Number
      if (
        (code.includes("n = len(numbers) + 1") &&
          code.includes("expected_sum") &&
          code.includes("actual_sum") &&
          code.includes("return expected_sum - actual_sum")) ||
        (code.includes("range") &&
          code.includes("set") &&
          code.includes("difference"))
      ) {
        simulatedOutput = "3";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't find the missing number correctly.";
      }
      break;

    case 19: // Anagram Check
      if (
        code.includes("sorted(str1.lower()) == sorted(str2.lower())") ||
        (code.includes("Counter") &&
          code.includes("str1") &&
          code.includes("str2")) ||
        (code.includes("sort") && code.includes("join") && code.includes("=="))
      ) {
        simulatedOutput = "True";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't check anagrams correctly.";
      }
      break;

    case 20: // Prime Number Checker
      if (
        (code.includes("for") &&
          code.includes("range") &&
          code.includes("number % i == 0")) ||
        (code.includes("while") && code.includes("number % i == 0"))
      ) {
        simulatedOutput = "True";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't check for prime numbers correctly.";
      }
      break;

    case 21: // Flatten Nested List
      if (
        (code.includes("if isinstance(item, list)") &&
          code.includes("recursion")) ||
        code.includes("flatten_list(item)") ||
        code.includes("from itertools import chain") ||
        code.includes("from collections import Iterable")
      ) {
        simulatedOutput = "[1, 2, 3, 4, 5, 6]";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't flatten the nested list correctly.";
      }
      break;

    case 22: // Common Elements
      if (
        code.includes("set(list1) & set(list2)") ||
        (code.includes("intersection") && code.includes("set")) ||
        (code.includes("for") &&
          code.includes("if") &&
          code.includes("in") &&
          code.includes("list1") &&
          code.includes("list2"))
      ) {
        simulatedOutput = "[4, 5]";
        correctSolution = true;
      } else {
        simulatedOutput =
          "Error: The function doesn't find common elements correctly.";
      }
      break;

    default:
      simulatedOutput = "Error: Unknown challenge.";
  }

  return {
    output: simulatedOutput,
    isCorrect: correctSolution,
  };
}
