let amount = JSON.parse(localStorage.getItem("amount"));
let amt = 0;
let addamount = () => {
  let a = +document.getElementById("amount").value;

  amount = JSON.parse(localStorage.getItem("amount"));
  amount += a;
  localStorage.setItem("amount", JSON.stringify(amount));
  document.getElementById("amount").value.null;
  showamt();
};
let showamt = () => {
  let m = document.getElementById("wallet");
  let amount = JSON.parse(localStorage.getItem("amount")) || 0;
  m.innerText = amount;
};
