// Function constructor
function FourWheeler(wheels, model, color, speed, fuel) {
  this.wheels = wheels;
  this.model = model;
  this.color = color;
  this.speed = speed;
  this.fuel = fuel;
}
FourWheeler.prototype.setSpeed = function (speed) {
  this.speed = speed;
};
FourWheeler.prototype.updateColor = function (color) {
  this.color = color;
};
FourWheeler.prototype.updateFuel = function (fuel) {
  this.fuel = fuel;
};
// Parent object fro Object.create
let FourWheelerObject = {
  wheels: "four",
  model: "XUV",
  color: "white",
  speed: 40,
  fuel: 100,
};

// Store function contructor object here
var car1 = new FourWheeler("four", "super", "black", 200, 500);

// Store Object.create here
var car2 = Object.create(FourWheelerObject);
car2.wheels = "four";
car2.model = "mini";
car2.color = "blue";
car2.speed = 40;
car2.fuel = 100;

export { car1, car2 };
