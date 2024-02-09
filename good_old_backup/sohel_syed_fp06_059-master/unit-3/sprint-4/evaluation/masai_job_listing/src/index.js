// display the listing cards
//info have json data

const jobp = async () => {
  try {
    let res = await fetch(`./data.json`);
    let data = await res.json();
    console.log(data);
    displayCards(data);
    filterByRole(data);
    searchByLanguage(data);
  } catch (error) {
    console.log(error);
  }
};

jobp();
jobp(filterByRole());
function displayCards(data) {
  let mainContainer = document.querySelector("#container");
  // map through the data and append each acrd to the main container
  data.forEach((el) => {
    let div = document.createElement("div");
    div.id = "cart";

    let logo = document.createElement("img");
    logo.src = `https://www.logodesign.net/logo/crossed-steel-pillars-2472ld.png`;

    let company = document.createElement("p");
    company.innerHTML = el.company;

    let position = document.createElement("p");
    position.innerHTML = el.position;

    let postedAt = document.createElement("p");
    postedAt.innerHTML = el.postedAt;

    let location = document.createElement("p");
    location.innerHTML = el.location;

    let role = document.createElement("p");
    role.innerHTML = el.role;

    let language = document.createElement("p");
    language.innerHTML = el.language;

    let level = document.createElement("p");
    level.innerHTML = el.level;
    div.append(
      logo,
      company,
      position,
      postedAt,
      location,
      role,
      language,
      level
    );
    mainContainer.append(div);
  });
  return mainContainer;
}

// filter by role
function filterByRole(data) {
  let filter_r = document.getElementById("change-role").value;
  filter_r.addEventListener("change");
  console.log(filter_r);
  let rolec = data.filter((val) => val.role == filter_r);
  console.log(rolec.length);
}

// search by language
function searchByLanguage(data) {
  let search_q = document.getElementById("search-input").value;
  console.log(search_q);
  let c = 0;
  for (let i = 0; i < data.length; i++) {
    if (search_q == data[i].language) {
      c++;
    }
  }
  console.log(data);
  return c;
}

// document.getElementById("search-btn").addEventListener("click", sbtn);

// function sbtn() {
//   searchByLanguage();
// }
// sbtn();
window.onload = function () {
  // on load display data
  // add click and chnage events for search button and input
  document
    .getElementById("search-input")
    .addEventListener("click", searchByLanguage);
  // document
  //   .getElementById("change-role")
  //   .addEventListener("change", filterByRole);
};

if (typeof exports !== "undefined") {
  module.exports = {
    displayCards,
    filterByRole,
    searchByLanguage,
  };
}
