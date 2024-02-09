function setJokes(data) {
  // let maindiv=document.createElement("div");
  let jokepart = document.createElement("p");
  jokepart.textContent = data;

  //  maindiv.append(jokepart);
  document.getElementById("joke-container").append(jokepart);
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div
}

let getRandomJoke = async () => {
  try {
    let res = await fetch(`https://api.chucknorris.io/jokes/random`);
    let data = await res.json();
    return data;
  } catch (err) {
    return "something went wrong";
  }
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure
};
//getRandomJoke()
let getJokeByCategory = async (event) => {
  try {
    let res = await fetch(
      `https://api.chucknorris.io/jokes/random?category=animal`
    );
    let data = await res.json();
    return data;
  } catch (err) {
    return "something went wrong";
  }
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
};
window.onload = function () {
  document
    .getElementById("get-jokes-data")
    .addEventListener("click", getRandomJoke);

  document
    .getElementById("get-category")
    .addEventListener("change", getJokeByCategory);

  // add click event to button
  // add change event to select tag
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
