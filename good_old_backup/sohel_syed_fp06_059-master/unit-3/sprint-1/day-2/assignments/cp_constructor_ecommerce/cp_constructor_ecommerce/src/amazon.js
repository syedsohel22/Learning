function Listing(name, category, image, price, sold) {
  this.name = name;
  this.category = category;
  this.image = image;
  this.price = price;
  this.sold = sold || false;
}

function getFormData() {
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let image = document.getElementById("image").value;
  let price = document.getElementById("price").value;

  let p1 = new Listing(name, category, image, price);
  addListing(name, category, image, price);
  console.log([name, category, image, price]);
  console.log(p1);
}

function addListing(input, category, image, price, gender) {
  localStorage.getItem("Products", JSON.stringify("Products"));
  let data = JSON.parse(localStorage.getItem("Prducts"));
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
