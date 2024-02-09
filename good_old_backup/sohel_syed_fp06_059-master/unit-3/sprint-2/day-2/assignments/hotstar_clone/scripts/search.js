// API search funcnality

//  440dfa43
// http://www.omdbapi.com/?i=tt3896198&apikey=440dfa43

async function searchMovies() {
  let query = document.getElementById("query").value;
  let response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=440dfa43&s=${query}`
  );

  let data = await response.json();
  console.log(data.Search);
  searchresapp(data.Search);
}

function searchresapp() {
  let res_div = document.getElementById("search_result");

  res_div.innerHTML = null;

  data.forEach(function (el) {
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerHTML = `name:${el.Title}`;

    let year = document.createElement("p");
    year.innerHTML = `year:${el.Year}`;

    let img = document.createElement("img");
    img.src = el.Poster;
    img.id = "Poster";

    div.append(img, name, year);

    res_div.append(div);
  });
}

function debounce(func, delay) {
  setTimeout(function () {
    func();
  }, delay);
}
