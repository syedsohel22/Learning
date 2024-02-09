

let form = document.querySelector("form").addEventListener("submit", toadd);
 
let LSData = JSON.parse(localStorage.getItem("book-list")) || [];

function toadd(event) {
  event.preventDefault();
  console.log("working here");
 

  let name = document.querySelector("#name").value;
  let author = document.querySelector("#author").value;
  let desc = document.querySelector("#desc").value;
  let added = document.querySelector("#added").value;
  let category = document.querySelector("#category").value;
  let price = document.querySelector("#price").value

  obj = {
  name,
  author,
  desc,
  added,
  category,
  price
  };
  LSData.push(obj)
  LSData = JSON.stringify(localStorage.setItem("book-list", LSData));
}