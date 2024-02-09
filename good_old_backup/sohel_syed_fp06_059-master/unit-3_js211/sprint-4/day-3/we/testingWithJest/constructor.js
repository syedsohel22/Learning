function Car(name, brand, color, price) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.price = price;
}

Car.prototype.drive = function () {
  return `${this.brand} ${this.name} is running`;
};

export { Car };
