# Data Types
brand = "Toyota"
model_year = 2022
mileage  = 202323.50
is_insured = True
cars = ["Toyota", "Hondo", "Ford"]
car_info = {
    "brand":"Toyota",
    "year":2022,
    "color":"red"
}
# string interpolation
car_info_string = "The car is" +" "+ "30 years old"

car_age = 30
car_info_string1 = "The car is " +str(car_age)+ " years old"
# formatted strings
car_info_string2 = f"The car is {car_age} years old"

print(car_info_string)
print(car_info_string1)
print(car_info_string2)

# Math Operator

x  = 5+3 #Addition
y = 10-7 # Subtraction
z= 4*2 # Multiplication
div = 10/2 # Division (float division)
floor_div = 10//3 # floor division
exp = 2**3 # exponent
mod = 10 %3 # Modulus (remainder)


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
