# print('hello world')
from math import *
name = 'sohel'
# age = 26
# print(name, 'is a python developer')
# print(name, 'is ', age, ' years old')
# print(name, 'lives in Parbhani')

print("hi, \nhow are you.?")  # \n for new lines
print(name[0])  # first character

print(name.islower())  # boolean value
print(name.lower())  # to lower case string
print(name.upper())  # to upper case string
print(name.isupper())  # boolean value depends on upper case string
print(len(name))  # for checking length of the string

print(name.index("o"))  # for cheacking index of a character in the string

print(name.replace("s", "Z"))  # for replacing characters in the string


# let's start with Numbers in Python

print(68)

# python  supports arithmetic operation like +,-,*,/ and %
print(-5)
print(abs(-5))  # for absolute values

print(max(4, 2, 3, 5, 18))  # for max values
print(min(4, 2, 3, 5, 18))  # for min values

print(round(3.2))
print(round(3.5))
print(sqrt(100))

name = input("Input Your Name=> ")
age = input("Input Your Age=> ")
print('Your Name is ' + name + " and your age is " + age)

sentence = input("enter your sentence: ")
print("Your sentence is :", sentence)
word1 = input("enter the word to replace: ")
word2 = input("enter the word to replace it with: ")

print(sentence.replace(word1, word2))

countries = ['uk', 'usa', 'uae', 'india', 'nz']
print(countries[0][0])
print(countries[1][0])
print(countries[2][0])
print(countries[3][0])

print(countries[1:])
print(countries[1:4])

print(type(countries))
print(type("name"))
print(type(10))
print(type(True))
print(type(3.14))

countries = ['uk', 'usa', 2, True, 'uae', 'india', 'nz']
countries = list(("tom", 24, False))
print(len(countries))

print(type(countries))
print(type(countries[0]))
print(type(countries[1]))
print(type(countries[2]))


list1 = [1, 2, 3, 4, 5]
list2 = ["apple", "orange", "banana", "mango", "orange"]

# extend adds two lists one after the another
list1.extend(list2)
print(list1)

list2.append("cherry")
print(list2)

list2.insert(1, "cherry")
print(list2)

print(list2.count("orange"))


# list2.remove("cherry")
# print(list2)

# list2.clear()
list1.sort()
print(list1)

list1.reverse()
print(list1)

list2.pop(4)
print(list2)
list2.remove("apple")
print(list2)
del list2[2]
print(list2)


#tuples

three_number = (1, 2, 3)
print(three_number)
print(three_number[0])
print(three_number[1])
print(three_number[2])

numbers = tuple((1, "one", True))
str = ("one", "two", "three")
boo = (True, False, True,)

print(numbers)
print(str)
print(boo)

## functions ###


def greetings_function(*name):
    print("--------------------------------")
    print("Welcome "+name[0])
    print("Welcome "+name[1])
    print("Welcome "+name[2])
    print("--------------------------------")


greetings_function("sohel", "aman", "king")


def greetings_function(name, age):
    print("welcome" + name + "and your age is " + str(age)+"thank you")


name = input("Enter name")
age = input("Enter age")

greetings_function(name, age)


def myfunction():
    return 5+6


print(myfunction())

# if elif and else done

# 3 hours of content is comleted

name_file = open(
    "D:/Masai-git-repo/sohel_syed_fp06_059/GAI201/Learn python/namefile.txt", "r")
for lines in name_file.readlines():
    print(lines)
name_file.close()

name_file = open(
    "D:/Masai-git-repo/sohel_syed_fp06_059/GAI201/Learn python/namefile.txt", "a")
name_file.write("this is the new text and appended to it \n")
name_file.close()

# class and objects in pyhton


class Myclass:
    x = 5


p1 = Myclass()
print(p1.x)


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
