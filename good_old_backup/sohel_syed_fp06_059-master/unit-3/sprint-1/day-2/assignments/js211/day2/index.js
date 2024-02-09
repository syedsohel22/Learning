function constructor(name, price, brand, company) {
  this.name = name;
  this.price = price;
  this.brand = brand;
  this.company = company;
}

let p1 = new constructor("shoe", 300, "nike", "big");
console.log(p1);
