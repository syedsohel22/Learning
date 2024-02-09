//store the products array in localstorage as "data"

function redirectToInventoryPage() {
  window.location.href = "./inventory.html";
}

function getFormData(e) {
  e.preventDefault();
  // let div = document.getElementById("");
  let name = document.getElementById("product_name").value;
  let brand = document.getElementById("product_brand").value;
  let price = document.getElementById("product_price").value;
  let image = document.getElementById("product_image").value;

  addData(name, brand, price, image);
  // console.log(name, brand, price, image);
  document.getElementById("product_name").value = null;
  document.getElementById("product_brand").value = null;
  document.getElementById("product_price").value = null;
  document.getElementById("product_image").value = null;
}

function addData(name, brand, price, image) {
  let p = {
    name,
    brand,
    price,
    image,
  };
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.push(p);
  localStorage.setItem("data", JSON.stringify(data));
}

document.getElementById("show_products").addEventListener("click", () => {
  //window.location.href = "./inventory.html";
  redirectToInventoryPage();
});
window.addEventListener("load", function () {
  // get the form and show products button here and add eventlisteners
  document
    .getElementById("product_form")
    .addEventListener("submit", getFormData);
});
