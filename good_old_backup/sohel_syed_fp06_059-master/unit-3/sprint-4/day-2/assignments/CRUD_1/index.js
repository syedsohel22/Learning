// 0f8c9c7bd8dd1e8f870979d97d52cb9c
//https://api.imgbb.com/1/upload

import { navbar } from "./components/navbar.js";
//console.log(navbar);

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let postshow = document.getElementById("posts");

const getdata = async () => {
  try {
    let res = await fetch(`http://localhost:3000/posts`);
    let data = await res.json();

    console.log(data);
    append(data);
  } catch (error) {
    console.log(error);
  }
};
getdata();

const append = (data) => {
  data.forEach((e) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = e.image_url;

    let caption = document.createElement("p");
    caption.innerText = e.caption;
    div.append(img, caption);
    postshow.append(div);
  });
};
