function Product(name, brand, price, description, sold) {
  // Complete the constructor function
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.description = description;
  this.sold = sold || false;
}

Product.changePrice = function (new_price) {
  this.price = new_price;
};

Product.toggleStatus = function () {
  if (this.sold == false) {
    this.sold = true;
  }
};
// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
