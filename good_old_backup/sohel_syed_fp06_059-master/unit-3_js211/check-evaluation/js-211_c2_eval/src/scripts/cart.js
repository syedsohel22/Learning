let appendData = () => {
  let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("items");
  container.innerHTML = null;
  cartdata.forEach((el) => {
    let div = document.createElement("div");
    div.className = "item";
    let image = document.createElement("img");
    image.src = el.image;

    let category = document.createElement("p");
    category.textContent = el.category;

    let title = document.createElement("h4");
    title.textContent = el.title;

    let brand = document.createElement("p");
    brand.textContent = el.brand;

    let price = document.createElement("p");
    price.textContent = el.price;

    let btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.className = "remove";
    btn.addEventListener("click", () => {
      remove(el);
    });

    div.append(image, category, title, brand, price, btn);
    container.append(div);
  });
};

let cartcount = () => {
  let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
  let count = document.getElementById("cart_count");
  count.innerHTML = null;
  let c = cartdata.length;
  count.append(c);
};

let remove = (el) => {
  console.log(el.id);
  let pit = el.id;
  let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
  cartdata = cartdata.filter((el) => {
    return el.id !== pit;
  });
  localStorage.setItem("cart", JSON.stringify(cartdata));
  appendData();
  cartcount();
};
window.onload = () => {
  appendData();
  cartcount();
};

let checkoutfunc = () => {
  let name = document.getElementById("name").value;
  console.log(name);
  alert(`${name}, your order is successful!`);
};
