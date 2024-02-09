let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
function append(data) {
  let container = document.getElementById("mobile_list");
  // data = JSON.parse(localStorage.getItem("mobile_data")) || [];
  container.innerHTML = null;
  data.forEach((e, index) => {
    let div = document.createElement("div");

    let name = document.createElement("h4");
    name.textContent = e.name;

    let brand = document.createElement("h6");
    brand.textContent = e.brand;

    let price = document.createElement("p");
    price.textContent = e.price;

    let image = document.createElement("img");
    image.src = e.image;

    let delete_btn = document.createElement("button");
    delete_btn.textContent = "Remove";
    delete_btn.onclick = () => {
      remove(index);
    };
    div.append(image, name, brand, price, delete_btn);
    container.append(div);
  });
}

function remove(index) {
  // logic to remove the mobiles data on selected index
  data = JSON.parse(localStorage.getItem("mobile_data")) || [];

  data.splice(index, 1);

  localStorage.setItem("mobile_data", JSON.stringify(data));
  append(data);
}

function sortLowToHigh() {
  // sort the list of mobiles in ascendning order of price
  data = JSON.parse(localStorage.getItem("mobile_data")) || [];

  data.sort((a, b) => a.price - b.price);
  append(data);
  console.log("LH");
}

function sortHighToLow() {
  // sort the list of mobiles in descending order of the price
  data = JSON.parse(localStorage.getItem("mobile_data")) || [];

  data.sort((a, b) => b.price - a.price);
  append(data);
  console.log("HL");
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
    sortLowToHigh,
    sortHighToLow,
  };
}
