//https://www.omdbapi.com/?s=${searchquery}&page=1&apikey={your api key}

//http://www.omdbapi.com/?i=tt3896198&apikey=440dfa43

let searchmovie = async () => {
  let key = `266e3539`;
  let query = document.getElementById("search").value;
  let url = `https://www.omdbapi.com/?s=${query}&page=1&apikey=${key}`;
  console.log(url);
  try {
    let res = await fetch(url);
    res = await res.json();
    let data = res.Search;
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error);
  }
};

let appendData = (data) => {
  let container = document.getElementById("movies");

  data.forEach((el) => {
    let div = document.createElement("div");
    div.className = "movie_tab";

    let img = document.createElement("img");
    img.src = el.Poster;

    let name = document.createElement("p");
    name.innerText = el.Title;

    let button = document.createElement("button");
    button.innerText = "Book Now";
    button.className = "book_now";

    div.append(img, name, button);
    container.append(div);
  });
};
let id;
let debounce = (func, time) => {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    func();
  }, time);
};

let showamt = () => {
  let m = document.getElementById("wallet");
  let amount = JSON.parse(localStorage.getItem("amount")) || 0;
  m.innerText = amount;
};
showamt();