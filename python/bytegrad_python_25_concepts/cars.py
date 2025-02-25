# Data Types
brand = "Toyota"
model_year = 2022
mileage = 202323.50
is_insured = True
cars = ["Toyota", "Hondo", "Ford"]
car_info = {
    "brand": "Toyota",
    "year": 2022,
    "color": "red"
}
# string interpolation
car_info_string = "The car is" + " " + "30 years old"

car_age = 30
car_info_string1 = "The car is " + str(car_age) + " years old"
# formatted strings
car_info_string2 = f"The car is {car_age} years old"

print(car_info_string)
print(car_info_string1)
print(car_info_string2)

# Math Operator

x = 5+3  # Addition
y = 10-7  # Subtraction
z = 4*2  # Multiplication
div = 10/2  # Division (float division)
floor_div = 10//3  # floor division
exp = 2**3  # exponent
mod = 10 % 3  # Modulus (remainder)


# List operation accessing, adding, removing, manupulating
print(cars[1])
print(cars)
cars.append("Tata")
print(cars)
cars.remove("Hondo")
print(cars)

print(car_info["year"])
car_info["year"] = 2050
print(car_info["year"])

# snace case

max_speed = 1000

# constants (ALL CAPS)

MAX_SPEED = 1200

print(MAX_SPEED)
print(max_speed)

# Functions


def start_cars():
    print("Attempting to start toyota car..")
    print("Attempting to start Honda car..")


start_cars()

# function call with parameter and arguments


def start_cars1(car_1, car_2):
    print(f"Attempting to start {car_1} car..")
    print(f"Attempting to start {car_2} car..")


start_cars1("Honda", "Tata")

# default parameter


def start_cars2(car_1="Tesla", car_2="BMW"):
    print(f"Attempting to start {car_1} car..")
    print(f"Attempting to start {car_2} car..")


start_cars2()

# function return


def sum(a, b):
    return a+b


val_sum = sum(2, 2)

print(val_sum)

# pass (this will not cause error)


def new_fun():
    pass

# conditional


speed = 65

if speed > 55:
    print("you are driveing above the speed limit")
elif speed == 55:
    print("you are driveing at speed limit")
else:
    print("you are driveing below the speed limit")


# turnory
status = "above limit" if speed > 55 else "within limit"

print(status)


# loops

for car in cars:
    print("I love", car)

# range

for i in range(3):
    print(i)
