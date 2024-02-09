let query = document.getElementById("query").value;
let search = async () => {
  try {
    let query = document.getElementById("query").value;
    let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
    res = await res.json();

    let data = res.results;
    console.log(data);
    appendlist(data);
  } catch (e) {
    console.log(e);
  }
};

let id;

let debounce = (func, time) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    func();
  }, time);
};

let appendlist = (data) => {
  let container = document.getElementById("resultList");
  data.forEach((e) => {
    let div = document.createElement("div");
    div.id = "resdivs";
    div.addEventListener("click", () => {
      savelocal(e);
    });

    let name = document.createElement("p");
    name.textContent = e.name;

    let by = document.createElement("p");
    by.textContent = e.birth_year;

    let gender = document.createElement("p");
    gender.textContent = e.gender;

    div.append(name, by, gender);
    container.append(div);
  });
};

let savelocal = (e) => {
  let arr = JSON.parse(localStorage.getItem("char")) || [];
  console.log("hello");
  console.log(e);
  arr.push(e);
  localStorage.setItem("char", JSON.stringify(arr));

  window.location.href = "./char.html";
};
// let appendData = (data) => {
//   let container = document.getElementById("container");
//   data.forEach((e) => {
//     let div = document.createElement("div");

//     let name = document.createElement("p");
//     name.textContent = e.name;

//     let by = document.createElement("p");
//     by.textContent = e.birth_year;

//     let gender = document.createElement("p");
//     gender.textContent = e.gender;

//     let height = document.createElement("p");
//     height.textContent = e.height;

//     let eye_color = document.createElement("p");
//     eye_color.textContent = e.eye_color;

//     let mass = document.createElement("p");
//     mass.textContent = e.mass;

//     let hair_color = document.createElement("p");
//     hair_color.textContent = e.hair_color;

//     div.append(name, by, gender, height, eye_color, mass, hair_color);
//     container.append(div);
//   });
// };
