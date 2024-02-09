# ### Problem **8: Initialize dictionary with default values**

# In Python, we can initialize the keys with the same values.

# **Given**:

# ```
# employees = ['Kelly', 'Emma']
# defaults = {"designation": 'Developer', "salary": 8000}
# ```

# **Expected output:**

def initialize_dictionary(employees, defaults):
    result = {emp: defaults for emp in employees}
    return result


# Given data
employees = ['Kelly', 'Emma']
defaults = {"designation": 'Developer', "salary": 8000}

# Call the function with the given data
output = initialize_dictionary(employees, defaults)
print(output)
