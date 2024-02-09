function UserInfo(n, l) {
  this.name = n;
  this.location = l;
}

function serveFood(food) {
  return `Serving ${food} to ${this.name} in ${this.location}`;
}
function serveIn(n, l, food) {
  let u1 = new UserInfo(n, l);

  return serveFood.call(u1, food);
}
function billNote(total) {
  return `${this.name}'s bill is INR ${total}`;
}
function generateInVoice(n, l, q, p) {
  let u2 = new UserInfo(n, l);
  return billNote.apply(u2, [q * p]);
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
