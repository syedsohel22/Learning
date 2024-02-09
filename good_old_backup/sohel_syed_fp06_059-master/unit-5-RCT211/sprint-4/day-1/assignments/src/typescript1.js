var myname = {
    name: "sohel",
};
var myage = {
    age: 26,
};
var check = {
    isFetching: true,
};
//create an array of numbers
var range = [1, 2, 3, 4, 5];
// create an array of strings (using array constructor generic type)
var myArr = ["c", "c++", "java", "javaScript"];
// create a tuple , which keeps a string as the first value, and boolean as the second
var tuple = ["Sohel", true];
// create an enum
// it should have User, SuperUser, Admin, SuperAdmin
var UserRole;
(function (UserRole) {
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["SuperUser"] = 2] = "SuperUser";
    UserRole[UserRole["Admin"] = 3] = "Admin";
    UserRole[UserRole["SuperAdmin"] = 4] = "SuperAdmin";
})(UserRole || (UserRole = {}));
// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
var productfn = function (x, y) {
    return x * y;
};
console.log(productfn(3, 4));
// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
var devidefn = function (x, y) {
    return x / y;
};
console.log(devidefn(10, 2));
// create a function that takes a name and prints it without returning anything
var namefn = function (name) {
    console.log(name);
};
namefn("Sohel");
