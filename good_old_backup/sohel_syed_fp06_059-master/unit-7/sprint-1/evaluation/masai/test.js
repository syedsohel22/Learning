// Example: A simple function that returns a promise to simulate asynchronous behavior

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success after the specified time
      resolve(`Operation completed after ${time} milliseconds`);
    }, time);
  });
}
// Using the promise

console.log("Start");

// Call the delay function, which returns a promise
delay(2000)
  .then((result) => {
    console.log(result); // Will be printed after 2000ms
    return delay(1000); // Return another promise
  })
  .then((result) => {
    console.log(result); // Will be printed after 1000ms
    console.log("All promises resolved!");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

console.log("End");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
