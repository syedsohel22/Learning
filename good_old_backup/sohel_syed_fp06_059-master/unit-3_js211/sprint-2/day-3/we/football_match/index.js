const url = "https://jsonmock.hackerrank.com/api/football_matches";

let page = 1;
let getData = async (p) => {
  try {
    let res = await fetch(`${url}?page=${p}`);
    res = await res.json();
    renderDom(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
getData();

let el = (tag) => {
  return document.createElement(tag);
};
let matchCard = ({ competition, team1, team2, year }) => {
  let div = el("div");
  div.setAttribute("class", "card");
  let comp = el("h3");
  comp.innerText = competition;
  let t1 = el("p");
  t1.innerText = team1;
  let t2 = el("p");
  t2.innerText = team2;
  let y = el("p");
  y.innerText = year;

  div.append(comp, t1, t2, y);
  return div;
};
let renderDom = (data) => {
  let cont = document.getElementById("container");
  cont.innerHTML = null;
  data.forEach((el) => {
    let card = matchCard(el);
    cont.append(card);
  });
};

let previous = () => {
  if (page === 1) {
    return;
  }
  page--;
  getData(page);
};

let next = () => {
  if (page === 1159) {
    return;
  }
  page++;
  getData(page);
};

let search = async () => {
  let team1 = document.getElementById("team1").value;
  let team2 = document.getElementById("team2").value;
  let year = document.getElementById("year").value;
  let page = document.getElementById("page").value;

  let u = `${url}?`;

  if (team1) {
    u = u + `team1=${team1}`;
  }
  if (team2) {
    u = u + `team2=${team2}`;
  }

  if (year) {
    u = u + `&year=${year}`;
  }

  if (page) {
    u = u + `&page=${page}`;
  }
  try {
    let res = await fetch(u);
    res = await res.json();
    renderDom(res.data);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
