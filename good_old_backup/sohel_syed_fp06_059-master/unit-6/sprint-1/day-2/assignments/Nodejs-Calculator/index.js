// index.js

//  import the crypto module
const crypto = require("crypto");
//  get a commands using process.argv
const a = process.argv;
//console.log(a[2], a[3], a[4]);

// complete the  function

switch (a[2]) {
  case "add":
    console.log(+a[3] + +a[4]);
    break;
  case "sub":
    console.log(+a[3] - +a[4]);
    break;
  case "mult":
    console.log(+a[3] * +a[4]);
    break;
  case "divide":
    console.log(+a[3] / +a[4]);
    break;
  case "sin":
    console.log(Math.sin(+a[3]));
    break;
  case "cos":
    console.log(Math.cos(+a[3]));
    break;
  case "tan":
    console.log(Math.tan(+a[3]));
    break;
  case "random":
    if (+a[3]) {
      const ans = crypto.randomBytes(+a[3]).toString("binary");
    
      console.log(ans);
    } else {
      console.log("Provide length for random number generation.");
    }
    break;
  default:
    console.log("Invalid operation");
}
