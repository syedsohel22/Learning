// function addamount() {
//   let money = +document.getElementById("amount").value;
//   // let total = total + money;
//   console.log(money);
//   //add to localstorage
//   let amount = JSON.parse(localStorage.getItem("amount"));

//   localStorage.setItem("amount", JSON.stringify(amount));

//   //   document.getElementById("amount").value.null;
// }
// addamount();
// let amount = () => {
//   let m = JSON.parse(localStorage.getItem("amount")).value;
//   let w = document.getElementById("wallet");
//   w.innerText = m;
// };
// amount();
let amount = JSON.parse(localStorage.getItem("amount"));
let amt = 0;
let addamount = () => {
  let a = +document.getElementById("amount").value;

  console.log(a);
  amt += a;
  let m = document.getElementById("wallet");
  m.innerText = amount;
  amount = JSON.parse(localStorage.getItem("amount"));
  amount = amount + amt;
  localStorage.setItem("amount", JSON.stringify(amount));
  showamt();
};
let showamt = () => {
  let m = document.getElementById("wallet");
  let amount = JSON.parse(localStorage.getItem("amount")) || 0;
  m.innerText = amount;
};
