import { nav } from "../components/navbar.js";
let navbar = document.getElementById("navbar");
navbar.innerHTML = nav();

const url = `https://my-javascript-api.herokuapp.com/api/product?category=pants`;

let getdata = async () => {
  let res = await fetch(url);
  res = await res.json();
  console.log(res);
  renderDom(res);
};
getdata();

let card = ({ image, price, id }) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  img.src = image;
  p.innerText = `Price: ${price}`;
  deleteBtn.onclick = () => {
    deleteProduct(id);
  };

  div.append(img, p, deleteBtn);

  return div;
};

let renderDom = (data) => {
  let cont = document.getElementById("container");
  cont.innerHTML = null;

  data.forEach((el) => {
    let product = card(el);
    cont.append(product);
  });
};

let deleteProduct = async (id) => {
  await fetch(`https://my-javascript-api.herokuapp.com/api/product/${id}`, {
    method: "DELETE",
  });

  getdata();
};
