

# 6. **Count Vowels**: Write a Python program that counts the number of vowels in a given string.
#     - *Input*: "Hello"
#     - *Output*: "Number of vowels: 2"


def count_vowels(input_string):
    # Convert the input string to lowercase (to handle both upper and lower case vowels)
    input_string = input_string.lower()

    # Define a set of vowels
    vowels = {'a', 'e', 'i', 'o', 'u'}

    # Initialize a variable to keep track of the vowel count
    vowel_count = 0

    # Iterate over each character in the input string
    for char in input_string:
        # Check if the character is a vowel
        if char in vowels:
            vowel_count += 1

    return vowel_count

# Test the function
input_string = "Hello"
vowel_count = count_vowels(input_string)
print("Number of vowels:", vowel_count)
