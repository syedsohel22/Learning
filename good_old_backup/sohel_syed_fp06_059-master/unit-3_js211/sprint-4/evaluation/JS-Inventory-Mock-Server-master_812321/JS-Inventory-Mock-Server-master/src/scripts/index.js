let api = `http://localhost:8080/products`;
window.onload = () => {
  let addBtn = document.getElementById("add_product");
  addBtn.onclick = () => {
    addProduct(event);
  };
};

let addProduct = async (e) => {
  e.preventDefault();
  console.log("hi");
  let form = document.getElementById("form-data");

  let image = form.image.value;
  let name = form.name.value;
  let price = +form.price.value;
  let description = form.description.value;
  let delivery = form.delivery.value;

  let data = {
    id: Date.now() + Math.random() * 100,
    name,
    image,
    price,
    description,
    delivery,
  };
  console.log(data);

  await fetch(api, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

let getdata = async () => {
  let res = await fetch(api);
  res = await res.json();
  console.log(res);
  renderDom(res);
};
getdata();

let card = ({ image, name, price, description, delivery, id }) => {
  let div = document.createElement("div");
  div.className = "item";
  let img = document.createElement("img");
  let name1 = document.createElement("p");
  let price1 = document.createElement("p");
  price1.className = "product_price";
  let description1 = document.createElement("p");
  let delivery1 = document.createElement("p");
  delivery1.className = "product_delivery";

  img.src = image;
  name1.innerHTML = name;
  price1.innerHTML = price;
  description1.innerHTML = description;
  delivery1.innerHTML = delivery;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  deleteBtn.className = "remove_item";
  deleteBtn.onclick = () => {
    deleteProduct(id);
  };

  let updateBtn = document.createElement("button");
  updateBtn.innerText = "Update Price";
  updateBtn.className = "update_price";
  updateBtn.onclick = () => {
    updateProduct(id);
  };

  div.append(img, name1, price1, description1, delivery1, deleteBtn, updateBtn);

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
  await fetch(`http://localhost:8080/products/${id}`, {
    method: "DELETE",
  });
  getdata();
};

let updateProduct = async (id) => {
  window.prompt;
  const new_price = prompt("Enter new price");
  let price = new_price;
  let data = { price };
  let res = await fetch(`http://localhost:8080/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  getdata(res);
};

let sortLH = async () => {
  let res = await fetch(
    `http://localhost:8080/products?_sort=price&_order=asc`
  );
  res = await res.json();
  renderDom(res);
};

let sortHL = async () => {
  let res = await fetch(
    `http://localhost:8080/products?_sort=price&_order=desc`
  );
  res = await res.json();
  renderDom(res);
};

let greter = async () => {
  let res = await fetch(`http://localhost:8080/products?price_gte=4001`);
  res = await res.json();
  renderDom(res);
};
let lesser = async () => {
  let res = await fetch(`http://localhost:8080/products?price_lte=4000`);
  res = await res.json();
  renderDom(res);
};
