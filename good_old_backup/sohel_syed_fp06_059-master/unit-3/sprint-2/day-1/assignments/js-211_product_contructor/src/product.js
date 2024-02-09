function Product(name, brand, price, description, sold) {
  // Complete the constructor function
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.description = description;
  this.sold = false;
}

/*
   name: "String",
    brand: "String",
    price: "Number",
    description: "String",
    sold: false*/
// Create these two methods in Product prototype :-

// changePrice

Product.prototype.changePrice = function (new_price) {
  this.price = new_price;
};
// toggleStatus
Product.prototype.toggleStatus = function () {
  this.sold = !this.sold;
};

// Do not change this
export default Product;
