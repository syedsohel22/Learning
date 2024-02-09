import { nav } from "../components/navbar.js";
let navbar = document.getElementById("navbar");
navbar.innerHTML = nav();

window.onload = () => {
  let form = document.getElementById("addProduct");
  form.onsubmit = () => {
    addProduct(event);
  };
};
const apiUrl = `https://my-javascript-api.herokuapp.com/api/product`;

let addProduct = async (e) => {
  e.preventDefault();

  let form = document.getElementById("addProduct");

  let image = form.image.value;
  let price = form.price.value;
  let category = form.category.value;

  let data = { id: Date.now() + Math.random() * 100, image, price, category };

  console.log(data);

  await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
