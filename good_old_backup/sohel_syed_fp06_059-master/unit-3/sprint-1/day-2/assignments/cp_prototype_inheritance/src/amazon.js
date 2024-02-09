function Listing(name, category, image, price, sold) {
  this.name = name;
  this.category = category;
  this.imageUrl = image;
  this.price = price;
  this.sold = sold || false;
}

function getFormData() {
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let imageUrl = document.getElementById("image").value;
  let price = document.getElementById("price").value;

  addListing(name, category, imageUrl, price);
}
let data = JSON.parse(localStorage.getItem("Products")) || [];
function addListing(name, category, imageUrl, price) {
  let l1 = new Listing(name, category, imageUrl, price);

  data.push(l1);
  // console.log(name, category, image, price, sold);
  // console.log(l1);
  localStorage.setItem("Products", JSON.stringify(data));

  console.log(data);
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    getFormData();
  });
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
