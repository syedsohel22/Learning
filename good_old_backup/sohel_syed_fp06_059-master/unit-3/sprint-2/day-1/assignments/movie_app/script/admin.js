function movies(n, d, p, r) {
  this.name = n;
  this.r_date = d;
  this.poster = p;
  this.rating = r;
}

document.getElementById("userData").addEventListener("submit", submitData);

function submitData(e) {
  e.preventDefault();

  let form = document.getElementById("userData");
  let name = form.name.value;
  let relase = form.r_date.value;
  let poster = form.poster.value;
  let rating = form.rating.value;

  // console.log(name,relase,poster,rating)

  let m1 = new movies(name, relase, poster, rating);

  console.log("new movie", m1);

  let data = JSON.parse(localStorage.getItem("movies")) || [];

  data.push(m1);

  localStorage.setItem("movies", JSON.stringify(data));

  //console.log('hello there')

  //let url = document.getElementById()
}
