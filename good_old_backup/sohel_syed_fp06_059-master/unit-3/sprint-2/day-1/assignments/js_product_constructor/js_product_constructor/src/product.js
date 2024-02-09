function Product(n, b, p, d) {
  // Complete the constructor function
  this.name = n;
  this.brand = b;
  this.price = p;
  this.description = d;
  this.sold = false;
}

Product.prototype.changePrice = function (new_price) {
  this.price = new_price;
};

Product.prototype.toggleStatus = function () {
  this.sold = !this.sold;
};

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
