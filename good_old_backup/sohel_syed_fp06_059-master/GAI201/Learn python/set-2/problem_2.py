# ### Problem **2: Display numbers from a list using loop**

# Write a program to display only those numbers from a [list](https://pynative.com/python-lists/) that satisfy the following conditions

# - The number must be divisible by five
# - If the number is greater than 150, then skip it and move to the next number
# - If the number is greater than 500, then stop the loop

# **Given**:

# ```
# numbers = [12, 75, 150, 180, 145, 525, 50]
# ```

# **Expected output:**

def display_numbers(numbers):
    for num in numbers:
        if num % 5 == 0:
            if num > 500:
                break
            if num > 150:
                continue
            print(num)

# Given list of numbers
numbers = [12, 75, 150, 180, 145, 525, 50]

# Call the function with the list of numbers
display_numbers(numbers)
