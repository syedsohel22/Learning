function user(n, e, a, m) {
  this.name = n;
  this.email = e;
  this.address = a;
  this.amount = m;
}

function submitdata() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let amount = document.getElementById("amount").value;

  let user1 = new user(name, email, address, amount);
  console.log(user1);
  let data = JSON.parse(localStorage.getItem("user")) || [];
  data.push(user1);

  localStorage.setItem("user", JSON.stringify(data));
}
