# create list from string 

a = "hello"
b = list(a)

print(b)    

# create list from list

a = [1,2,3]
b = list(a)

print(b)    


# create list from tuple

a = (1,2,3)
b = list(a)

print(b)


# create list from set

a = {1,2,3}
b = list(a)

print(b)    


# create list from dictionary

a = {"name":"sohel","age":21}
b = list(a)

print(b)    


# create list from range

a = range(5)
b = list(a)

print(b)    


# slicing list

a = [1,2,3,4,5,6,7,8,9,10]

print(a[0:5])

print(a[5:10])

# dicing list 

a = [1,2,3,4,5,6,7,8,9,10]

print(a[0::2])

print(a[1::2])

# hopping in list 

a = [1,2,3,4,5,6,7,8,9,10]

print(a[::2])

print(a[1::2])