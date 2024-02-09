const movies = [
  {
    name: "Avengers",
    rating: "8",
    img: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    name: "thor",
    rating: "6",
    img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    name: "rrr",
    rating: "8",
    img: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  },
  {
    name: "kingsman",
    rating: "7",
    img: "https://m.media-amazon.com/images/M/MV5BYTM3ZTllNzItNTNmOS00NzJiLTg1MWMtMjMxNDc0NmJhODU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  },
  {
    name: "batman",
    rating: "9",
    img: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
  },
  {
    name: "batman vs superman",
    rating: "8",
    img: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    name: "black adam",
    rating: "8",
    img: "https://m.media-amazon.com/images/M/MV5BZDIxYjAzY2EtZjVjNS00OWI4LTljMDMtZWRmYTA4NDEwNWMxXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
  },
  {
    name: "kgf",
    rating: "9",
    img: "https://stat1.bollywoodhungama.in/wp-content/uploads/2018/11/Excel-Entertainment-presents-the-poster-of-KGF-and-it-releases-on-December-21.jpg",
  },
  {
    name: "kgf2",
    rating: "8",
    img: "https://igimages.gumlet.io/tamil/home/kgf2-3032022m.jpg?w=376&dpr=2.6",
  },
  {
    name: "hera pheri",
    rating: "10",
    img: "https://m.media-amazon.com/images/M/MV5BNzgzYjZjYzMtNjcyYy00NWI3LTg1NDItOTMzMzdhMjhjNWExXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_SX300.jpg",
  },
];

function slideShow() {
  const arr = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9",
  ];

  let i = 0;
  let div = document.getElementById("slider");
  let img = document.createElement("img");
  img.src = arr[0];

  div.append(img);
  i = i + 1;

  setInterval(function () {
    if (i == 3) {
      i = 0;
    }

    img.src = arr[i];
    i = i + 1;
    div.append(img);
  }, 2000);
}

slideShow();
// loader git =https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47r2tfvszp3vgec388i2ak8dj1rajim4otc9wj4hg0&rid=giphy.gif&ct=g

//loader

localStorage.setItem("movies", JSON.stringify(movies));

let data = JSON.parse(localStorage.getItem("movies"));

function appendMovies() {
  let data_div = document.getElementById("basic");

  data_div.innerHTML = null;

  // data_div.id = "movies";

  data.forEach(function (el) {
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerHTML = `name:${el.name}`;

    let rating = document.createElement("p");
    rating.innerHTML = `Rating:${el.rating}`;

    let img = document.createElement("img");
    img.id = "poster";
    img.src = el.img;

    div.append(img, name, rating);

    data_div.append(div);
  });
}

let mypromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let data = movies;
    if (data != null) {
      resolve(data);
    } else {
      reject("something went wrong.!");
    }
  }, 2000);
});

async function main() {
  try {
    let response = await mypromise;
    appendMovies(response);
  } catch (error) {
    console.log("error", error);
  }
}

main();

//sorting

function sortLH() {
  let data = JSON.parse(localStorage.getItem("movies"));

  let sort = data.sort((a, b) => a.rating - b.rating);
  console.log(data);
  appendMovies(sort);
}

function sortHL() {
  let data = JSON.parse(localStorage.getItem("movies"));

  let sort = data.sort((a, b) => b.rating - a.rating);
  console.log(data);
  appendMovies(sort);
}

// // API search funcnality

//  440dfa43
// http://www.omdbapi.com/?i=tt3896198&apikey=440dfa43

async function searchMovies() {
  let query = document.getElementById("query").value;
  let response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=440dfa43&s=${query}`
  );

  let data = await response.json();
  console.log(data.Search);
  searchresapp(data.Search);
}

function searchresapp(data) {
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
