import { describe, it, expect } from "vitest";
import codingChallenges from "../data/codingChallenges";
import { verifySolution } from "../utils/codeVerifier";

// Alternative snippets each challenge should accept, beyond the shipped solution.
const acceptedVariants = {
  1: ["return a + b", "return b + a"],
  2: ['return "Hello, " + name', 'return f"Hello, {name}!"', 'return "hello " + name'],
  3: ["return text[::-1]", "return ''.join(reversed(text))"],
  4: ["return number % 2 == 0", "return not number % 2"],
  5: ["return celsius * 9/5 + 32", "return celsius * (9/5) + 32"],
  6: ["return sum(numbers) / len(numbers)"],
  7: ["return text * times"],
  8: [
    "return len(sentence.split())",
    "words = sentence.split()\nreturn len(words)",
  ],
  9: [
    "return max(numbers)",
    "max = numbers[0]\nreturn max",
    "largest = numbers[0]\nreturn largest",
  ],
  10: [
    "vowels = 'aeiou'\ncount += 1",
    "aeiou\ncount = count + 1",
    "vowels\ncount+=1",
    "vowels\ncount++",
    "aeiou\ncount = len(x)",
  ],
  11: [
    "' '.join(s.split()[::-1])",
    "' '.join(reversed(s.split()))",
  ],
  12: [
    "if number % 3 == 0 and number % 5 == 0:\n return 'FizzBuzz'\nreturn 'Fizz'\nreturn 'Buzz'",
  ],
  13: [
    "seen = set()\nif item not in seen",
    "result = []\nif x not in result",
    "list(dict.fromkeys(items))",
  ],
  14: [
    "return [n for n in numbers if n >= 6]",
    "return list(filter(lambda n: n > 5, numbers))",
  ],
  15: [
    "' '.join(w.capitalize() for w in s.split())",
    "return s.title()\nsplit()",
  ],
  16: ["dict(zip(keys, values))", "{k: v for k, v in zip(keys, values)}"],
  17: [
    "return text == text[::-1]",
    "return ''.join(reversed(text)) == text",
    "for c in reversed(text): pass",
  ],
  18: [
    "n = len(numbers) + 1\nexpected_sum = n*(n+1)//2\nactual_sum = sum(numbers)\nreturn expected_sum - actual_sum",
    "set(range(1, n)).difference(set(numbers))",
  ],
  19: [
    "return sorted(str1.lower()) == sorted(str2.lower())",
    "Counter(str1) == Counter(str2)",
    "''.join(sort(a)) == ''.join(sort(b))",
  ],
  20: [
    "for i in range(2, number):\n if number % i == 0: return False",
    "while number % i == 0: pass",
  ],
  21: [
    "if isinstance(item, list): recursion",
    "flatten_list(item)",
    "from itertools import chain",
    "from collections import Iterable",
  ],
  22: [
    "return list(set(list1) & set(list2))",
    "set(list1).intersection(list2)",
    "for x in list1:\n if x in list2: pass",
  ],
};

describe("verifySolution", () => {
  it("covers every challenge in the data file", () => {
    expect(Object.keys(acceptedVariants).map(Number)).toEqual(
      codingChallenges.map((challenge) => challenge.id)
    );
  });

  describe.each(codingChallenges)("challenge $id: $title", (challenge) => {
    it("accepts the shipped solution and returns the expected output", () => {
      expect(verifySolution(challenge.id, challenge.solution)).toEqual({
        output: challenge.expectedOutput,
        isCorrect: true,
      });
    });

    it.each(acceptedVariants[challenge.id])("accepts variant %j", (code) => {
      expect(verifySolution(challenge.id, code)).toEqual({
        output: challenge.expectedOutput,
        isCorrect: true,
      });
    });

    it("rejects the starter code with an error message", () => {
      const result = verifySolution(challenge.id, challenge.initialCode);
      expect(result.isCorrect).toBe(false);
      expect(result.output).toMatch(/^Error: The function doesn't /);
    });

    it("rejects an empty submission", () => {
      expect(verifySolution(challenge.id, "").isCorrect).toBe(false);
    });
  });

  it("rejects an unknown challenge id", () => {
    expect(verifySolution(999, "return a + b")).toEqual({
      output: "Error: Unknown challenge.",
      isCorrect: false,
    });
  });

  it("uses a specific error message per challenge", () => {
    const messages = codingChallenges.map(
      (challenge) => verifySolution(challenge.id, "").output
    );
    expect(new Set(messages).size).toBe(codingChallenges.length);
  });
});
