// Create arrays
var numbers = [1, 2, 3, 4, 5];
var strings = new Array("foo", "bar", "baz");
var myTuple = ["hello", true];
// Create enum
var UserRole;
(function (UserRole) {
    UserRole[UserRole["User"] = 0] = "User";
    UserRole[UserRole["SuperUser"] = 1] = "SuperUser";
    UserRole[UserRole["Admin"] = 2] = "Admin";
    UserRole[UserRole["SuperAdmin"] = 3] = "SuperAdmin";
})(UserRole || (UserRole = {}));
// Create functions
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function printName(name) {
    console.log("Hello, ".concat(name, "!"));
}
