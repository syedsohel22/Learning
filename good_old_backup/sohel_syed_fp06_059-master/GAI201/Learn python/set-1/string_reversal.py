# 5. **String Reversal**: Write a Python function that takes a string and returns the string in reverse order.
#     - *Input*: "Python"
#     - *Output*: "nohtyP"

def reverse_string(input_string):
    # Using slicing to reverse the string
    reversed_string = input_string[::-1]
    return reversed_string


# Test the function
input_string = "Python"
output_string = reverse_string(input_string)
print(output_string)
