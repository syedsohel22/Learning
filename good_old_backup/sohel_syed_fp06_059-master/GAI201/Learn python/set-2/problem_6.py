# ### Problem **6: Concatenate two lists in the following order**

# ```
# list1 = ["Hello ", "take "]
# list2 = ["Dear", "Sir"]
# ```

# **Expected output:**

def concatenate_lists_in_order(list1, list2):
    result = [x + y for x in list1 for y in list2]
    return result

# Given lists
list1 = ["Hello ", "take "]
list2 = ["Dear", "Sir"]

# Call the function with the given lists
output = concatenate_lists_in_order(list1, list2)
print(output)
