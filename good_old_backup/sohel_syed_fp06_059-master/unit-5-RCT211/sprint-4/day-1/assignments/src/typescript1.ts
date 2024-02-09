// create a type name with a string
type a = { name: string };
let myname: a = {
  name: "sohel",
};
// create a type age with a number
type b = { age: number };
let myage: b = {
  age: 26,
};
// create a type isFetching with boolean
type c = { isFetching: boolean };
let check: c = {
  isFetching: true,
};
//create an array of numbers
const range: number[] = [1, 2, 3, 4, 5];

// create an array of strings (using array constructor generic type)
let myArr: Array<string> = ["c", "c++", "java", "javaScript"];

// create a tuple , which keeps a string as the first value, and boolean as the second
let tuple: [string, boolean] = ["Sohel", true];
// create an enum
// it should have User, SuperUser, Admin, SuperAdmin
enum UserRole {
  User = 1,
  SuperUser = 2,
  Admin = 3,
  SuperAdmin = 4,
}



// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
const productfn = (x: number, y: number): number => {
  return x * y;
};
console.log(productfn(3, 4));

// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
const devidefn = (x: number, y: number): number => {
  return x / y;
};
console.log(devidefn(10, 2));

// create a function that takes a name and prints it without returning anything
const namefn = (name: string): void => {
  console.log(name);
};
namefn("Sohel");
