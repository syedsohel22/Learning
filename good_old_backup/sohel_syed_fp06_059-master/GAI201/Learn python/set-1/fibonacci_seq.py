# 9. **Fibonacci Sequence**: Write a Python function that generates the first n numbers in the Fibonacci sequence.
#     - *Input*: 5
#     - *Output*: "[0, 1, 1, 2, 3]"


def fibonacci_sequence(n):
    # Initialize the list to store the Fibonacci sequence
    sequence = []

    # First two numbers in the sequence
    a, b = 0, 1

    # Generate the Fibonacci sequence up to the n-th number
    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b

    return sequence


# Test the function
input_n = 5
fib_seq = fibonacci_sequence(input_n)
print(fib_seq)
