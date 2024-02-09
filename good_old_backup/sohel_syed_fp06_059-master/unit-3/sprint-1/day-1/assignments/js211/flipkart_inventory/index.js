const submit = () => {
  let category = document.getElementById("category").value;
  let img = document.getElementById("imgurl").value;
  let name = document.getElementById("name").value;
  let brand = document.getElementById("brand").value;
  let price = +document.getElementById("price").value;

  let product = {
    category,
    img,
    name,
    brand,
    price,
  };

  let data = JSON.parse(localStorage.getItem("products")) || [];

  data.push(product);

  localStorage.setItem("products", JSON.stringify(data));

  document.getElementById("imgurl").value = null;
  document.getElementById("name").value = null;
  document.getElementById("brand").value = null;
  document.getElementById("price").value = null;
};

let data = JSON.parse(localStorage.getItem("products")) || [];
const showproduct = () => {
  data.forEach((e) => {
    let box = document.getElementById("conta");
    let div = document.createElement("div");
    div.id = "p_card";

    let img = document.createElement("img");
    img.src = e.img;

    let category = document.createElement("p");
    category.innerText = e.category;

    let name = document.createElement("p");
    name.innerText = e.name;

    let brand = document.createElement("p");
    brand.innerText = e.brand;

    let price = document.createElement("p");
    price.innerText = e.price;

    div.append(img, category, name, brand, price);
    box.append(div);
  });
};
showproduct(data);
