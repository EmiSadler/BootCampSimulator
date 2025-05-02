import { useState, useEffect } from "react";
import "../css/StudyPython.css";

function StudyPython({ onComplete, onClose, currentLevel = 0 }) {
  const [currentLesson, setCurrentLesson] = useState(null);

  // Python lessons in order of increasing complexity
  const pythonLessons = [
    // BEGINNER LEVEL
    {
      id: 1,
      title: "Hello World - Your First Python Program",
      content: `Every programmer starts with a "Hello World" program. In Python, it's incredibly simple:

\`\`\`python
print("Hello World")
\`\`\`

The \`print()\` function displays text to the screen. Text strings in Python are enclosed in quotes (either single ' or double ").

Try running this in a Python environment and you'll see "Hello World" displayed on the screen.`,
      tip: "Python is known for its readability and simplicity. Unlike other languages, you don't need semicolons or complex syntax to get started!",
    },
    {
      id: 2,
      title: "Variables and Data Types",
      content: `Variables let you store information that can be used later. In Python, you don't need to declare variable types:

\`\`\`python
name = "Alice"        # A string
age = 25              # An integer
height = 5.7          # A float (decimal)
is_student = True     # A boolean (True/False)

print(name)
print("Age:", age)
print(f"Height: {height} ft")  # f-strings for formatting
\`\`\`

Python determines the type automatically based on what you assign to it.`,
      tip: "Unlike languages like Java or C++, Python uses dynamic typing. You can reassign a variable to a different data type later in your code!",
    },
    {
      id: 3,
      title: "Basic Operators",
      content: `Python has all the standard mathematical operators:

\`\`\`python
a = 10
b = 3

print(a + b)    # Addition: 13
print(a - b)    # Subtraction: 7
print(a * b)    # Multiplication: 30
print(a / b)    # Division: 3.3333...
print(a % b)    # Modulus (remainder): 1
print(a ** b)   # Exponentiation: 1000
print(a // b)   # Floor division: 3
\`\`\`

Python also has comparison operators that return boolean values:

\`\`\`python
print(a > b)    # True
print(a == b)   # False
print(a != b)   # True
\`\`\``,
      tip: "The modulus operator (%) is incredibly useful for checking if a number is even, odd, or divisible by another number.",
    },
    {
      id: 4,
      title: "String Operations",
      content: `Strings in Python are extremely versatile:

\`\`\`python
name = "Python Programming"

# Basic operations
print(len(name))                # Length: 18
print(name.upper())             # "PYTHON PROGRAMMING"
print(name.lower())             # "python programming"
print(name.replace("P", "J"))   # "Jython Jrogramming"

# String indexing and slicing
print(name[0])                  # "P" (first character)
print(name[-1])                 # "g" (last character)
print(name[0:6])                # "Python" (slice from 0 to 5)
print(name[7:])                 # "Programming" (slice from 7 to end)
print(name[:6])                 # "Python" (slice from start to 5)

# String methods
print("programming" in name.lower())  # True (checking substring)
print(name.split(" "))                # ["Python", "Programming"]
print(" ".join(["Hello", "World"]))   # "Hello World"
\`\`\`

String slicing with \`[start:end]\` is extremely useful for extracting parts of strings.`,
      tip: "To reverse a string, you can use the slice notation with a negative step: text[::-1]",
    },
    {
      id: 5,
      title: "Lists - Python's Versatile Arrays",
      content: `Lists are ordered collections of items, similar to arrays in other languages:

\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]  # Can contain different types

# Accessing items (indexing starts at 0)
print(fruits[0])     # "apple"
print(numbers[1:3])  # [2, 3] (slicing)

# Common operations
fruits.append("orange")  # Add an item
fruits.remove("banana")  # Remove an item
print(len(fruits))       # Get length: 3
print("apple" in fruits) # Check if item exists: True

# More list methods
numbers.sort()           # Sort in-place: [1, 2, 3, 4, 5]
numbers.reverse()        # Reverse in-place: [5, 4, 3, 2, 1]
fruits.insert(1, "kiwi") # Insert at position: ["apple", "kiwi", "cherry", "orange"]
print(fruits.pop())      # Remove and return last item: "orange"
\`\`\`

Lists are mutable, meaning you can change them after creation.`,
      tip: "List slicing with [start:end] is a powerful way to extract parts of a list. The 'end' index is not included in the result.",
    },
    {
      id: 6,
      title: "Conditional Statements",
      content: `Conditional statements let your program make decisions:

\`\`\`python
age = 18

if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
else:
    print("Adult")  # This will print

# Multiple conditions with logical operators
temperature = 75
is_sunny = True

if temperature > 70 and is_sunny:
    print("It's a beautiful day!")  # This will print

# Nested conditions
score = 85
if score >= 60:
    print("Passed")
    if score >= 80:
        print("Excellent!")  # This will print
\`\`\`

Python uses indentation (spaces or tabs) to create code blocks instead of curly braces {}. The standard is 4 spaces per indentation level.`,
      tip: "The logical operators in Python are 'and', 'or', and 'not' (instead of &&, ||, and ! in many other languages).",
    },
    {
      id: 7,
      title: "Loops - Repeating Code",
      content: `Loops help you execute code multiple times. The most common types are for and while loops:

\`\`\`python
# For loop with a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# For loop with a range
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1  # Shorthand for count = count + 1

# Loop control statements
for i in range(10):
    if i == 3:
        continue  # Skip the rest of this iteration
    if i == 7:
        break     # Exit the loop completely
    print(i)      # Prints 0, 1, 2, 4, 5, 6
\`\`\`

The 'break' statement exits a loop, and 'continue' skips to the next iteration.`,
      tip: "The range() function is commonly used with for loops. range(start, stop, step) can be configured for different sequences of numbers.",
    },
    // INTERMEDIATE LEVEL
    {
      id: 8,
      title: "Functions - Reusable Code Blocks",
      content: `Functions help you organize and reuse code:

\`\`\`python
def greet(name):
    """This is a docstring: it documents what the function does."""
    return f"Hello, {name}!"

# Calling the function
message = greet("Alex")
print(message)  # "Hello, Alex!"

# Function with default parameter
def greet_with_time(name, time="day"):
    return f"Good {time}, {name}!"

print(greet_with_time("Alex"))         # "Good day, Alex!"
print(greet_with_time("Alex", "night")) # "Good night, Alex!"

# Multiple return values (as a tuple)
def get_user_info():
    return "Alice", 30, "New York"  

name, age, city = get_user_info()
print(name)  # "Alice"
\`\`\`

Functions can return values or perform actions without returning anything.`,
      tip: "Python supports both positional and keyword arguments. You can also create functions that accept variable numbers of arguments using *args and **kwargs.",
    },
    {
      id: 9,
      title: "Dictionaries - Key-Value Pairs",
      content: `Dictionaries store data as key-value pairs:

\`\`\`python
# Creating a dictionary
person = {
    "name": "Alex",
    "age": 30,
    "city": "New York"
}

# Accessing values
print(person["name"])  # "Alex"

# Adding or modifying
person["email"] = "alex@example.com"
person["age"] = 31

# Checking if a key exists
if "phone" in person:
    print(person["phone"])
else:
    print("No phone number")  # This will print

# Safer way to get values with a default
phone = person.get("phone", "Not available")
print(phone)  # "Not available"

# Looping through a dictionary
for key, value in person.items():
    print(f"{key}: {value}")

# Dictionary methods
print(person.keys())    # dict_keys(['name', 'age', 'city', 'email'])
print(person.values())  # dict_values(['Alex', 31, 'New York', 'alex@example.com'])
\`\`\`

Dictionaries are extremely useful for representing structured data.`,
      tip: "Unlike lists, dictionary keys must be immutable (strings, numbers, tuples, but not lists). Keys must also be unique within a dictionary.",
    },
    {
      id: 10,
      title: "Tuples and Sets",
      content: `Besides lists and dictionaries, Python offers tuples and sets:

\`\`\`python
# Tuples - Immutable ordered collections
coordinates = (10, 20)
rgb = (255, 0, 128)

# Accessing tuple elements (similar to lists)
print(coordinates[0])  # 10

# You can't modify tuples
# coordinates[0] = 15  # This would cause an error!

# Sets - Unordered collections of unique items
unique_numbers = {1, 2, 3, 4, 5}
also_unique = set([1, 2, 2, 3, 3, 3])  # Creates {1, 2, 3}

# Common set operations
unique_numbers.add(6)      # Add an item
unique_numbers.remove(1)   # Remove an item
print(2 in unique_numbers) # Check membership: True

# Mathematical set operations
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}
print(set_a | set_b)  # Union: {1, 2, 3, 4, 5, 6}
print(set_a & set_b)  # Intersection: {3, 4}
print(set_a - set_b)  # Difference: {1, 2}
\`\`\`

Tuples are perfect for data that shouldn't change, while sets are ideal for eliminating duplicates and performing set operations.`,
      tip: "Sets are incredibly efficient for testing membership (checking if an item exists). This operation is much faster in sets than in lists.",
    },
    {
      id: 11,
      title: "Error Handling with Try/Except",
      content: `Python uses try/except blocks for error handling:

\`\`\`python
try:
    # Code that might cause an error
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"10 divided by {number} is {result}")
except ValueError:
    # Handles case where input isn't a valid number
    print("That's not a valid number!")
except ZeroDivisionError:
    # Handles case where number is zero
    print("You can't divide by zero!")
except:
    # Catches any other errors
    print("Something went wrong!")
finally:
    # This code always runs
    print("Thank you for trying!")

# You can also get information about the error
try:
    # Some code that might fail
    x = 10 / 0
except Exception as e:
    print(f"An error occurred: {e}")  # "An error occurred: division by zero"
\`\`\`

Error handling prevents your program from crashing when unexpected issues occur.`,
      tip: "It's best practice to catch specific exceptions rather than using a bare 'except:' statement. This makes debugging easier and prevents hiding bugs.",
    },
    {
      id: 12,
      title: "File Operations",
      content: `Python makes it easy to work with files:

\`\`\`python
# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, world!\\n")
    file.write("This is a test file.")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)

# Reading line by line
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # strip() removes whitespace/newlines

# Appending to a file
with open("example.txt", "a") as file:
    file.write("\\nAppending a new line.")

# Reading and writing binary files
with open("image.jpg", "rb") as binary_file:
    data = binary_file.read(1024)  # Read first 1024 bytes
\`\`\`

The 'with' statement automatically closes the file when you're done with it.`,
      tip: "The 'with' statement is a best practice for file operations as it ensures files are properly closed even if an error occurs during processing.",
    },
    // ADVANCED LEVEL
    {
      id: 13,
      title: "List Comprehensions",
      content: `List comprehensions provide a concise way to create lists:

\`\`\`python
# Traditional approach
squares = []
for x in range(1, 6):
    squares.append(x**2)
print(squares)  # [1, 4, 9, 16, 25]

# Using list comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# With condition
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Dictionary comprehension
names = ['Alice', 'Bob', 'Charlie']
name_lengths = {name: len(name) for name in names}
print(name_lengths)  # {'Alice': 5, 'Bob': 3, 'Charlie': 7}
\`\`\`

List comprehensions are more readable and typically faster than traditional loops for creating lists.`,
      tip: "You can also create dictionary comprehensions with {key: value for item in iterable} and set comprehensions with {item for item in iterable}.",
    },
    {
      id: 14,
      title: "Lambda Functions",
      content: `Lambda functions are small, anonymous functions defined with the lambda keyword:

\`\`\`python
# Traditional function vs lambda
def square(x):
    return x * x

# Equivalent lambda function
square_lambda = lambda x: x * x

print(square(5))       # 25
print(square_lambda(5)) # 25

# Using lambda with built-in functions
numbers = [1, 5, 3, 9, 2, 6]
sorted_numbers = sorted(numbers)  # [1, 2, 3, 5, 6, 9]

# Sort by absolute difference from 5
custom_sort = sorted(numbers, key=lambda x: abs(x - 5))
print(custom_sort)  # [5, 6, 3, 9, 2, 1]

# Lambda with filter
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 6]

# Lambda with map
squared_numbers = list(map(lambda x: x**2, numbers))
print(squared_numbers)  # [1, 25, 9, 81, 4, 36]
\`\`\`

Lambda functions are useful when you need a simple function for a short period of time.`,
      tip: "While lambda functions can be convenient, they're best used for simple operations. For complex logic, a regular named function is more readable.",
    },
    {
      id: 15,
      title: "Modules and Imports",
      content: `Python's power comes from its vast library of modules:

\`\`\`python
# Importing an entire module
import math
print(math.sqrt(16))  # 4.0

# Importing specific functions
from random import randint
print(randint(1, 10))  # Random number between 1 and 10

# Importing with an alias
import datetime as dt
now = dt.datetime.now()
print(now)

# Some essential standard library modules
import os              # Operating system interface
import sys             # System-specific parameters
import json            # JSON encoding/decoding
import csv             # CSV file reading/writing
import re              # Regular expressions
import collections     # Specialized container datatypes
import itertools       # Functions for efficient looping
import functools       # Higher-order functions
\`\`\`

The Python Standard Library includes modules for math, datetime handling, file operations, networking, and much more.`,
      tip: "While you can use 'from module import *' to import all functions, it's generally not recommended as it can lead to namespace conflicts and make code harder to understand.",
    },
    {
      id: 16,
      title: "Working with JSON Data",
      content: `JSON (JavaScript Object Notation) is a common data format that Python handles easily:

\`\`\`python
import json

# Converting Python objects to JSON strings
person = {
    "name": "Alice",
    "age": 30,
    "languages": ["Python", "JavaScript", "C++"],
    "is_student": False
}

# Convert Python dict to JSON string
json_string = json.dumps(person, indent=4)
print(json_string)

# Writing JSON to a file
with open("person.json", "w") as file:
    json.dump(person, file, indent=4)

# Reading JSON from a string
data = '{"name": "Bob", "age": 25}'
parsed_data = json.loads(data)
print(parsed_data["name"])  # "Bob"

# Reading JSON from a file
with open("person.json", "r") as file:
    loaded_person = json.load(file)
    print(loaded_person["languages"])  # ["Python", "JavaScript", "C++"]
\`\`\`

JSON is commonly used for configuration files and API responses.`,
      tip: "JSON only supports basic data types (strings, numbers, booleans, null, arrays, and objects). Custom Python objects must be serialized to these types first.",
    },
    {
      id: 17,
      title: "Regular Expressions",
      content: `Regular expressions help you match and manipulate text patterns:

\`\`\`python
import re

text = "Contact us at info@example.com or support@company.org"

# Find all email addresses
emails = re.findall(r'[\\w.+-]+@[\\w-]+\\.[\\w.-]+', text)
print(emails)  # ['info@example.com', 'support@company.org']

# Search for a pattern
phone = "Call me at 555-123-4567"
match = re.search(r'\\d{3}-\\d{3}-\\d{4}', phone)
if match:
    print("Found phone number:", match.group())  # Found phone number: 555-123-4567

# Replace pattern
censored = re.sub(r'\\d{4}', 'XXXX', "My credit card: 1234 5678 9012 3456")
print(censored)  # My credit card: XXXX XXXX XXXX XXXX

# Match at beginning or end
starts_with_hello = re.match(r'^Hello', "Hello world")  # Matches
ends_with_world = re.search(r'world$', "Hello world")   # Matches
\`\`\`

Regular expressions can be complex but are extremely powerful for text processing.`,
      tip: "The 'r' prefix before the pattern string creates a 'raw string', which is recommended for regex patterns to avoid conflicts with Python's own escape sequences.",
    },
    {
      id: 18,
      title: "Classes and Object-Oriented Programming",
      content: `Python is a versatile object-oriented programming language:

\`\`\`python
class Person:
    # Class variable shared by all instances
    species = "Human"
    
    # Constructor method
    def __init__(self, name, age):
        # Instance variables unique to each instance
        self.name = name
        self.age = age
        
    # Instance method
    def greet(self):
        return f"Hello, my name is {self.name}"
        
    # Method with parameters
    def celebrate_birthday(self):
        self.age += 1
        return f"Happy {self.age}th birthday, {self.name}!"
        
# Creating objects (instances)
alice = Person("Alice", 30)
bob = Person("Bob", 25)

print(alice.name)            # "Alice"
print(bob.greet())           # "Hello, my name is Bob"
print(alice.species)         # "Human" (class variable)
print(bob.celebrate_birthday()) # "Happy 26th birthday, Bob!"
\`\`\`

Classes help organize code and data together, modeling real-world concepts.`,
      tip: "Python uses 'self' as the first parameter in instance methods to refer to the instance itself. It's similar to 'this' in other languages but is explicitly included in the parameter list.",
    },
    {
      id: 19,
      title: "Inheritance and Polymorphism",
      content: `Inheritance allows you to create new classes based on existing ones:

\`\`\`python
# Base class
class Animal:
    def __init__(self, name):
        self.name = name
        
    def speak(self):
        return "Some sound"
        
# Derived class (inherits from Animal)
class Dog(Animal):
    def speak(self):
        return "Woof!"
        
# Another derived class
class Cat(Animal):
    def speak(self):
        return "Meow!"
        
# Creating objects
animal = Animal("Generic Animal")
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(animal.name)    # "Generic Animal"
print(dog.name)       # "Buddy" (inherited attribute)
print(cat.speak())    # "Meow!" (overridden method)

# Polymorphism - same method works for different classes
def make_speak(animal):
    return animal.speak()
    
print(make_speak(dog))  # "Woof!"
print(make_speak(cat))  # "Meow!"

# Multiple inheritance
class A:
    def method(self):
        return "A"
        
class B:
    def method(self):
        return "B"
        
class C(A, B):  # Inherits from both A and B
    pass
    
c = C()
print(c.method())  # "A" (method from the first parent class is used)
\`\`\`

Inheritance promotes code reuse, while polymorphism allows for flexible and interchangeable objects.`,
      tip: "Python supports multiple inheritance, but it can lead to complexity. The Method Resolution Order (MRO) determines which parent's method is called first.",
    },
    {
      id: 20,
      title: "Working with Dates and Times",
      content: `Python provides powerful modules for handling dates and times:

\`\`\`python
import datetime

# Current date and time
now = datetime.datetime.now()
print(now)  # 2023-04-27 15:30:45.123456

# Creating date objects
birthday = datetime.date(1990, 5, 15)
print(birthday)  # 1990-05-15

# Creating time objects
alarm = datetime.time(7, 30, 0)  # 7:30:00
print(alarm)

# Date arithmetic
today = datetime.date.today()
one_week = datetime.timedelta(days=7)
next_week = today + one_week
print(next_week)  # Date one week from today

# Time differences
start = datetime.datetime.now()
# ... some code that takes time
end = datetime.datetime.now()
duration = end - start
print(f"Operation took {duration.total_seconds()} seconds")

# Formatting dates
print(now.strftime("%Y-%m-%d %H:%M:%S"))  # 2023-04-27 15:30:45
print(now.strftime("%A, %B %d, %Y"))      # Thursday, April 27, 2023
\`\`\`

The datetime module is crucial for applications that need to work with dates, times, and time intervals.`,
      tip: "When working with international applications, be aware of timezone issues. The datetime module has timezone support, and the pytz library is useful for more advanced timezone handling.",
    },
  ];

  useEffect(() => {
    // Get the lesson based on current level
    const index = Math.min(currentLevel, pythonLessons.length - 1);
    setCurrentLesson(pythonLessons[index]);
  }, [currentLevel]);

  if (!currentLesson) return <div>Loading lesson...</div>;

  return (
    <div className="study-python-modal">
      <div className="study-python-container">
        <div className="study-header">
          <h2>{currentLesson.title}</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="lesson-content">
          <div
            className="lesson-text"
            dangerouslySetInnerHTML={{
              __html: currentLesson.content.replace(
                /```python([\s\S]*?)```/g,
                '<pre class="code-block">$1</pre>'
              ),
            }}
          />

          <div className="lesson-tip">
            <h4>💡 Pro Tip:</h4>
            <p>{currentLesson.tip}</p>
          </div>
        </div>

        <div className="study-actions">
          <button onClick={onComplete}>Got it! (+3 Coding Skill)</button>
        </div>
      </div>
    </div>
  );
}

export default StudyPython;
