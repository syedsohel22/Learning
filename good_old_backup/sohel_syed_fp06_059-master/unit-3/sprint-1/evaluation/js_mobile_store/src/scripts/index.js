window.onload = function () {
  document
    .getElementById("mobile_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      getInputData();
    });
};

function getInputData() {
  console.log("form hi");
  let name = document.getElementById("mobile_name").value;
  let brand = document.getElementById("mobile_brand").value;
  let price = +document.getElementById("mobile_price").value;
  let image = document.getElementById("mobile_image").value;

  addData(name, brand, price, image);

  document.getElementById("mobile_name").value = null;
  document.getElementById("mobile_brand").value = null;
  document.getElementById("mobile_price").value = null;
  document.getElementById("mobile_image").value = null;
}

function addData(name, brand, price, image) {
  let p = { name, brand, price, image };
  let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
  data.push(p);
  localStorage.setItem("mobile_data", JSON.stringify(data));
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    addData,
  };
}
