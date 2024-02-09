# ### Problem **10: Modify the tuple**

# Given a nested tuple. Write a program to modify the first item (22) of a list inside the following tuple to 222

# **Given**:

# ```
# tuple1 = (11, [22, 33], 44, 55)
# ```

# **Expected output:**

def modify_nested_tuple(input_tuple):
    # Convert the tuple to a list
    modified_list = list(input_tuple)
    # Modify the first item of the list inside the tuple
    modified_list[1][0] = 222
    # Convert the list back to a tuple
    output_tuple = tuple(modified_list)
    return output_tuple


# Given tuple
tuple1 = (11, [22, 33], 44, 55)

# Call the function with the given tuple
output = modify_nested_tuple(tuple1)
print("tuple1:", output)
