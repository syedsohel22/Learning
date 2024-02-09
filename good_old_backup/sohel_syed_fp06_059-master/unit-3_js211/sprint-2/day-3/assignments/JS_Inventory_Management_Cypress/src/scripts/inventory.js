function redirectToIndexPage() {
  window.location.href = "./index.html";
}

function append() {
  let data = JSON.parse(localStorage.getItem("data")) || [];

  let box = document.getElementById("products_data");

  data.forEach((el) => {
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerText = el.name;

    let price = document.createElement("p");
    price.innerText = el.price;
    let brand = document.createElement("p");
    brand.innerText = el.brand;
    let image = document.createElement("img");
    image.src = el.image;
    div.append(image, name, brand, price);
    box.append(div);
  });
}
append();
function remove(index) {}

document.getElementById("add_product").addEventListener("click", () => {
  // window.location.href = "./index.html";
  redirectToIndexPage();
});
window.addEventListener("load", function () {
  // get the add more products button here and add eventlisteners
  // onload invoke append function
});
