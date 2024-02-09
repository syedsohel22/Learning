// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items

//console.log()

//tastk-1 getdata

async function grodata() {
  let data = await fetch(`https://grocery-mock-api.herokuapp.com/items`);

  let res = await data.json();
  console.log(res.data);
  appenddata(res.data);
}

grodata();

function appenddata(res) {
  //tastk-2 append img,name price ,button;
  //   let thing = res.data;

  res.forEach(function (el) {
    let items = document.getElementById("items");

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let name = document.createElement("p");
    package.innerhtml = el.name;

    div.append(img, name);
    items.append(div);
  });
}
