# ### Problem **3: Append new string in the middle of a given string**

# Given two strings, `s1` and `s2`. Write a program to create a new string `s3` by appending `s2` in the middle of `s1`.

# **Given**:

# ```
# s1 = "Ault"
# s2 = "Kelly"
# ```

# **Expected Output**:

def append_in_middle(s1, s2):
    mid_point = len(s1) // 2
    s3 = s1[:mid_point] + s2 + s1[mid_point:]
    return s3


# Given strings
s1 = "Ault"
s2 = "Kelly"

# Call the function with the given strings
output = append_in_middle(s1, s2)
print(output)
