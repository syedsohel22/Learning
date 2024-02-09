let API = `https://jsonmock.hackerrank.com/api/articles`;
let apicall = async () => {
  let res = await fetch(API);
  res = await res.json();

  let data = res.data;
  console.log(data);
  appedData(data);
};
apicall();

let appedData = (data) => {
  let container = document.getElementById("container");

  data.forEach((e) => {
    let div = document.createElement("div");
    div.id = "resdiv";

    let title = document.createElement("p");
    title.textContent = e.title;

    let author = document.createElement("p");
    author.textContent = e.author;

    let num_comments = document.createElement("p");
    num_comments.textContent = e.num_comments;

    div.append(title, author, num_comments);
    container.append(div);
  });
};
