import { navbar } from "./components/navbar.js";
//console.log(navbar);

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let create_btn = document.getElementById("create_btn");
create_btn.addEventListener("click", function () {
  addPost();
});

let inp = document.getElementById("image");
inp.addEventListener("change", function () {
  handleImage(event);
});

let image_url;

const addPost = async () => {
  let caption = document.getElementById("caption").value;

  let id = document.getElementById("id").value;

  let send_this_data = {
    caption,
    id,
    image_url,
  };
  console.log(send_this_data);

  let res = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    body: JSON.stringify(send_this_data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  console.log(data);
};

const handleImage = async (event) => {
  try {
    let image = document.getElementById("image");
    //   console.log(event);
    //   console.log(image);

    let actual_img = image.files[0];
    console.log(actual_img);

    let form = new FormData();

    form.append("image", actual_img);

    let res = await fetch(
      `https://api.imgbb.com/1/upload?key=0f8c9c7bd8dd1e8f870979d97d52cb9c`,
      {
        method: "POST",
        body: form,
      }
    );
    let data = await res.json();

    image_url = data.data.display_url;
    console.log(data);
    console.log(image_url);
  } catch (error) {
    console.log(error);
  }

  //
};
