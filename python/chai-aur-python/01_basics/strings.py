# here are some string methods

# negative index allowed in python strings

a = "hello"

print(a[-1])

# slicing

print(a[0:3])

# concatenation

a = "hello"
b = "world"

print(a + " " + b)  

# repetition

print(a * 3)

# membership

print("h" in a)

# length

print(len(a))   

# capitalize

print(a.capitalize())

# casefold

print(a.casefold())

# count

print(a.count("l"))

# find

print(a.find("l"))

# index

print(a.index("l"))

# isalnum

print(a.isalnum())  

# uppercase

print(a.upper())

# lowercase

print(a.lower())

# remove spaces from string

print(a.strip())

# split

print(a.split())

# replace

print(a.replace("l", "x"))

# format

a = "hello"
b = "world"

print(f"{a} {b}")   