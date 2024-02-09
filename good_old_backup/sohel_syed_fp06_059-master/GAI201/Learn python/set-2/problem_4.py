# ### Problem **4: Arrange string characters such that lowercase letters should come first**

# Given string contains a combination of the lower and upper case letters. Write a program to arrange the characters of a string so that all lowercase letters should come first.

# **Given**:

# ```
# str1 = PyNaTive
# ```

# **Expected Output**:

def arrange_lowercase_first(input_str):
    lowercase = ''
    uppercase = ''

    for char in input_str:
        if char.islower():
            lowercase += char
        else:
            uppercase += char

    return lowercase + uppercase

# Given string
str1 = "PyNaTive"

# Call the function with the given string
output = arrange_lowercase_first(str1)
print(output)
