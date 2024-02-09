// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const pitchURL = `${baseServerURL}/pitches`;
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

const getDataFn = async () => {
  try {
    let data = await fetch(pitchURL);
    data = await data.json();

    appendFn(data);
  } catch (error) {
    console.log(error);
  }
};

getDataFn();

const appendFn = (data) => {
  mainSection.innerHTML = null;

  let cardList = document.createElement("div");
  cardList.setAttribute("class", "card-list");

  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-id", el.id);

    let cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card-img");

    let img = document.createElement("img");
    img.src = el.image;

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = el.title;

    let cardFounder = document.createElement("p");
    cardFounder.setAttribute("class", "card-founder");
    cardFounder.innerText = el.founder;

    let cardCategory = document.createElement("p");
    cardCategory.setAttribute("class", "card-category");
    cardCategory.innerText = el.category;

    let cardPrice = document.createElement("p");
    cardPrice.setAttribute("class", "card-price");
    cardPrice.innerText = el.price;

    let editBtn = document.createElement("a");
    editBtn.setAttribute("data-id", el.id);
    editBtn.innerText = "Edit";
    editBtn.setAttribute("class", "card-link");
    editBtn.setAttribute("href", "#");

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("data-id", el.id);
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("class", "card-button");
    deleteBtn.addEventListener("click", () => {
      deletePost(el.id);
    });

    cardImg.append(img);
    cardBody.append(
      cardTitle,
      cardFounder,
      cardCategory,
      cardPrice,
      editBtn,
      deleteBtn
    );
    card.append(cardImg, cardBody);
    cardList.append(card);
  });
  mainSection.append(cardList);
};

pitchCreateBtn.addEventListener("click", async () => {
  let obj = {
    title: pitchTitleInput.value,
    category: pitchCategoryInput.value,
    image: pitchImageInput.value,
    founder: pitchfounderInput.value,
    price: pitchPriceInput.value,
  };

  try {
    await fetch(`${baseServerURL}/pitches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    getDataFn();
  } catch (err) {
    console.log(err);
  }
});

const deletePost = async (id) => {
  try {
    await fetch(`${baseServerURL}/pitches/${id}`, {
      method: "DELETE",
    });
    getDataFn();
  } catch (err) {
    console.log(err);
  }
};

sortAtoZBtn.addEventListener("click", async () => {
  try {
    let data = await fetch(`${baseServerURL}/pitches?_sort=price&_order=asc`);
    data = await data.json();
    appendFn(data);
  } catch (err) {
    console.log(err);
  }
});

sortZtoABtn.addEventListener("click", async () => {
  try {
    let data = await fetch(`${baseServerURL}/pitches?_sort=price&_order=desc`);
    data = await data.json();
    appendFn(data);
  } catch (err) {
    console.log(err);
  }
});

filterFood.addEventListener("click", async () => {
  try {
    let data = await fetch(`${baseServerURL}/pitches?category=Food`);
    data = await data.json();
    appendFn(data);
  } catch (err) {
    console.log(err);
  }
});

filterElectronics.addEventListener("click", async () => {
  try {
    let data = await fetch(`${baseServerURL}/pitches?category=Electronics`);
    data = await data.json();
    appendFn(data);
  } catch (err) {
    console.log(err);
  }
});
filterPersonalCare.addEventListener("click", async () => {
  try {
    let data = await fetch(`${baseServerURL}/pitches?category=Personal Care`);
    data = await data.json();
    appendFn(data);
  } catch (err) {
    console.log(err);
  }
});
