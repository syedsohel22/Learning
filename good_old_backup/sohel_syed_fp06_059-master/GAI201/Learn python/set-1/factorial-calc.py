# 8. **actorial Calculation**: Write a Python function that calculates the factorial of a number.
#     - *Input*: 5
#     - *Output*: "Factorial of 5 is 120."

def factorial(number):
    # Factorial of 0 and 1 is 1
    if number == 0 or number == 1:
        return 1

    # Initialize the result variable to 1
    result = 1

    # Calculate the factorial using a loop
    for i in range(2, number + 1):
        result *= i

    return result


# Test the function
input_number = 5
result = factorial(input_number)
print(f"Factorial of {input_number} is {result}.")
