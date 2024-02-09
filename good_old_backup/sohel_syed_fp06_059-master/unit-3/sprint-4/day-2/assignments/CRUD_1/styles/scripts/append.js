//
const appendData = (data, container) => {
  container.innerhtml = null;

  data.forEach(({ caption, image_url }) => {
    let div = document.createElement("div");

    let caption_p = document.createElement("p");
    caption_p.innerText = caption;

    let img = document.createElement("img");
    img.src = image_url;
  });
};
