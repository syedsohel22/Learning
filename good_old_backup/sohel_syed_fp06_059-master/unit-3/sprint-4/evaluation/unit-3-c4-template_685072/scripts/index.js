// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

// https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${in}

let container = document.getElementById("results");
container.innerHTML = null;

const fetchnews = async () => {
  try {
    let res = await fetch(
      `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`
    );
    let data = await res.json();

    let Arraydata = data.articles;
    //  console.log(Arraydata);
    shownews(Arraydata);
  } catch (error) {
    console.log(error);
  }
};
fetchnews();

function newsartical(t, d, i) {
  this.title = t;
  this.description = d;
  this.image = i;
}
const shownews = (data) => {
  //   container = document.getElementById("results");
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.className = "news";

    //description,urlToImage,title
    let img = document.createElement("img");
    img.src = el.urlToImage;

    let title = document.createElement("h3");
    title.innerHTML = el.title;

    let description = document.createElement("p");
    description.innerHTML = el.description;

    div.append(img, title, description);
    container.append(div);
  });
};

// porblem
/*
when user click on news
sotre in ls


*/

// let data = document.getElementsByClassName("news");

// console.log("news div", data.img);
// function newsartical(t, d, i) {
//   this.title = t;
//   this.description = d;
//   this.image = i;
// }
// document.getElementsByClassName("news").addEventListener("click", newsstore);

// function newsstore() {
//     let data = document.getElementsByClassName("news")
//     let img =data.image
// let na1 = new newsartical()
// }

//by click on h3 show data

// let india = document.getElementById("in")

const fetchnews_in = async () => {
  try {
    let res = await fetch(
      `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`
    );
    let data = await res.json();

    let Arraydata = data.articles;
    //  console.log(Arraydata);
    shownews(Arraydata);
  } catch (error) {
    console.log(error);
  }
};

let india = document
  .getElementById("in")
  .addEventListener("click", fetchnews_in);
container.innerHTML = null;
fetchnews_in(india);

//chaina news
const fetchnews_ch = async () => {
  try {
    let res = await fetch(
      `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`
    );
    let data = await res.json();

    let Arraydata = data.articles;
    //  console.log(Arraydata);
    shownews(Arraydata);
  } catch (error) {
    console.log(error);
  }
};

let chaina = document
  .getElementById("ch")
  .addEventListener("click", fetchnews_ch);
container.innerHTML = null;
fetchnews_ch(chaina);

// let usa = document.getElementById("us").value;

const fetchnews_us = async () => {
  try {
    let res = await fetch(
      `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`
    );
    let data = await res.json();

    let Arraydata = data.articles;
    // console.log(Arraydata);
    shownews(Arraydata);
  } catch (error) {
    console.log(error);
  }
};

let usa = document.getElementById("us").addEventListener("click", fetchnews_us);
container.innerHTML = null;
fetchnews_us(usa);

// let uk = document.getElementById("uk").value;
const fetchnews_uk = async () => {
  try {
    let res = await fetch(
      `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`
    );
    let data = await res.json();

    let Arraydata = data.articles;
    //   console.log(Arraydata);
    shownews(Arraydata);
  } catch (error) {
    console.log(error);
  }
};

let uk = document.getElementById("uk").addEventListener("click", fetchnews_uk);
container.innerHTML = null;
fetchnews_uk(uk);
// let newzealand = document.getElementById("nz").value;

const fetchnews_nz = async () => {
  try {
    let res = await fetch(
      `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`
    );
    let data = await res.json();

    let Arraydata = data.articles;
    //  console.log(Arraydata);
    shownews(Arraydata);
  } catch (error) {
    console.log(error);
  }
};

let nz = document.getElementById("nz").addEventListener("click", fetchnews_nz);
container.innerHTML = null;
fetchnews_nz(nz);
// console.log(india, chaina, usa, uk, newzealand);

let query = document
  .getElementById("search_input")
  .addEventListener("input", sfunc);

function sfunc() {
  console.log(query);
}
//console.log(query);
