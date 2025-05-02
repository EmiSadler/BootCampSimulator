const codingChallenges = [
  {
    id: 1,
    title: "Sum Two Numbers",
    description: "Write a function that returns the sum of two numbers.",
    initialCode:
      "def add_numbers(a, b):\n    # Your code here\n    \n\n# Example usage\nresult = add_numbers(5, 3)\nprint(result)",
    expectedOutput: "8",
    hint: "Use the + operator to add the numbers and return the result.",
    solution:
      "def add_numbers(a, b):\n    return a + b\n\n# Example usage\nresult = add_numbers(5, 3)\nprint(result)",
  },
  // NEW CHALLENGE - Very Basic
  {
    id: 2,
    title: "Greet User",
    description:
      "Write a function that takes a name as input and returns a greeting message.",
    initialCode:
      "def greet(name):\n    # Your code here\n    \n\n# Example usage\nresult = greet('Alex')\nprint(result)",
    expectedOutput: "Hello, Alex!",
    hint: "Use string concatenation or f-strings to combine the greeting with the name.",
    solution:
      "def greet(name):\n    return f\"Hello, {name}!\"\n\n# Example usage\nresult = greet('Alex')\nprint(result)",
  },
  {
    id: 3,
    title: "String Reversal",
    description: "Write a function that reverses a string.",
    initialCode:
      "def reverse_string(text):\n    # Your code here\n    \n\n# Example usage\nresult = reverse_string('hello')\nprint(result)",
    expectedOutput: "olleh",
    hint: "You can use string slicing with a negative step: text[::-1]",
    solution:
      "def reverse_string(text):\n    return text[::-1]\n\n# Example usage\nresult = reverse_string('hello')\nprint(result)",
  },
  {
    id: 4,
    title: "Even or Odd",
    description: "Write a function that determines if a number is even or odd.",
    initialCode:
      "def is_even(number):\n    # Your code here\n    \n\n# Example usage\nresult = is_even(4)\nprint(result)",
    expectedOutput: "True",
    hint: "Use the modulo operator (%) to check if a number is divisible by 2.",
    solution:
      "def is_even(number):\n    return number % 2 == 0\n\n# Example usage\nresult = is_even(4)\nprint(result)",
  },
  // NEW CHALLENGE - Basic
  {
    id: 5,
    title: "Convert Temperature",
    description:
      "Write a function that converts temperature from Celsius to Fahrenheit.",
    initialCode:
      "def celsius_to_fahrenheit(celsius):\n    # Your code here\n    \n\n# Example usage\nresult = celsius_to_fahrenheit(25)\nprint(result)",
    expectedOutput: "77.0",
    hint: "The formula is: Fahrenheit = (Celsius * 9/5) + 32",
    solution:
      "def celsius_to_fahrenheit(celsius):\n    return (celsius * 9/5) + 32\n\n# Example usage\nresult = celsius_to_fahrenheit(25)\nprint(result)",
  },
  {
    id: 6,
    title: "Calculate Average",
    description:
      "Write a function that calculates the average of a list of numbers.",
    initialCode:
      "def calculate_average(numbers):\n    # Your code here\n    \n\n# Example usage\nresult = calculate_average([5, 10, 15, 20])\nprint(result)",
    expectedOutput: "12.5",
    hint: "Calculate the sum of all elements, then divide by the number of elements.",
    solution:
      "def calculate_average(numbers):\n    return sum(numbers) / len(numbers)\n\n# Example usage\nresult = calculate_average([5, 10, 15, 20])\nprint(result)",
  },
  {
    id: 7,
    title: "Multiply Strings",
    description:
      "Create a function that repeats a string a given number of times.",
    initialCode:
      "def repeat_string(text, times):\n    # Your code here\n    \n\n# Example usage\nresult = repeat_string('abc', 3)\nprint(result)",
    expectedOutput: "abcabcabc",
    hint: "You can multiply a string by a number in Python using the * operator.",
    solution:
      "def repeat_string(text, times):\n    return text * times\n\n# Example usage\nresult = repeat_string('abc', 3)\nprint(result)",
  },
  // NEW CHALLENGE - Basic-Intermediate
  {
    id: 8,
    title: "Count Words",
    description:
      "Write a function that counts the number of words in a sentence.",
    initialCode:
      "def count_words(sentence):\n    # Your code here\n    \n\n# Example usage\nresult = count_words('Python is a great programming language')\nprint(result)",
    expectedOutput: "6",
    hint: "You can split the sentence into a list of words using the split() method.",
    solution:
      "def count_words(sentence):\n    return len(sentence.split())\n\n# Example usage\nresult = count_words('Python is a great programming language')\nprint(result)",
  },
  {
    id: 9,
    title: "Largest Number",
    description: "Write a function that finds the largest number in a list.",
    initialCode:
      "def find_largest(numbers):\n    # Your code here\n    \n\n# Example usage\nresult = find_largest([5, 12, 9, 8, 14, 2])\nprint(result)",
    expectedOutput: "14",
    hint: "You can use the built-in max() function or implement your own comparison logic.",
    solution:
      "def find_largest(numbers):\n    return max(numbers)\n\n# Example usage\nresult = find_largest([5, 12, 9, 8, 14, 2])\nprint(result)",
  },
  {
    id: 10,
    title: "Count Vowels",
    description:
      "Write a function that counts the number of vowels in a string.",
    initialCode:
      "def count_vowels(text):\n    # Your code here\n    \n\n# Example usage\nresult = count_vowels('programming')\nprint(result)",
    expectedOutput: "3",
    hint: "Check each character against the vowels (a, e, i, o, u) and count the matches.",
    solution:
      "def count_vowels(text):\n    vowels = 'aeiou'\n    count = 0\n    for char in text.lower():\n        if char in vowels:\n            count += 1\n    return count\n\n# Example usage\nresult = count_vowels('programming')\nprint(result)",
  },
  // NEW CHALLENGE - Intermediate
  {
    id: 11,
    title: "Reverse Words",
    description:
      "Write a function that reverses each word in a sentence while keeping the word order.",
    initialCode:
      "def reverse_words(sentence):\n    # Your code here\n    \n\n# Example usage\nresult = reverse_words('Hello world')\nprint(result)",
    expectedOutput: "olleH dlrow",
    hint: "Split the sentence into words, reverse each word, then join them back together.",
    solution:
      "def reverse_words(sentence):\n    words = sentence.split()\n    reversed_words = [word[::-1] for word in words]\n    return ' '.join(reversed_words)\n\n# Example usage\nresult = reverse_words('Hello world')\nprint(result)",
  },
  {
    id: 12,
    title: "FizzBuzz",
    description:
      "Implement the classic FizzBuzz function. For numbers divisible by 3, return 'Fizz'. For numbers divisible by 5, return 'Buzz'. For numbers divisible by both 3 and 5, return 'FizzBuzz'. Otherwise, return the number itself as a string.",
    initialCode:
      "def fizzbuzz(number):\n    # Your code here\n    \n\n# Example usage\nresult = fizzbuzz(15)\nprint(result)",
    expectedOutput: "FizzBuzz",
    hint: "Use the modulo operator (%) to check divisibility and conditional statements to determine the return value.",
    solution:
      "def fizzbuzz(number):\n    if number % 3 == 0 and number % 5 == 0:\n        return 'FizzBuzz'\n    elif number % 3 == 0:\n        return 'Fizz'\n    elif number % 5 == 0:\n        return 'Buzz'\n    else:\n        return str(number)\n\n# Example usage\nresult = fizzbuzz(15)\nprint(result)",
  },
  // NEW CHALLENGE - Intermediate
  {
    id: 13,
    title: "Remove Duplicates",
    description:
      "Write a function that removes duplicate values from a list while preserving the original order.",
    initialCode:
      "def remove_duplicates(items):\n    # Your code here\n    \n\n# Example usage\nresult = remove_duplicates([1, 2, 3, 2, 1, 4, 5, 4])\nprint(result)",
    expectedOutput: "[1, 2, 3, 4, 5]",
    hint: "You can use a dictionary or set to keep track of unique items while preserving the original order.",
    solution:
      "def remove_duplicates(items):\n    seen = set()\n    result = []\n    for item in items:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result\n\n# Example usage\nresult = remove_duplicates([1, 2, 3, 2, 1, 4, 5, 4])\nprint(result)",
  },
  {
    id: 14,
    title: "List Filtering",
    description:
      "Write a function that filters out all numbers from a list that are less than a given value.",
    initialCode:
      "def filter_list(numbers, minimum):\n    # Your code here\n    \n\n# Example usage\nresult = filter_list([1, 4, 6, 7, 2, 9], 5)\nprint(result)",
    expectedOutput: "[6, 7, 9]",
    hint: "Use a list comprehension or filter function to keep only the elements that meet the condition.",
    solution:
      "def filter_list(numbers, minimum):\n    return [num for num in numbers if num >= minimum]\n\n# Example usage\nresult = filter_list([1, 4, 6, 7, 2, 9], 5)\nprint(result)",
  },
  // NEW CHALLENGE - Intermediate
  {
    id: 15,
    title: "Title Case Converter",
    description:
      "Write a function that converts a sentence to title case (first letter of each word capitalized).",
    initialCode:
      "def title_case(sentence):\n    # Your code here\n    \n\n# Example usage\nresult = title_case('python programming is fun')\nprint(result)",
    expectedOutput: "Python Programming Is Fun",
    hint: "Split the sentence into words, capitalize each word, then join them back together.",
    solution:
      "def title_case(sentence):\n    words = sentence.split()\n    title_words = [word.capitalize() for word in words]\n    return ' '.join(title_words)\n\n# Example usage\nresult = title_case('python programming is fun')\nprint(result)",
  },
  {
    id: 16,
    title: "Dictionary Creation",
    description:
      "Create a function that takes two lists and returns a dictionary where items from the first list are keys and items from the second list are values.",
    initialCode:
      "def create_dict(keys, values):\n    # Your code here\n    \n\n# Example usage\nresult = create_dict(['a', 'b', 'c'], [1, 2, 3])\nprint(result)",
    expectedOutput: "{'a': 1, 'b': 2, 'c': 3}",
    hint: "Use the zip function to combine the two lists and then convert to a dictionary.",
    solution:
      "def create_dict(keys, values):\n    return dict(zip(keys, values))\n\n# Example usage\nresult = create_dict(['a', 'b', 'c'], [1, 2, 3])\nprint(result)",
  },
  {
    id: 17,
    title: "Palindrome Check",
    description:
      "Write a function that checks whether a string is a palindrome (reads the same forwards and backwards).",
    initialCode:
      "def is_palindrome(text):\n    # Your code here\n    \n\n# Example usage\nresult = is_palindrome('racecar')\nprint(result)",
    expectedOutput: "True",
    hint: "Remove spaces and convert to lowercase, then compare the string with its reverse.",
    solution:
      "def is_palindrome(text):\n    text = text.lower().replace(' ', '')\n    return text == text[::-1]\n\n# Example usage\nresult = is_palindrome('racecar')\nprint(result)",
  },
  // NEW CHALLENGE - Advanced-Intermediate
  {
    id: 18,
    title: "Find Missing Number",
    description:
      "Write a function that finds the missing number in a sequence from 1 to n.",
    initialCode:
      "def find_missing(numbers):\n    # Your code here\n    \n\n# Example usage\nresult = find_missing([1, 2, 4, 5, 6])\nprint(result)",
    expectedOutput: "3",
    hint: "The sum of numbers from 1 to n is n*(n+1)/2. You can use this formula to find the missing number.",
    solution:
      "def find_missing(numbers):\n    n = len(numbers) + 1\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(numbers)\n    return expected_sum - actual_sum\n\n# Example usage\nresult = find_missing([1, 2, 4, 5, 6])\nprint(result)",
  },
  // NEW CHALLENGE - Advanced-Intermediate
  {
    id: 19,
    title: "Anagram Check",
    description:
      "Write a function that checks if two strings are anagrams (contain the same characters in a different order).",
    initialCode:
      "def is_anagram(str1, str2):\n    # Your code here\n    \n\n# Example usage\nresult = is_anagram('listen', 'silent')\nprint(result)",
    expectedOutput: "True",
    hint: "Sort the characters in both strings and compare them, or count the occurrences of each character.",
    solution:
      "def is_anagram(str1, str2):\n    return sorted(str1.lower()) == sorted(str2.lower())\n\n# Example usage\nresult = is_anagram('listen', 'silent')\nprint(result)",
  },
  {
    id: 20,
    title: "Prime Number Checker",
    description:
      "Create a function that checks if a number is prime (only divisible by 1 and itself).",
    initialCode:
      "def is_prime(number):\n    # Your code here\n    \n\n# Example usage\nresult = is_prime(17)\nprint(result)",
    expectedOutput: "True",
    hint: "Check divisibility from 2 up to the square root of the number.",
    solution:
      "def is_prime(number):\n    if number <= 1:\n        return False\n    if number <= 3:\n        return True\n    if number % 2 == 0 or number % 3 == 0:\n        return False\n    i = 5\n    while i * i <= number:\n        if number % i == 0 or number % (i + 2) == 0:\n            return False\n        i += 6\n    return True\n\n# Example usage\nresult = is_prime(17)\nprint(result)",
  },
  // NEW CHALLENGE - Advanced
  {
    id: 21,
    title: "Flatten Nested List",
    description:
      "Write a function that flattens a nested list structure into a single list.",
    initialCode:
      "def flatten_list(nested_list):\n    # Your code here\n    \n\n# Example usage\nresult = flatten_list([1, [2, 3], [4, [5, 6]]])\nprint(result)",
    expectedOutput: "[1, 2, 3, 4, 5, 6]",
    hint: "Use recursion to handle arbitrary levels of nesting.",
    solution:
      "def flatten_list(nested_list):\n    result = []\n    for item in nested_list:\n        if isinstance(item, list):\n            result.extend(flatten_list(item))\n        else:\n            result.append(item)\n    return result\n\n# Example usage\nresult = flatten_list([1, [2, 3], [4, [5, 6]]])\nprint(result)",
  },
  // NEW CHALLENGE - Advanced
  {
    id: 22,
    title: "Common Elements",
    description:
      "Write a function that finds common elements between two lists without duplicates.",
    initialCode:
      "def find_common(list1, list2):\n    # Your code here\n    \n\n# Example usage\nresult = find_common([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])\nprint(result)",
    expectedOutput: "[4, 5]",
    hint: "Use sets to efficiently find the intersection between the two lists.",
    solution:
      "def find_common(list1, list2):\n    return list(set(list1) & set(list2))\n\n# Example usage\nresult = find_common([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])\nprint(result)",
  },
];

export default codingChallenges;
