const url = `https://todoappbysohel.herokuapp.com/api/todo`;
const container = document.getElementById("container");

let getdata = async () => {
  let res = await fetch(url);
  res = await res.json();
  console.log(res);
  renderDom(res);
};

console.log("hi");
getdata();

let card = (t, s, id) => {
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let togglebtn = document.createElement("button");
  let deletebtn = document.createElement("button");

  h3.innerText = t;
  p.innerText = s;
  togglebtn.innerText = "Toggle";
  togglebtn.onclick = () => {
    toggleTodo(id);
  };
  deletebtn.innerText = "Delete";
  deletebtn.onclick = () => {
    deleteTodo(id);
  };
  div.append(h3, p, togglebtn, deletebtn);
  return div;
};

let renderDom = (data) => {
  container.innerHTML = null;
  data.forEach(({ title, status, id }) => {
    let todo = card(title, status, id);
    container.append(todo);
  });
};

let addTodo = async () => {
  let t = document.getElementById("todo").value;
  let todo = {
    title: t,
    id: Date.now() + t,
    status: false,
  };

  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });

  getdata();
};

let toggleTodo = async (id) => {
  let todo = await fetch(`${url}/${id}`);
  todo = await todo.json();

  let data = { status: !todo.status };

  let res = await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  getdata();
};

let deleteTodo = async (id) => {
  let res = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  getdata();
};

let sort = async () => {
  let res = await fetch(`${url}?_sort=title&_order=desc`);
};
//updated files
