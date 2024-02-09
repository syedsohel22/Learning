function UserInfo(name, location) {
  this.name = name;
  this.location = location;
}

function serveFood(food) {
  return `Serving ${food} to ${this.name} in ${this.location}`;
}
function serveIn(name, location, food) {
  let u1 = new UserInfo(name, location);

  return serveFood.call(u1, food);
}
function billNote(total) {
  return `${this.name}'s bill is INR ${total}`;
}
function generateInVoice(name, location, quantity, price) {
  let u2 = new UserInfo(name, location);
  return billNote.apply(u2, [price * quantity]);
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
