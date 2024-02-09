# '''
# 3. **List Operations**: Write a Python program to create a list of numbers from 1 to 10, and then add a number, remove a number, and sort the list.
#     - *Input*: None
#     - *Output*: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]..."
# '''

# Create a list of numbers from 1 to 10
numbers = list(range(1, 11))
print(numbers)
# Add a number to the list
numbers.append(20)
print(numbers)
# Remove a number from the list
numbers.remove(3)
print(numbers)
# Sort the list in ascending order
numbers.sort()

# Printing the updated list
print(numbers)
