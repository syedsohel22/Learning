# ### Problem **5: Concatenate two lists index-wise**

# Write a program to add two lists index-wise. Create a new list that contains the 0th index item from both the list, then the 1st index item, and so on till the last element. any leftover items will get added at the end of the new list.

# **Given**:

# ```
# list1 = ["M", "na", "i", "Ke"]
# list2 = ["y", "me", "s", "lly"]
# ```

# **Expected output:**

def concatenate_lists_index_wise(list1, list2):
    result = [x + y for x, y in zip(list1, list2)]
    return result

# Given lists
list1 = ["M", "na", "i", "Ke"]
list2 = ["y", "me", "s", "lly"]

# Call the function with the given lists
output = concatenate_lists_index_wise(list1, list2)
print(output)
