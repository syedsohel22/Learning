console.log("Hello");

let a: string = "hello";

let b: number = 1;

let c: boolean = true;

//null , undefined

//Union type

let d: null | string = null;
d = "hello";

let e: undefined | string = undefined;

e = "RCT";

const add = (a: number, b: number): number => {
  return a + b;
};

add(1, 2);

//add(1, "hello");

const log = (message: string): void => {
  console.log(message);
};

log("hello");
