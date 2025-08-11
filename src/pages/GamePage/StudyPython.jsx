import { useState, useEffect } from "react";
import "../../css/StudyPython.css";

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
    return "Alice", 30, "London"  

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
    "city": "London"
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
print(person.values())  # dict_values(['Alex', 31, 'London', 'alex@example.com'])
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
print(now)  # 2025-05-31 15:30:45.123456

# Creating date objects
birthday = datetime.date(1991, 5, 31)
print(birthday)  # 1991-05-31

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
print(now.strftime("%Y-%m-%d %H:%M:%S"))  # 2025-05-31 15:30:45
print(now.strftime("%A, %B %d, %Y"))      # Saturday, May 31, 2025
\`\`\`

The datetime module is crucial for applications that need to work with dates, times, and time intervals.`,
      tip: "When working with international applications, be aware of timezone issues. The datetime module has timezone support, and the pytz library is useful for more advanced timezone handling.",
    },
    {
      id: 21,
      title: "Virtual Environments and Package Management",
      content: `Python's package ecosystem is managed with pip and virtual environments:

\`\`\`python
# Creating a virtual environment
# In terminal/command prompt:
# python -m venv myenv

# Activating the environment (Windows)
# myenv\\Scripts\\activate

# Activating the environment (macOS/Linux)
# source myenv/bin/activate

# Installing a package
# pip install requests

# Using an installed package
import requests

response = requests.get('https://api.github.com')
print(response.status_code)  # 200 if successful
data = response.json()
print(data.keys())

# Creating requirements.txt
# pip freeze > requirements.txt

# Installing from requirements.txt
# pip install -r requirements.txt

# Deactivating virtual environment
# deactivate
\`\`\`

Virtual environments keep project dependencies isolated from each other and the system Python.`,
      tip: "Always use virtual environments for your projects - it prevents dependency conflicts between different projects and makes it easy to share your project's requirements.",
    },
    {
      id: 22,
      title: "Generators and Iterators",
      content: `Generators provide a memory-efficient way to work with large data sequences:

\`\`\`python
# Generator function using yield
def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

# Using the generator
counter = count_up_to(5)
print(next(counter))  # 1
print(next(counter))  # 2
print(next(counter))  # 3

# Generators are iterators
for number in count_up_to(3):
    print(number)  # Prints 1, 2, 3

# Generator expressions - like list comprehensions but with ()
squared = (x**2 for x in range(1, 6))
for num in squared:
    print(num)  # Prints 1, 4, 9, 16, 25

# Infinite sequences (use with caution!)
def infinite_counter():
    num = 0
    while True:
        yield num
        num += 1

# Take just what you need
from itertools import islice
first_10 = islice(infinite_counter(), 10)
print(list(first_10))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
\`\`\`

Generators calculate values on-demand, saving memory when working with large sequences.`,
      tip: "Unlike lists that compute and store all values in memory, generators compute values only when requested. This makes them ideal for processing large datasets or infinite sequences.",
    },
    {
      id: 23,
      title: "Context Managers with 'with' Statement",
      content: `Context managers help manage resources properly:

\`\`\`python
# Built-in context managers for files
with open('example.txt', 'w') as file:
    file.write('Hello, World!')
# File is automatically closed after the block

# Creating your own context manager using a class
class MyContext:
    def __init__(self, name):
        self.name = name
        
    def __enter__(self):
        print(f"Entering {self.name}")
        return self  # This is returned as 'context'
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Exiting {self.name}")
        # Return True to suppress exceptions, False to propagate
        return False

# Using our custom context manager
with MyContext("test") as context:
    print(f"Inside the context: {context.name}")

# Creating context manager using contextlib
from contextlib import contextmanager

@contextmanager
def my_context(name):
    print(f"Entering {name}")
    try:
        # Setup code - runs before the with block
        yield name  # This value is returned as 'value'
        # Cleanup code - runs after the with block
    finally:
        print(f"Exiting {name}")

with my_context("test2") as value:
    print(f"Inside the context: {value}")
\`\`\`

Context managers ensure proper resource initialization and cleanup, even if exceptions occur.`,
      tip: "Context managers are ideal for managing resources like files, network connections, and database transactions that need proper cleanup regardless of exceptions.",
    },
    {
      id: 24,
      title: "Decorators - Modifying Function Behavior",
      content: `Decorators allow you to modify the behavior of functions and methods:

\`\`\`python
# Simple decorator that prints function info
def log_function(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args} and {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

# Apply decorator with @ syntax
@log_function
def add(a, b):
    return a + b

# Now when we call add(), it's wrapped with the logging
result = add(3, 5)  # Logs the call and return value

# Decorator with arguments
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            results = []
            for _ in range(times):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Calls greet 3 times and returns results in a list

# Real-world examples
import time

def timing_decorator(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timing_decorator
def slow_function():
    time.sleep(1)
    return "Done"

slow_function()  # Shows execution time
\`\`\`

Decorators are a powerful way to extend and modify the behavior of functions without changing their code.`,
      tip: "Python's decorator pattern makes it easy to apply common functionality like logging, timing, authentication, and caching across many functions.",
    },
    {
      id: 25,
      title: "Functional Programming Tools",
      content: `Python supports functional programming concepts through various built-ins and modules:

\`\`\`python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# map - applies a function to each item in an iterable
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# filter - selects items from an iterable based on a function
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]

# reduce - cumulatively applies a function to items, reducing to a single value
sum_all = reduce(lambda x, y: x + y, numbers)
print(sum_all)  # 15 (1+2+3+4+5)

# all - returns True if all items in iterable are truthy
print(all([True, 1, "hello"]))  # True
print(all([True, 0, "hello"]))  # False (0 is falsy)

# any - returns True if any item in iterable is truthy
print(any([False, 0, "", "hello"]))  # True ("hello" is truthy)
print(any([False, 0, ""]))  # False (all falsy)

# sorted with key function
words = ["apple", "banana", "cherry", "date"]
by_length = sorted(words, key=len)  # Sort by length
print(by_length)  # ['date', 'apple', 'banana', 'cherry']

# Partial functions
from functools import partial
def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
print(square(5))  # 25
\`\`\`

Functional programming emphasizes pure functions and immutable data.`,
      tip: "While Python isn't a pure functional language, it offers many tools for functional programming. The key is to avoid modifying state and favor immutable data structures.",
    },
    {
      id: 26,
      title: "Asynchronous Programming with async/await",
      content: `Asynchronous programming allows non-blocking execution of code:

\`\`\`python
import asyncio

# Define an asynchronous function with 'async def'
async def say_after(delay, message):
    await asyncio.sleep(delay)  # Non-blocking sleep
    print(message)

# Another async function that calls other async functions
async def main():
    print("Start")
    
    # Run sequentially
    await say_after(1, "Hello")
    await say_after(1, "World")
    
    print("Sequential part done")
    
    # Run concurrently
    task1 = asyncio.create_task(say_after(1, "Concurrent Hello"))
    task2 = asyncio.create_task(say_after(1, "Concurrent World"))
    
    # Wait for both tasks to complete
    await task1
    await task2
    
    print("Concurrent part done")

# Run the async program
asyncio.run(main())

# Handling multiple tasks
async def gather_example():
    results = await asyncio.gather(
        say_after(1, "First"),
        say_after(2, "Second"),
        say_after(3, "Third")
    )
    return results
\`\`\`

Asynchronous programming is ideal for I/O-bound operations like network requests or file operations.`,
      tip: "Use async/await for programs that need to perform multiple I/O operations concurrently without blocking. It's especially useful for web scrapers, API clients, and web servers.",
    },
    {
      id: 27,
      title: "Working with Databases in Python",
      content: `Python can interact with various databases easily:

\`\`\`python
# SQLite - built into Python's standard library
import sqlite3

# Connect to a database (creates it if it doesn't exist)
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# Create a table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    age INTEGER
)
''')

# Insert data
cursor.execute('INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
              ('Alice', 'alice@example.com', 30))

# Insert multiple rows
users = [
    ('Bob', 'bob@example.com', 25),
    ('Charlie', 'charlie@example.com', 35)
]
cursor.executemany('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', users)

# Commit changes
conn.commit()

# Query data
cursor.execute('SELECT * FROM users WHERE age > ?', (25,))
results = cursor.fetchall()
for row in results:
    print(f"ID: {row[0]}, Name: {row[1]}, Email: {row[2]}, Age: {row[3]}")

# Use column names
cursor.execute('SELECT name, email FROM users')
for row in cursor.fetchall():
    name, email = row
    print(f"{name}: {email}")

# Close connection
conn.close()

# Example with context manager for automatic closing
with sqlite3.connect('example.db') as conn:
    cursor = conn.cursor()
    cursor.execute('SELECT COUNT(*) FROM users')
    count = cursor.fetchone()[0]
    print(f"Total users: {count}")
\`\`\`

For more complex applications, consider libraries like SQLAlchemy or Django ORM to abstract the database layer.`,
      tip: "Always use parameterized queries (with ? or named placeholders) instead of string formatting to prevent SQL injection attacks.",
    },
    {
      id: 28,
      title: "Testing in Python with pytest",
      content: `Writing tests is essential for reliable code. pytest makes it easy:

\`\`\`python
# File: math_functions.py
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# File: test_math_functions.py
import pytest
from math_functions import add, multiply, divide

# Simple test function
def test_add():
    assert add(3, 5) == 8
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

# Test function with multiple assertions
def test_multiply():
    assert multiply(2, 3) == 6
    assert multiply(0, 5) == 0
    assert multiply(-2, -3) == 6

# Testing for exceptions
def test_divide_exception():
    with pytest.raises(ValueError):
        divide(10, 0)

# Parameterized tests
@pytest.mark.parametrize("a, b, expected", [
    (5, 2, 2.5),
    (10, 2, 5),
    (1, 4, 0.25),
])
def test_divide(a, b, expected):
    assert divide(a, b) == expected

# Fixtures - reusable test resources
@pytest.fixture
def sample_data():
    return [1, 2, 3, 4, 5]

def test_with_fixture(sample_data):
    assert len(sample_data) == 5
    assert sum(sample_data) == 15
\`\`\`

Run tests with the pytest command in your terminal. pytest automatically discovers and runs test files that match the pattern test_*.py or *_test.py.`,
      tip: "Write tests before implementing features (Test-Driven Development) to ensure your code meets requirements. Small, focused tests make debugging easier.",
    },
    {
      id: 29,
      title: "Python Design Patterns",
      content: `Design patterns are reusable solutions to common software design problems:

\`\`\`python
# Singleton Pattern - ensures a class has only one instance
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

# Usage
s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True - they're the same instance

# Factory Pattern - create objects without specifying exact class
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class AnimalFactory:
    def create_animal(self, animal_type):
        if animal_type == "dog":
            return Dog()
        elif animal_type == "cat":
            return Cat()
        else:
            raise ValueError(f"Unknown animal type: {animal_type}")

# Usage
factory = AnimalFactory()
dog = factory.create_animal("dog")
print(dog.speak())  # "Woof!"

# Observer Pattern - for event handling
class Subject:
    def __init__(self):
        self._observers = []
        
    def attach(self, observer):
        self._observers.append(observer)
        
    def detach(self, observer):
        self._observers.remove(observer)
        
    def notify(self, message):
        for observer in self._observers:
            observer.update(message)

class Observer:
    def update(self, message):
        pass

class ConcreteObserver(Observer):
    def __init__(self, name):
        self.name = name
        
    def update(self, message):
        print(f"{self.name} received: {message}")

# Usage
subject = Subject()
observer1 = ConcreteObserver("Observer 1")
observer2 = ConcreteObserver("Observer 2")

subject.attach(observer1)
subject.attach(observer2)
subject.notify("Hello, observers!")
\`\`\`

Understanding common design patterns helps write better, more maintainable code.`,
      tip: "Design patterns are useful templates, but don't force them where they don't fit. Python's dynamic nature often allows for simpler solutions than traditional design patterns used in languages like Java.",
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
