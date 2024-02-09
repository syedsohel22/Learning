const API = "https://masaiverse-json-server.onrender.com";
const container = document.getElementById("data-container");
let sortLH = document.getElementById("sortLH");
let sortHL = document.getElementById("sortHL");
let filtercat = document.getElementById("filter-profession");
let searchbyname = document.getElementById("search-name");
const getData = async () => {
  try {
    let data = await fetch(`${API}/users?_page=1&_limit=4`);
    data = await data.json();
    //append function here
    appendData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

const appendData = (data) => {
  container.innerHTML = null;
  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "user-card");

    let image = document.createElement("img");
    image.src =
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg";

    let name = document.createElement("p");
    name.innerHTML = el.name;
    let age = document.createElement("p");
    age.innerHTML = el.age;
    let batch = document.createElement("p");
    batch.innerHTML = el.batch_name;
    let place = document.createElement("p");
    place.innerHTML = el.place;
    let profession = document.createElement("p");
    profession.innerHTML = el.profession;

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "DELETE";
    deletebtn.addEventListener("click", () => {
      deleteuser(el.id);
    });
    let updatebtn = document.createElement("button");
    updatebtn.innerText = "UPDATE";
    updatebtn.addEventListener("click", () => {
      updateuser(el);
    });

    card.append(
      image,
      name,
      age,
      place,
      batch,
      profession,
      deletebtn,
      updatebtn
    );
    container.append(card);
  });
};

const deleteuser = async (id) => {
  try {
    let data = await fetch(`${API}/users/${id}`, {
      method: "DELETE",
    });
    data = await data.json();
    //append function here
    appendData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const updateuser = (el) => {};

// sort

sortLH.addEventListener("click", async () => {
  try {
    let data = await fetch(`${API}/users?_sort=age&_order=asc`);
    data = await data.json();
    //append function here
    appendData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

// desc
sortHL.addEventListener("click", async () => {
  try {
    let data = await fetch(`${API}/users?_sort=age&_order=desc`);
    data = await data.json();
    //append function here
    appendData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
// filter
filtercat.addEventListener("change", async () => {
  let val = filtercat.value;
  try {
    let data = await fetch(`${API}/users?profession=${val}`);
    data = await data.json();
    //append function here
    appendData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
// search

searchbyname.addEventListener("input", async () => {
  let val = searchbyname.value;
  try {
    let data = await fetch(`${API}/users?q=${val}`);
    data = await data.json();
    //append function here
    appendData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
