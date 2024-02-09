// Create types
type Name = string;
type Age = number;
type IsFetching = boolean;

// Create arrays
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: Array<string> = new Array("foo", "bar", "baz");

// Create tuple
type TupleType = [string, boolean];
const myTuple: TupleType = ["hello", true];

// Create enum
enum UserRole {
  User,
  SuperUser,
  Admin,
  SuperAdmin,
}

// Create functions
function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number {
  return x / y;
}

function printName(name: string): void {
  console.log(`Hello, ${name}!`);
}
