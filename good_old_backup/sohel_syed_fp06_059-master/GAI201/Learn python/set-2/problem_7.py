# ### Problem **7: Iterate both lists simultaneously**

# Given a two Python list. Write a program to iterate both lists simultaneously and display items from list1 in original order and items from list2 in reverse order.

# **Given**

# ```
# list1 = [10, 20, 30, 40]
# list2 = [100, 200, 300, 400]
# ```

# **Expected output:**
def iterate_both_lists(list1, list2):
    for x, y in zip(list1, reversed(list2)):
        print(x, y)


# Given lists
list1 = [10, 20, 30, 40]
list2 = [100, 200, 300, 400]

# Call the function with the given lists
iterate_both_lists(list1, list2)
