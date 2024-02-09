# ### Problem **9: Create a dictionary by extracting the keys from a given dictionary**

# Write a Python program to create a new dictionary by extracting the mentioned keys from the below dictionary.

# **Given dictionary**:

# ```
# sample_dict = {
#     "name": "Kelly",
#     "age": 25,
#     "salary": 8000,
#     "city": "New york"}

# # Keys to extract
# keys = ["name", "salary"]
# ```

# **Expected output:**

def extract_keys_from_dict(input_dict, keys_to_extract):
    result = {key: input_dict[key]
              for key in keys_to_extract if key in input_dict}
    return result


# Given dictionary
sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New York"}

# Keys to extract
keys = ["name", "salary"]

# Call the function with the given dictionary and keys
output = extract_keys_from_dict(sample_dict, keys)
print(output)
