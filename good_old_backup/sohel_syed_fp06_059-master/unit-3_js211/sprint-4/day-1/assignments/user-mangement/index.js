const api = "http://localhost:3000/user";
//Fetching the user form server and show to DOM
let showUser = async () => {
  let res = await fetch(api);
  res = await res.json();
  renderDom(res);
};
showUser();

let userCard = ({ id, name, batch, course, age, mobile, score }) => {
  let div = document.createElement("div");
  div.setAttribute("class", "card");
  let n = document.createElement("h3");
  let b = document.createElement("p");
  let c = document.createElement("p");
  let a = document.createElement("p");
  let m = document.createElement("p");
  let s = document.createElement("p");
  let deleteBtn = document.createElement("button");
  let updateBtn = document.createElement("button");

  n.innerText = name;
  b.innerText = `Batch: ${batch}`;
  c.innerText = `Course: ${course}`;
  a.innerText = `age: ${age}`;
  m.innerText = `Mob: ${mobile}`;
  s.innerText = `Score: ${score}`;
  deleteBtn.innerText = "Delete";
  updateBtn.innerText = "Update";

  deleteBtn.onclick = () => {
    deleteUser(id);
  };
};
let addUser = async (e) => {
  e.preventDefault();

  let form = document.getElementById("user-form");
  let name = form.name.value;
  let batch = form.batch.value;
  let course = form.course.value;
  let age = +form.age.value;
  let mobile = +form.mobile.value;
  let score = +form.score.value;
  let user = { name, batch, course, age, mobile, score };
  console.log(user);
};
