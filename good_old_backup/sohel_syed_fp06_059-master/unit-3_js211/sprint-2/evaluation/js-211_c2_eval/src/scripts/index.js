let page = 1;
let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=`;
let getdata = async (page) => {
  let res = await fetch(`${url}${page}`);
  res = await res.json();
  let data = res.data;
  console.log(data);
  appendData(data);
};

const appendData = (data) => {
  let container = document.getElementById("main_items");
  container.innerHTML = null;

  data.forEach((el) => {
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
    btn.textContent = "Add To Cart";
    btn.className = "add_to_cart";
    btn.addEventListener("click", () => {
      storelocal(el);
      cartcount();
    });

    div.append(image, category, title, brand, price, btn);
    container.append(div);
  });
};

let storelocal = (el) => {
  let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(el);
  cartdata.push(el);
  localStorage.setItem("cart", JSON.stringify(cartdata));
};
let cartcount = () => {
  let cartdata = JSON.parse(localStorage.getItem("cart")) || [];
  let count = document.getElementById("cart_count");
  count.innerHTML = null;
  let c = cartdata.length;
  count.append(c);
};

window.onload = () => {
  getdata(page);
  cartcount();
};

let previous = () => {
  if (page == 1) {
    return;
  }
  page--;
  getdata(page);
};

let next = () => {
  page++;
  getdata(page);
};
